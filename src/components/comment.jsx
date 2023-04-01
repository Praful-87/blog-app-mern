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
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon, ChatIcon } from "@chakra-ui/icons";
import { getComments } from "../Redux/App/action";
import axios from "axios";
const CommentCard = ({ blog_id }) => {
  // console.log(blog_id)
  const toast = useToast();
  const url = "http://localhost:8000";
  const [comments, setComments] = useState([]);
  console.log(comments);
  const [used, setUsed] = useState(false);
  const [loading, setLoading] = useState(false);
  const { isOpen, onToggle } = useDisclosure();
  const newComment = useRef(null);
  const authenticaton =
    JSON.parse(localStorage.getItem("authenticaton")) || undefined;
  const userId = authenticaton?.user._id;
  // getComments
  // axios
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
      setLoading(true);
      let payload = {
        blog_id,
        user_id: userId,
        comment: newComment.current.value,
      };
      try {
        await axios.post(`${url}/comment`, payload);

        let result = await getComments(blog_id);
        setComments(result);
        newComment.current.value;
        toast({
          title: "We got your comment",
          status: "success",
          position: "top",
        });
        setLoading(false);
      } catch (error) {
        console.log(error.message);
        toast({
          title: "Something went wrong",
          status: "error",
          position: "top",
        });
        setLoading(false);
      }
    } else {
      toast({
        title: "Commnt can't be empty",
        status: "warning",
        position: "top",
      });
    }
  }
  return (
    <Box mt="20px">
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
          pl="40px"
          mt="4"
          // bg="teal.500"
          rounded="md"
          shadow="md"
        >
          <HStack>
            <Input ref={newComment} maxWidth={"250px"} />
            <Button
              isLoading={loading}
              onClick={leaveComment}
              colorScheme="green"
            >
              Leave Comment
            </Button>
          </HStack>
          {comments.length === 0 && (
            <Text fontSize={"sm"} m={4}>
              become a first commenter
            </Text>
          )}
          {comments.length > 0 &&
            comments.map((el) => {
              return (
                <Box key={el._id}>
                  <Flex align={"center"} mt="20px" maxWidth={"400px"}>
                    <Avatar
                      size="sm"
                      name="Kent Dodds"
                      src={el.user_id.photo}
                    />
                    <Text fontSize="sm" ml={"5px"}>
                      {el.user_id.name}
                    </Text>
                    <Spacer />
                    <Text fontSize={"xs"}>{el.posted}</Text>
                  </Flex>
                  <Text fontSize={"sm"} ml={7} mt="2">
                    Nice Job
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
