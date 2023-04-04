import React, { useState, useRef } from "react";
import {
  Box,
  Text,
  Flex,
  Spacer,
  Avatar,
  useDisclosure,
  Button,
  Collapse,
  HStack,
  Input,
  useToast,
  IconButton,
} from "@chakra-ui/react";
import { ChatIcon } from "@chakra-ui/icons";
import { AiOutlineSend } from "react-icons/ai";
import { getComments } from "../Redux/App/action";
import axios from "axios";
import { url } from "../url";
const CommentCard = ({ blog_id }) => {
  // console.log(blog_id)
  const toast = useToast();

  const [comments, setComments] = useState([]);
  // console.log(comments);
  const [used, setUsed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [commentLoader, setCommentLoader] = useState(false);
  const { isOpen, onToggle } = useDisclosure();
  const newComment = useRef(null);
  const authenticaton =
    JSON.parse(localStorage.getItem("authenticaton")) || undefined;
  const userId = authenticaton?.user._id;

  async function getCommentsByid() {
    if (!used) {
      setLoading(true);
      try {
        let result = await getComments(blog_id);
        setComments(result);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
        setLoading(false);
      }
      setUsed(true);
    }
    // console.log(used);
    onToggle();
  }
  async function leaveComment() {
    if (newComment.current.value) {
      setCommentLoader(true);
      let payload = {
        blog_id,
        user_id: userId,
        comment: newComment.current.value,
      };
      try {
        await axios.post(`${url}/comment`, payload);

        let result = await getComments(blog_id);
        setComments(result);
        newComment.current.value = "";
        toast({
          title: "We got your comment",
          status: "success",
          position: "top",
        });
        setCommentLoader(false);
      } catch (error) {
        console.log(error.message);
        toast({
          title: "Something went wrong",
          status: "error",
          position: "top",
        });
        setCommentLoader(false);
      }
    } else {
      toast({
        title: "Type something Good!",
        status: "warning",
        position: "top",
      });
    }
  }
  return (
    <Box
      mt="20px"
      // border={"1px solid black"}
    >
      <Button
        isLoading={loading}
        onClick={getCommentsByid}
        leftIcon={<ChatIcon />}
        colorScheme="green"
      >
        Comments
      </Button>
      <Collapse in={isOpen} animateOpacity>
        <Box
          // ml={["0px", "0px", "10px", "20px", "40px"]}
          mt="4"
          // bg="teal.500"
          // rounded="md"
          // shadow="md"
          // border={"1px solid white"}
        >
          {authenticaton && (
            <HStack mb="40px">
              <Input
                ref={newComment}
                width={["100%", "100%", "100%", "50%", "50%"]}
              />
              <IconButton
                // size={["sm", "sm", "md", "md", "md"]}
                isLoading={commentLoader}
                onClick={leaveComment}
                colorScheme="green"
                icon={<AiOutlineSend />}
              >
                Leave Comment
              </IconButton>
            </HStack>
          )}
          {comments.length === 0 && (
            <Text fontWeight={"bold"} fontSize={"sm"}>
              become a first commenter
            </Text>
          )}
          {comments.length > 0 &&
            comments.map((el) => {
              return (
                <Box
                  border={"1px solid"}
                  borderColor={"blackAlpha.200"}
                  key={el._id}
                  // boxShadow={"md"}
                  // maxWidth={"400px"}
                  // px="30px"
                  // py="10px"
                  my="15px"
                  px="20px"
                  py="10px"
                  rounded={"md"}
                  width={["100%", "100%", "100%", "50%", "50%"]}
                >
                  <Flex align={"center"}>
                    <Avatar
                      size="sm"
                      name={el.user_id.name}
                      src={el.user_id.photo}
                    />
                    <Text fontSize="sm" ml="10px">
                      {el.user_id.name}
                    </Text>
                    <Spacer />
                    <Text fontSize={"xs"}>{el.posted}</Text>
                  </Flex>
                  <Text fontSize={"sm"} ml="30px" mt="14px">
                    {el.comment}
                  </Text>
                </Box>
              );
            })}
        </Box>
      </Collapse>
    </Box>
  );
};

export default CommentCard;
