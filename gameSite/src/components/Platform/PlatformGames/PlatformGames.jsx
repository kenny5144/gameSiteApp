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

const PlatformGames = ({ GameData, games }) => {
  const gamesPlatfrom = GameData
    ? games.filter((games) => GameData.includes(games.id))
    : "";
  console.log(games);
  console.log(gamesPlatfrom);
  return (
    <>
          <Wrap  gap={2} >
      {gamesPlatfrom &&
        gamesPlatfrom.map((data) => {
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
  );
};

export default PlatformGames;
