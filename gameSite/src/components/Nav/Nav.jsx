import React from 'react'
import logo from "../../assets/logo.webp"
import { Image, useColorMode } from '@chakra-ui/react'
import "./Nav.css"
import { FaSearch } from "react-icons/fa";
import { Input,Box } from '@chakra-ui/react';
import { Switch,IconButton } from '@chakra-ui/react'
import { InputGroup, Button,ButtonGroup, InputLeftElement } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BsSearch } from "react-icons/bs";


const Nav = ({setSearchinp}) => {
  const { colorMode, toggleColorMode } = useColorMode()
  const handleSwitch=(e)=>{
    // console.log("hello")
    // console.log(e)
   
  }
  return (
    <div className='bg'>
      <div className='main'>

        <Image boxSize='5rem' src={logo} alt="page logo"/>
        <span className='search '>
        <InputGroup>
        <InputLeftElement children={<BsSearch/>} />
 
        <Input onChange={(e)=>{
          setSearchinp(e.target.value)

        }} placeholder='Search for your games  ' borderRadius='full' variant='filled'
        />
        </InputGroup>
        </span>
        <span className='Darkmode'>

        <Switch id='darkMode' onChange={toggleColorMode} >
        
          </Switch>
        <label htmlFor="darkMode">Dark mode</label>
        </span>
        <Link to={'/Signin'}>Login
        </Link>
      </div>
    </div>
  )
}

export default Nav
