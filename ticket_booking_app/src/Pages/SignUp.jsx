import React from "react";
import {
  Box,
  Input,
  FormHelperText,
  FormLabel,
  FormControl,
  Heading,
  Button,
} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import { useToast } from "@chakra-ui/react";
import { setAllUser } from "../Redux/AllUsers/Action";

export const SignUp = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isValidPass, setInvalidPass] = React.useState(false);
  const [alreadyPresent, setAlreadyPresent] = React.useState(false);
  const [users, setUsers] = React.useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();



  const fetchUsers = () => {
    fetch("https://jsonserverlive.herokuapp.com/users")
      .then((res) => res.json())
      .then((res) => {
        setUsers(res);
        console.log(res)
        dispatch(setAllUser(res));
      })
      .catch((err) => console.log(err));
  };
  React.useEffect(() => {
    fetchUsers();
  }, []);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const checkIfAlreadyPresent = (email) => {
    let found = users.find((item) => item.email === email);
    let foundalready = found ? setAlreadyPresent(true) : "";
    return found ? true : false;
  };
  const createUser = async (payload) => {
    fetch("https://jsonserverlive.herokuapp.com/users", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        fetchUsers();
        navigate("/login")
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit = async () => {
    const payload = {
      name,
      email,
      password,
    };
    fetch("https://jsonserverlive.herokuapp.com/users")
      .then((res) => res.json())
      .then((res) => {
        setUsers(res);
        let passStatus = password.length < 4 ? setInvalidPass(true) : "";
        let resp = checkIfAlreadyPresent(email);
        return resp ? (<div>Already present</div>) : createUser(payload);
      });
  };

  return (
    <Box pr="30%" pl="40%" pt="5%">
      <Heading fontSize={32} mb="30px">
        Sign up to begin
      </Heading>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          width="20rem"
          mb="20px"
          placeholder="Enter your Name"
          value={name}
          id="name"
          onChange={handleName}
        />

        <FormLabel>Email address</FormLabel>
        <Input
          type="email"
          width="20rem"
          value={email}
          placeholder="Enter your Email"
          id="email"
          onChange={handleEmail}
        />
        <FormHelperText mb="20px">We'll never share your email.</FormHelperText>

        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          width="20rem"
          mb="20px"
          placeholder="Enter your Password"
          value={password}
          id="password"
          onChange={handlePassword}
        />

        <FormHelperText width="20rem">
          By creating an account, I agree to all Terms and Conditions and
          Privacy Statement..
        </FormHelperText>
        <Box pl="80px" mt="20px">
          <Button colorScheme="blue" width="120px" onClick={handleSubmit}>
            Continue
          </Button>
        </Box>
      </FormControl>
      {
            isValidPass ? toast({
                title: 'Error in Password!',
                description: "Your need to enter password of length more than 4",
                position: 'top',
                status: 'error',
                duration: 4000,
                isClosable: true,
            }) : alreadyPresent ? toast({
              title: 'This user is already registered',
              description: "Try loggin in instead",
              position: 'top',
              status: 'error',
              duration: 4000,
              isClosable: true,
          }) : ""
          }
    </Box>
  );
};
