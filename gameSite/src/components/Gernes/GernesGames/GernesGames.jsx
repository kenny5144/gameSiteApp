import React from 'react'
import {
  Text,
  Stack,
  Card,
  Heading,
  Box,
  CardBody,
  Flex,
  Select,
  SimpleGrid,
  Image,
  Wrap,
} from "@chakra-ui/react";

const GernesGames = ({title, games, setGenresgameData}) => {
  console.log(title)
  
  const getGames = games.filter((game) =>
  game.genres.some((genre) => genre.name===title)
);
  
  console.log(getGames)
  return (
    <>
    <Wrap>

    {getGames.map((data)=>{

      return(
 
 
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
       
       )
    }
    )}
    </Wrap>

    
    </>
  )
}

export default GernesGames