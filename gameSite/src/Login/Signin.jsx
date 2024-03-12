import React from "react";
import {
  Text,
  Stack,
  Card,
  Heading,
  Box,
  CardBody,
  Flex,
  Input,
  Select,
  Image,
} from "@chakra-ui/react";
import "./Signin.css";
import { Link } from "react-router-dom";
const Signin = () => {
  return (
    <>
      <Box className="login-box">
        <h2>Login</h2>
        <form>
          <Box className="user-box">
            <Input type="text" name="" required="" />
            <label>Username</label>
          </Box>
          <Box className="user-box">
            <Input type="password" />
            <label>Password</label>
          </Box>
          <a href="#">
        
            Submit
          </a>
          <Link to={'/Signup'}>or Signup</Link>

        </form>
        <Text>Coded by Soufiane Khalfaoui Hassani</Text>
      </Box>
    </>
  );
};

export default Signin;
