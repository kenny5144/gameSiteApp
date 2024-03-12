import React from 'react'
import useApi from "../api";
import {
    Text,
    Stack,
    Card,
    Heading,
    Wrap,
    Box,
    CardBody,
    Flex,
    Select,
    Image,
  } from "@chakra-ui/react";
const Searchinp = ({searchinp, games }) => {
 
      console.log(games)

    const SearchGamesDisplay = games.filter((data)=>data.name.toLowerCase().includes(searchinp.toLowerCase()))
    
    return (
        <>        
        
        
        <Wrap   >
        {SearchGamesDisplay &&
        SearchGamesDisplay.map((data) => {
          return (

            <Box key={data.id}>


            <Card  key={data.id}  maxW="sm">
              <CardBody>
                <Image
                  src={data.background_image}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{data.name}</Heading>
                 
                </Stack>
              </CardBody>
            </Card>
            </Box>
            
            );
        })}
        </Wrap>
    </>
  )
}

export default Searchinp