import React from "react";
import { Box, Input, FormLabel, FormControl, Heading, Button } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleAuth } from "../Redux/Auth/Action";
import { setUser } from "../Redux/User/Action";




export const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { allUser } = useSelector(state => state.AllUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  

  const handleSubmit = () => {
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
    </Box>
  );
}