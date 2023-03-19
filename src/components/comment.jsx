import React from "react";
import { Box, Text, Flex, Spacer, Avatar } from "@chakra-ui/react";
const CommentCard = ({ data }) => {
  // console.log(data);
  const { comment, user_id } = data;
  const { name } = user_id;
  return (
    <Box
      px={"30px"}
      w="350px"
      py={"10px"}
      rounded="md"
      shadow="md"
      // border="1px solid gray"
      my="20px"
    >
      <Flex align={"center"}>
        <Avatar
          size="sm"
          name="Kent Dodds"
          // src="https://bit.ly/kent-c-dodds"
          src={null}
        />
        <Text ml={"5px"} fontSize={"sm"}>
          {name}
        </Text>
        <Spacer />
        <Text fontSize={"xs"}>3 days ago</Text>
      </Flex>
      <Text ml={6} mt="2" fontSize={"xs"}>
        {comment}
      </Text>
    </Box>
  );
};

export default CommentCard;
