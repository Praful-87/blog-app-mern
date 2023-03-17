import { Heading, Hide, Box, Show, Button, Stack } from "@chakra-ui/react";
// import {Card} from "./card"
import axios from "axios";
import { useEffect } from "react";
import { AddIcon } from "@chakra-ui/icons";
import SigleBlog from "./card";
import { getData } from "./Redux/App/action";
import { useDispatch, useSelector } from "react-redux";
export default function Homepage() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.AppReducer.data);
  console.log(data);
  const isAuth = true;
  // const data = [1, 1, 1, 1];

  useEffect(() => {
    dispatch(getData);
  }, []);
  return (
    <Box>
      <Button
        size={"sm"}
        fontSize={"sm"}
        colorScheme={"facebook"}
        pos={"fixed"}
        top="80px"
        right="10px"
        zIndex={400}
        leftIcon={<AddIcon />}
      >
        New Blog
      </Button>
      <Stack>
        {data.length > 0 &&
          data.map((el) => {
            return <SigleBlog key={el._id} data={el} />;
          })}
      </Stack>
    </Box>
  );
}
