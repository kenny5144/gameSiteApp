import React from "react";
import useApi from "../api.js";
import { useQueryClient, useQuery } from "@tanstack/react-query";
import { Text,Link, Box, Flex, Image } from "@chakra-ui/react";

const Gernes = ({settitle, setGameData}) => {
  const { isLoading ,data, isError, isFetching} = useApi('genres');
 
  if(isLoading){
    return(

      <div>Loading... </div>
    )
  }
  if(isError){
    return(

      <div>an error has occured {isError}</div>
    )
  }

  const handleclick = (event) => {
    // console.log("hi" + event.target.innerHTML );
    settitle(event.target.innerHTML)
    setGameData(null)
  };

  return (
    <>
      <Box ml="1.5rem" mt="3rem">
        <Text fontSize="2xl" as="b" pb="1rem">
          {" "}
          Genres
        </Text>
        {

        }
        {data.results.map((data) => {
          return (
            <Box key={data.id}>
              <Flex >
                <Image
              
                  boxSize="2rem"
                  borderRadius="lg"
                  src={data.image_background}
                  alt="image if the coressponding gernes "
                />
                <Link onClick={handleclick} pl="1rem"  pb="1rem" >
                  {data.name}
                </Link>
              </Flex>
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export default Gernes;
