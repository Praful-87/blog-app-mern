import {
  Button,
  Flex,
  Box,
  Heading,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  Text,
  Avatar,
  IconButton,
  HStack,
  Spacer,
  Center,
  AspectRatio,
  Stack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useDisclosure,
  SlideFade,
  Collapse,
  VStack,
  Input,
  useToast,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { BiLike, BiChat, BiShare } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import React, { useRef, useState } from "react";
import axios from "axios";
import CommentCard from "./comment";
const SigleBlog = ({ data }) => {
  const [used, setUsed] = useState(false);
  const [commnetData, setCommnetData] = useState([]);
  const NewCommnet = useRef(null);
  const toast = useToast();
  // console.log(data)
  const { blog, user_id } = data;
  const { name } = user_id;
  // console.log(data);
  const { isOpen, onToggle } = useDisclosure();
  const commnet = 2;
  const posted = "2022-04-03";
  const post_image =
    "https://images.unsplash.com/photo-1678662543244-51054fbe49e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60";
  const profile_image = "https://avatars.githubusercontent.com/u/103850217?v=4";
  async function getComments(blog_id) {
    onToggle();

    if (!used) {
      // console.log(used);
      try {
        let res = await axios.get(`http://localhost:8000/comment/${blog_id}/`);
        let data = await res.data;
        setCommnetData(data);
      } catch (err) {
        console.log(err.message);
      }
      setUsed(true);
    }
  }
  function addComment(blog_id) {
    let commnet_data = NewCommnet.current.value;
    if (commnet_data) {
      let payload = {
        // user_id,
        blog_id,
        comment: commnet_data,
      };
      console.log(payload);

      toast({
        title: "Commnet Added",

        status: "success",
        position: "top",
        duration: 3000,
        isClosable: true,
      });
    }
  }
  return (
    <Card pb={4}>
      <CardHeader>
        <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
          <Avatar name={name} src={profile_image} />

          <Box>
            <Heading size="sm">{name} </Heading>
            <Text mt={1} fontSize="xs">
              Posted On: {posted}
            </Text>
          </Box>
        </Flex>
      </CardHeader>
      <CardBody>
        <AspectRatio maxW="400px" ratio={4 / 3}>
          <Image src={post_image} alt={name} objectFit="cover" />
        </AspectRatio>
        <Text fontSize="sm" fontFamily={"sans-serif"} mt="40px">
          {blog}
        </Text>
      </CardBody>
      <CardFooter>
        {/* <Button
          size={"sm"}
          fontSize="sm"
          leftIcon={<BiLike />}
          colorScheme="pink"
        >
          Like {count}
        </Button> */}
        <Box>
          <Button
            ml={"20px"}
            onClick={() => getComments(data._id)}
            size={"sm"}
            fontSize="sm"
            leftIcon={<BiChat />}
            colorScheme="green"
          >
            Comments {commnetData.length}
          </Button>
          <Collapse in={isOpen} animateOpacity border="1px solid white">
            <Box ml={4} mt="4">
              <Flex align={"center"}>
                <Input ref={NewCommnet} placeholder="Leave a comment" />
                <Button
                  onClick={() => addComment(data._id)}
                  // p={4}
                  ml="10px"
                  colorScheme={"green"}
                  size="sm"
                  fontSize={"sm"}
                >
                  Leave
                </Button>
              </Flex>
            </Box>
            <Box mt="4" rounded="md" shadow="md">
              {commnetData.map((el, i) => {
                return <CommentCard data={el} key={i} />;
              })}
            </Box>
          </Collapse>
        </Box>
      </CardFooter>
    </Card>
  );
};

export default SigleBlog;
