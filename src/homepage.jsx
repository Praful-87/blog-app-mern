import { Heading, Hide, Box, Show, Button, Stack } from "@chakra-ui/react";
// import {Card} from "./card"
import axios from "axios";
import { useEffect } from "react";
import { AddIcon } from "@chakra-ui/icons";
import SigleBlog from "./card";
export default function Homepage() {
  const isAuth = true;
  const data = [1,1,1,1];
  async function getData() {
    try {
      let res = await axios.get("https://jsonplaceholder.typicode.com/todos/");
      let data = await res.data;
      console.log(data);
    } catch (err) {}
  }
  useEffect(() => {
    // getData();
  }, []);
  return (
    <Box h="100vh">
      <Button
        size={"sm"}
        fontSize={"sm"}
        colorScheme={"facebook"}
        variant={"outline"}
        pos={"fixed"}
        bottom="10px"
        right="10px"
        zIndex={400}
        leftIcon={<AddIcon />}
      >
        New Blog
      </Button>
      <Stack>
        {data.map((el, i) => {
          return <SigleBlog key={i} />;
        })}
      </Stack>
    </Box>
  );
}
