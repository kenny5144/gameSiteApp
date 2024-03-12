import React from 'react'
import Nav from './Nav/Nav'
import Gernes from './Gernes/Gernes'
import Games from './Games'
import { useState } from 'react'
import { Text,Box, Flex, Image, Wrap } from '@chakra-ui/react'

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
const Main = () => {
  const [title, settitle]= useState("All")
  const [GameData, setGameData] = useState();
   const [searchinp , setSearchinp]=useState()
  

  return (
    <>
        <Nav setSearchinp={setSearchinp}/>
        <Flex>

      <Gernes settitle={settitle} setGameData={setGameData}/>
      <Games setSearchinp={setSearchinp} searchinp={searchinp} GameData={GameData} settitle={settitle} setGameData={setGameData} title={title} />
      
        </Flex>
    </>
  )
}

export default Main
