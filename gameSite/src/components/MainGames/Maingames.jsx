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
  
const Maingames = ({data}) => {
    // console.log(data)
  return (
    <>
        <Wrap   gap={1} >
    {data.map((data)=>{
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
        
    })}
    </Wrap>
    </>
  )
}

export default Maingames