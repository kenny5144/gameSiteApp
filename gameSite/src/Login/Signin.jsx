import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
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
  const Navigate= useNavigate()
  const [data, setData] = useState({
    email: "",
    password: "",
  });
 
  function handlechange(e) {
    
    const { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  }
  function Login(e) {
    e.preventDefault();
    console.log("Hello ");
console.log(data)
    axios.post("http://localhost:8080/signin", data)
      .then((res) => {

        console.log(res.data)
       if(res.status===200){
          Navigate("/")
       }
      }
      )
      .catch((e) => console.log(e));
  };

  return (
    <>
      <Box className="login-box">
        <h2>Login</h2>
        <form onSubmit={Login}>
          <Box className="user-box">
            <Input
              name="email"
              value={data.email}
              onChange={handlechange}
              type="email"
              required
            />
            <label>Email</label>
          </Box>
          <Box className="user-box">
            <Input
              name="password"
              value={data.password}
              onChange={handlechange}
              type="password"
              required
            />
            <label>Password</label>
          </Box>
          <button type="submit">Submit</button>
          <Link to={"/Signup"}>or Signup</Link>
        </form>
        <Text>Coded by Soufiane Khalfaoui Hassani</Text>
      </Box>
    </>
  );
};

export default Signin;
