import {
  Button,
  Container,
  Flex,
  Heading,
  Input,
  Textarea,
  Image,
  VStack,
  FormLabel,
  FormControl,
  useToast,
  Center,
} from "@chakra-ui/react";

import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { updateData } from "../Redux/App/action";
import { url } from "../url";

const EditBlog = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const dispatch = useDispatch();
  const { blogId } = useParams();
  const [data, setData] = useState([]);
  const [newImage, setNewImage] = useState("");
  const [loading, setLoading] = useState(false);
  const title = useRef(null);
  const blog = useRef(null);
  async function getByid() {
    try {
      let res = await axios.get(`${url}/blog/${blogId}`);
      let result = await res;
      setData(result.data);
    } catch (error) {
      console.log(error.message);
    }
  }
  function imageUploadController() {
    if (newImage) {
      const formData = new FormData();
      formData.append("blog", blog.current.value);
      formData.append("image_blog", newImage);
      formData.append("title", title.current.value);

      return formData;
    } else {
      let payload = {
        blog: blog.current.value,
        title: title.current.value,
      };
      return payload;
    }
  }
  async function handelUpdate() {
    setLoading(true);
    try {
      let payload = imageUploadController();
      await dispatch(updateData(payload, blogId));

      toast({
        title: "Updated",
        status: "success",
        position: "top",
      });
      setLoading(false);
      navigate("/");
    } catch (error) {
      toast({
        title: "Failed to Update",
        status: "error",
        position: "top",
      });
      console.log(error.message);
      setLoading(false);
    }
  }
  useEffect(() => {
    getByid();
  }, []);
  return (
    <Container rounded={'md'} py="20px" px="20px" shadow={"md"} my="20px">
      {Object.keys(data).length > 0 && (
        <Flex direction={"column"} gap="20px">
          <Heading size={"md"}>Edit Blog</Heading>

          <Image
            maxWidth={"400px"}
            rounded={"md"}
            src={data.image}
            alt="name"
          />

          <FormLabel
            width={"fit-content"}
            bg="teal.400"
            rounded={"5px"}
            p={2}
            cursor="pointer"
          >
            Change Image
            <Input
              onChange={(e) => setNewImage(e.target.files[0])}
              display={"none"}
              type={"file"}
            />
          </FormLabel>
          <FormControl>
            <FormLabel fontSize={"sm"} mb="10px" fontWeight={"bold"}>
              Change Title
            </FormLabel>
            <Input fontSize={"sm"} ref={title} defaultValue={data.title} />
          </FormControl>
          <FormControl>
            <FormLabel fontSize={"sm"} fontWeight={"bold"} mb="10px">
              Change Description
            </FormLabel>
            <Textarea fontSize={"sm"} ref={blog} defaultValue={data.blog} />
          </FormControl>

          <Button
            isLoading={loading}
            onClick={handelUpdate}
            colorScheme={"blue"}
          >
            Save
          </Button>
        </Flex>
      )}
    </Container>
  );
};

export default EditBlog;
