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
  Spacer,
  Textarea,
  VStack,
  Text,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addData, getData } from "../Redux/App/action";
import { useNavigate } from "react-router-dom";

const Newblog = () => {
  const dispatch = useDispatch();
  const authenticaton = JSON.parse(localStorage.getItem("authenticaton")) || {};
  const { user } = Object.keys(authenticaton).length > 0 ? authenticaton : null;
  const { _id } = Object.keys(user).length > 0 ? user : null;
  // console.log(_id);
  const navigate = useNavigate();
  const toast = useToast();
  const Blog = useRef(null);
  const Title = useRef(null);
  const [img, setImg] = useState("");
  const [loading, setLoading] = useState(false);
  // console.log(img);
  async function handelPost() {
    let blog = Blog.current.value;
    let title = Title.current.value;

    if (blog && title && img) {
      setLoading(true);
      // setLoading(false);
      const formData = new FormData();
      formData.append("blog", blog);
      formData.append("user_id", _id);
      formData.append("image_blog", img);
      formData.append("title", title);

      try {
        // getData
        await dispatch(addData(formData));

        // let res = await axios.post(
        //   "http://localhost:8000/blog/create",
        //   formData,
        //   {
        //     headers: {
        //       "Content-Type": "multipart/form-data",
        //     },
        //   }
        // );

        setLoading(false);
        toast({
          title: "Posted",
          description: "Posted successfully",
          status: "success",
          position: "top",
          duration: 3000,
          isClosable: true,
        });
        // console.log(res);
        navigate("/");
      } catch (error) {
        console.log(error.message);
        setLoading(false);
        toast({
          title: "Failed",
          description: "Failed to post",
          status: "error",
          position: "top",
          duration: 3000,
          isClosable: true,
        });
      }
    } else {
      toast({
        title: "Unsufficient Deails",
        description: "All the fields are mandatory",
        status: "warning",
        position: "top",
        duration: 3000,
        isClosable: true,
      });
    }
  }
  // const
  return (
    <div>
      <Container mt="10">
        <Flex direction={"column"} gap="20px" shadow={"md"} rounded="md" p={3}>
          <HStack>
            <Icon as={AddIcon} boxSize={4} />{" "}
            <Heading size="md">Create a new Blog blog user_id</Heading>
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
            // width={"fit-content"}
            onClick={handelPost}
            colorScheme={"twitter"}
          >
            Post
          </Button>
        </Flex>
      </Container>
    </div>
  );
};

export default Newblog;
