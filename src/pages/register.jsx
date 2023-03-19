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
  Tooltip
} from "@chakra-ui/react";
import { ViewOffIcon, ViewIcon } from "@chakra-ui/icons";
import axios from "axios";
import { useRef, useState } from "react";
export default function Register() {
  const [show, setShow] = useState(true);
  const handleClick = () => setShow(!show);

  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoading, setLoading] = useState(false);
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const Username = useRef(null);
  const Email = useRef(null);
  const Password = useRef(null);
  async function hadelSubmit() {
    setLoading(true);
    let username = Username.current.value;
    let email = Email.current.value;
    let password = Password.current.value;
    if (username && email && password) {
      let payload = {
        username,
        email,
        password
      };
      // console.log(payload);
      try {
        let res = await axios.post(
          "http://localhost:8000/user/register",
          payload
        );
        toast({
          title: "Registered",
          status: "success",
          description: "Your account has been created successfully",
          position: "top",
          duration: 3000,
          isClosable: true
        });
        setLoading(false);
        console.log("res:", res);
      } catch (err) {
        toast({
          title: "Failed",
          status: "error",
          description: "Registration Failed",
          position: "top",
          duration: 3000,
          isClosable: true
        });
        setLoading(false);

        console.log("error:", err.message);
      }
    } else {
      toast({
        title: "Empty Data",
        status: "warning",
        description: "Please Fill The Details",
        position: "top",
        duration: 3000,
        isClosable: true
      });
      setLoading(false);
    }
  }
  return (
    <>
      <Button size="sm" onClick={onOpen} colorScheme="blue" variant="outline">
        Regiser
      </Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Username</FormLabel>
              <Input ref={Username} placeholder="Enter Name" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Email</FormLabel>
              <Input ref={Email} placeholder="Enter Email" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  ref={Password}
                  pr="4.5rem"
                  type={show ? "text" : "password"}
                  placeholder="Enter password"
                />
                <InputRightElement>
                  <>
                    <Tooltip
                      label={show ? "Hide Password" : "See Password"}
                      fontSize="md"
                    >
                      {show ? (
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
              Submit
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
