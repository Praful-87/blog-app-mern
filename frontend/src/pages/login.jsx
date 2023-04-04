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
import { useRef, useState } from "react";
import { login } from "../Redux/Auth/action";
import { useDispatch } from "react-redux";
export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const toast = useToast();
  const Email = useRef(null);
  const Password = useRef(null);
  const [isLoading, setLoading] = useState(false);
  async function handelSubmit() {
    let email = Email.current.value;
    let password = Password.current.value;

    if (email && password) {
      setLoading(true);
      let payload = {
        email,
        password,
      };
      let { res, msg } = await dispatch(login(payload));
      if (res) {
        setLoading(false);
        toast({
          title: "Login Successfull",
          description: msg,
          position: "top",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        navigate("/");
      } else {
        setLoading(false);
        toast({
          title: "Login Failed",
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
        shadow="md"
        p={6}
        rounded="md"
        h="fit-content"
        maxW={"md"}
        mt="50px"
      >
        <Text
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="xl"
          fontWeight="extrabold"
          mb="20px"
        >
          Login your account
        </Text>
        <Flex direction="column" gap="25px">
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
            <Button
              isLoading={isLoading}
              onClick={() => handelSubmit()}
              rounded="full"
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

          <VStack>
            <Text
              // bgGradient="linear(to-l, #7928CA, #FF0080)"
              // bgClip="text"
              fontSize="sm"
              fontWeight="extrabold"
            >
              Don't have account?
            </Text>
            <Text fontSize="xl">&#128071;</Text>
          </VStack>

          <Link to="/signup">
            <Center>
              <Button
                rounded="full"
                // size="sm"
                fontSize="sm"
                textTransform="capitalize"
                // w="50%"
                w="full"
                textAlign="center"
                colorScheme="twitter"
                // bgGradient="linear(to-l, #7928CA, #FF0080)"
              >
                Register
              </Button>
            </Center>
          </Link>
        </Flex>
      </Container>
    </Box>
  );
}
