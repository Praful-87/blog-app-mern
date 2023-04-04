import { AddIcon } from "@chakra-ui/icons";
import {
  Button,
  Center,
  Container,
  Flex,
  FormLabel,
  Heading,
  HStack,
  Icon,
  Input,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addData } from "../Redux/App/action";
import { useNavigate } from "react-router-dom";

const Newblog = () => {
  const dispatch = useDispatch();
  const authenticaton = JSON.parse(localStorage.getItem("authenticaton")) || {};
  const { user } = Object.keys(authenticaton).length > 0 ? authenticaton : null;
  const { _id } = Object.keys(user).length > 0 ? user : null;
  const navigate = useNavigate();
  const toast = useToast();
  const Blog = useRef(null);
  const Title = useRef(null);
  const [img, setImg] = useState("");
  const [loading, setLoading] = useState(false);
  async function handelPost() {
    let blog = Blog.current.value;
    let title = Title.current.value;

    if (blog && title && img) {
      setLoading(true);
      const formData = new FormData();
      formData.append("blog", blog);
      formData.append("user_id", _id);
      formData.append("image_blog", img);
      formData.append("title", title);

      try {
        await dispatch(addData(formData));
        setLoading(false);
        toast({
          title: "Posted",
          description: "Posted successfully",
          status: "success",
          position: "top",
          duration: 3000,
          isClosable: true,
        });
        navigate("/");
      } catch (error) {
        console.log(error.message);
        setLoading(false);
        toast({
          title: "Failed",
          description: "Server error or file type is not supported",
          status: "error",
          position: "top",
          duration: 3000,
          isClosable: true,
        });
      }
    } else {
      toast({
        title: "Unsufficient Details",
        description: "All the fields are mandatory",
        status: "warning",
        position: "top",
        duration: 3000,
        isClosable: true,
      });
    }
  }
  return (
    <Container py="10">
      <Flex direction={"column"} gap="20px" shadow={"md"} rounded="md" p={3}>
        <HStack>
          <Icon as={AddIcon} boxSize={4} />{" "}
          <Heading size="md">Create a new Blog blog</Heading>
        </HStack>
        <Input ref={Title} placeholder="Title" />
        <Textarea ref={Blog} placeholder="Write description" />
        <Center>
          <FormLabel
            cursor={"pointer"}
            bg={"blue.300"}
            w="fit-content"
            p={2}
            rounded="md"
          >
            Select image
            <Input
              onChange={(e) => setImg(e.target.files[0])}
              type={"file"}
              display="none"
            />
          </FormLabel>
        </Center>

        <Button
          isLoading={loading}
          onClick={handelPost}
          colorScheme={"twitter"}
        >
          Post
        </Button>
      </Flex>
    </Container>
  );
};

export default Newblog;
