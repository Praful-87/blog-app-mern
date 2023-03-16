import { Heading, Hide, Box, Show } from "@chakra-ui/react";
import axios from "axios";
import { useEffect } from "react";

export default function Homepage() {
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
    <>
      <Heading>Homepage</Heading>
      <Show above="md">
        <Box>This text appears at the "sm" value screen width or greater.</Box>
      </Show>
    </>
  );
}
