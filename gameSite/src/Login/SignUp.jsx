import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Text, Box, Input, Button } from "@chakra-ui/react";
import "./Signin.css";
import axios from "axios";
const SignUp = () => {
  const [UserName, setUserName] = useState();
  const [Email, setEmail] = useState();
  const [PassWord, setPassword] = useState();
  function handleSubmit(e) {
    e.preventDefault();
    const userData={
      UserName,
      Email,
      PassWord
    }
    console.log(userData)

    axios.post("http://localhost:8080/signup",userData)
    .then(res=>console.log(res.data))
    .catch(e=> console.log(e))
    
  }
  return (
    <div>
      <Box className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <Box className="user-box">
            <Input
              onChange={(e) => setUserName(e.target.value)}
              type="text"
              name=""
              required=""
            />
            <label>UserName</label>
          </Box>
          <Box className="user-box">
            <Input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name=""
              required=""
            />
            <label>Email</label>
          </Box>
          <Box className="user-box">
            <Input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
            <label>Password</label>
          </Box>
          <Button type="submit" colorScheme="blue" id="btn" href="#">
            Register
          </Button>
          <Link to={"/SignIn"}>or Login</Link>
        </form>
        <Text>Coded by Soufiane Khalfaoui Hassani</Text>
      </Box>
    </div>
  );
};

export default SignUp;
