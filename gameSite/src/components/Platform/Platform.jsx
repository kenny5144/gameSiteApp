import React, { useState } from "react";
import { Text, Box, Flex, Select, Image } from "@chakra-ui/react";
import useApi from "../api";
const Platform = ({ setGameData }) => {
  const [select, setselect] = useState();
  const { isLoading, data, isError, isFetching } = useApi("platforms");
  if (isLoading) {
    return <div>loading</div>;
  }
  const handleSelect = (e) => {
    const v = e.target.value;
   

    const Gamedata = data.results.find((p) => p.name === v);
    
    // console.log(Gamedata)
    const results = Gamedata.games.map((id) =>id.id);
    // console.log(results)
    setGameData(results)
    setselect(v);
  };

  return (
    <>
      <Select
        w="10rem"
        variant="outline"
        onChange={handleSelect}
        value={select}
        placeholder="Platforms"
      >
        {data.results.map((platforms) => {
          // console.log(Select)
          return <option key={platforms.id}>{platforms.name}</option>;
        })}
      </Select>
    </>
  );
};

export default Platform;
