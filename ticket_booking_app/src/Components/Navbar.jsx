import React from "react";
import {
  Box,
  Heading,
  Spacer,
  ButtonGroup,
  Flex,
  Button,
} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

export const Navbar = () => {
  const {authStatus} = useSelector(state => state.auth);
  const {user} = useSelector(state => state.user);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/")
  }
  return (
    <>
      <Box p="2" pr ="15%" pl="15%">
        <Flex minWidth="max-content" alignItems="center" gap="2">
          <Box >
            <Heading fontSize={32} cursor="pointer" onClick = {handleClick}>Flight Booking App</Heading>
          </Box>
          <Spacer />
          {
            authStatus ? <Box>Welcome, {`${user.name}`}</Box>
          : <><ButtonGroup gap="2">
          <Button ><Link to={"/signUp"}>Sign Up</Link></Button>
          <Button ><Link to={"/login"}>Login</Link></Button>
          <Button>Help?</Button>
        </ButtonGroup></>
          }
        </Flex>
      </Box>
    </>
  );
};
