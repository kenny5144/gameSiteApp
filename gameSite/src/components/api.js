import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const Base_Url = "https://api.rawg.io/api";
const Key = "a9f46bc038fe4b49a1f24a8543740ba8";

// gettingData("genres")
export default function useApi(Endpoint) {
  const url = `${Base_Url}/${Endpoint}?key=${Key}`;
  console.log(url);
  return useQuery({
    queryKey: [Endpoint],
    queryFn: async () => {
      const { data } = await axios.get(url);
      console.log(data)
      return data;

    },
  });
}
