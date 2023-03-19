import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  Input,
  FormLabel,
  useDisclosure,
  useToast,
  InputGroup,
  InputRightElement,
  IconButton,
  Tooltip,
} from "@chakra-ui/react";
import { ViewOffIcon, ViewIcon } from "@chakra-ui/icons";
import axios from "axios";
import { useRef, useState } from "react";
import { login } from "../Redux/Auth/action";
import { useDispatch } from "react-redux";
export default function Login() {
  const dispatch = useDispatch();
  const [show, setShow] = useState(true);
  const handleClick = () => setShow(!show);
  // register
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoading, setLoading] = useState(false);
  const initialRef = useRef(null);
  const finalRef = useRef(null);

  const Email = useRef(null);
  const Password = useRef(null);
  async function hadelSubmit() {
    setLoading(true);

    let email = Email.current.value;
    let password = Password.current.value;
    if (email && password) {
      let payload = {
        email,
        password,
      };
      // console.log(payload);
      let { res, msg } = await dispatch(login(payload));
      // console.log(msg);
      if (res) {
        toast({
          title: "Successs",
          status: "success",
          description: msg,
          position: "top",
          duration: 3000,
          isClosable: true,
        });
        setLoading(false);
      } else {
        toast({
          title: "Failed",
          status: "error",
          description: msg,
          position: "top",
          duration: 3000,
          isClosable: true,
        });
        setLoading(false);
      }
    } else {
      toast({
        title: "Empty Data",
        status: "warning",
        description: "Please Fill The Details",
        position: "top",
        duration: 3000,
        isClosable: true,
      });
      setLoading(false);
    }
  }
  return (
    <>
      <Button size="sm" onClick={onOpen} colorScheme="blue" variant="outline">
        Login
      </Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Login to your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl mt={4}>
              <FormLabel>Email</FormLabel>
              <Input type='email' ref={Email} placeholder="Enter Email" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  ref={Password}
                  pr="4.5rem"
                  type={!show ? "text" : "password"}
                  placeholder="Enter password"
                />
                <InputRightElement>
                  <>
                    <Tooltip
                      label={!show ? "Hide Password" : "See Password"}
                      fontSize="md"
                    >
                      {!show ? (
                        <IconButton
                          onClick={handleClick}
                          colorScheme="blue"
                          aria-label="Search database"
                          icon={<ViewOffIcon />}
                        />
                      ) : (
                        <IconButton
                          onClick={handleClick}
                          colorScheme="blue"
                          aria-label="Search database"
                          icon={<ViewIcon />}
                        />
                      )}
                    </Tooltip>
                  </>
                </InputRightElement>
              </InputGroup>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              onClick={hadelSubmit}
              colorScheme="blue"
              mr={3}
              isLoading={isLoading}
              loadingText="Submitting"
              variant="outline"
            >
              Login
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
