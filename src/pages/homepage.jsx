import { Heading, Hide, Box, Show, Button, Stack } from "@chakra-ui/react";
// import {Card} from "./card"
import axios from "axios";
import { useEffect } from "react";
import { AddIcon } from "@chakra-ui/icons";
import { getComment, getData } from "../Redux/App/action";
import { useDispatch, useSelector } from "react-redux";
import SigleBlog from "../components/card";
import { Link } from "react-router-dom";
export default function Homepage() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.AppReducer.data);
  // const comments = useSelector((state) => state.AppReducer.comments);
  // console.log(comments);
  useEffect(() => {
    dispatch(getData);
    // dispatch(getComment);
  }, []);
  return (
    <Box>
      <Link to={"/newblog"}></Link>
      <Stack>
        {data.length > 0 &&
          data.map((el) => {
            return <SigleBlog key={el._id} data={el} />;
          })}
      </Stack>
    </Box>
  );
}
