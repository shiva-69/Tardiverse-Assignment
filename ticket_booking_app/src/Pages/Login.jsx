import React from "react";
import { Box, Input, FormLabel, FormControl, Heading, Button } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleAuth } from "../Redux/Auth/Action";
import { setUser } from "../Redux/User/Action";
import { useToast } from "@chakra-ui/react";




export const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isValidPass, setInvalidPass] = React.useState(false);
  const { allUser } = useSelector(state => state.AllUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();
  

  const handleSubmit = () => {
    let passStatus = password.length < 4 ? setInvalidPass(true) : "";
    let res = (allUser.find(item => item.email == email && item.password == password))
    let status =  res ? true : false;  
    return status ? (dispatch(toggleAuth(true))) && dispatch(setUser(res)) && navigate("/") : "";

  }

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }
  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  return (
    <Box pr="30%" pl="40%" pt="5%" >
      <Heading fontSize={32} mb="30px">Login to your Account</Heading>
      <FormControl>
        <FormLabel>Email address</FormLabel>
        <Input type="email" width="20rem" id="email" mb="20px" placeholder="Enter your email" onChange={handleEmail} />

        <FormLabel>Password</FormLabel>
        <Input type="password" width="20rem" mb="20px" id="password" placeholder="Enter your Password" onChange={handlePassword} />
        <Box pl="100px" mt="20px"><Button colorScheme="blue" width="120px" onClick={handleSubmit}>Login</Button></Box>
      </FormControl>
      {
            isValidPass ? toast({
                title: 'Error in Password!',
                description: "Your need to enter password of length more than 4",
                position: 'top',
                status: 'error',
                duration: 4000,
                isClosable: true,
            }) : <></>
          }
    </Box>
  );
}