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

export const Navbar = () => {
  return (
    <>
      <Box p="2" pr ="15%" pl="15%">
        <Flex minWidth="max-content" alignItems="center" gap="2">
          <Box >
            <Heading fontSize={32}>Flight Booking App</Heading>
          </Box>
          <Spacer />
          <ButtonGroup gap="2">
            <Button ><Link to={"/signUp"}>Sign Up</Link></Button>
            <Button ><Link to={"/login"}>Login</Link></Button>
            <Button>Help?</Button>
          </ButtonGroup>
        </Flex>
      </Box>
    </>
  );
};
