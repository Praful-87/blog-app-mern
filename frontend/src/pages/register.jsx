import {
  Container,
  Button,
  FormControl,
  Input,
  FormLabel,
  Box,
  InputGroup,
  InputLeftElement,
  Center,
  Text,
  InputRightElement,
  IconButton,
  Flex,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { AiOutlineMail } from "react-icons/ai";
import { BsShieldLockFill } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../Redux/Auth/action";
export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const toast = useToast();
  const Name = useRef(null);
  const Email = useRef(null);
  const Password = useRef(null);
  const [img, setImg] = useState("");
  // console.log(img);
  const [isLoading, setLoading] = useState(false);
  async function handelSubmit() {
    let name = Name.current.value;
    let email = Email.current.value;
    let password = Password.current.value;
    if (name && email && password && img) {
      setLoading(true);
      // setLoading(false);
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("profile_photo", img);
      let payload = {
        name,
        email,
        password,
        // profile_photo
      };
      let result = await dispatch(register(formData));
      // console.log(result);
      let { res, msg } = result;
      if (res) {
        setLoading(false);
        toast({
          title: "Registration Successfull",
          description: "We have created account for you",
          position: "top",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        navigate("/login");
      } else {
        setLoading(false);
        toast({
          title: "Error",
          description: msg,
          position: "top",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    } else {
      toast({
        title: "Empty Filed is not allowed",
        position: "top",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      setLoading(false);
    }
  }
  return (
    <Box
      display="flex"
      justify="center"
      alignItems="center"
      // h="100vh"
      w="100vw"
      // bgGradient="linear(to-r,#b70ef0,#15a9e8)"
    >
      <Container
        border={"1px solid gray"}
        mt="20px"
        shadow="md"
        p={6}
        rounded="md"
        h="fit-content"
        maxW={"md"}
      >
        <Text
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="xl"
          fontWeight="extrabold"
          mb="20px"
        >
          Create an account
        </Text>
        <Flex direction="column" gap="25px">
          <FormControl isRequired>
            <FormLabel fontSize="sm">Username</FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<BiUserCircle />}
              />
              <Input
                ref={Name}
                border="none"
                borderBottom="1px solid gray"
                rounded="none"
                fontSize="sm"
                type="text"
                placeholder="Type Your Name"
              />
            </InputGroup>
          </FormControl>
          <FormControl isRequired>
            <FormLabel fontSize="sm">Email</FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<AiOutlineMail />}
              />
              <Input
                ref={Email}
                border="none"
                borderBottom="1px solid gray"
                rounded="none"
                fontSize="sm"
                type="email"
                placeholder="Type Your Email"
              />
            </InputGroup>
          </FormControl>
          <FormControl isRequired>
            <FormLabel fontSize="sm">Password</FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<BsShieldLockFill />}
              />
              <Input
                ref={Password}
                border="none"
                borderBottom="1px solid gray"
                rounded="none"
                fontSize="sm"
                type={show ? "text" : "password"}
                placeholder="Type Your Password"
                _focus={{ outline: "none" }}
              />
              <>
                {!show ? (
                  <InputRightElement>
                    <IconButton
                      colorScheme="gray"
                      onClick={() => setShow(!show)}
                      icon={<ViewIcon />}
                    />
                  </InputRightElement>
                ) : (
                  <InputRightElement>
                    <IconButton
                      colorScheme="gray"
                      onClick={() => setShow(!show)}
                      icon={<ViewOffIcon />}
                    />
                  </InputRightElement>
                )}
              </>
            </InputGroup>
          </FormControl>
          <Center>
            <FormControl>
              <FormLabel bg={"blue.300"} rounded="md" p={2} width="fit-content">
                Upload a profile pricture
                <Input
                  onChange={(e) => setImg(e.target.files[0])}
                  display={"none"}
                  type="file"
                />
              </FormLabel>
            </FormControl>
          </Center>
          <Center>
            <Button
              isLoading={isLoading}
              onClick={() => handelSubmit()}
              rounded="md"
              // size="sm"
              fontSize="sm"
              textTransform="capitalize"
              // w="50%"
              w="full"
              textAlign="center"
              colorScheme="twitter"
              // bgGradient="linear(to-l, #7928CA, #FF0080)"
            >
              Create Account
            </Button>
          </Center>

          <VStack>
            <Text
              // bgGradient="linear(to-l, #7928CA, #FF0080)"
              // bgClip="text"
              fontSize="sm"
              fontWeight="extrabold"
            >
              Allready have an account?
            </Text>
            <Text fontSize="xl">&#128071;</Text>
          </VStack>
          <Link to="/login">
            <Center>
              <Button
                rounded="md"
                // size="sm"
                fontSize="sm"
                textTransform="capitalize"
                // w="50%"
                w="full"
                textAlign="center"
                colorScheme="whatsapp"
              >
                Login
              </Button>{" "}
            </Center>
          </Link>
        </Flex>
      </Container>
    </Box>
  );
}
