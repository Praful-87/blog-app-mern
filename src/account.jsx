import {
  Heading,
  HStack,
  Stack,
  VStack,
  IconButton,
  Container,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Input,
  Spacer,
  Image,
  Center,
  Avatar,
  AvatarBadge,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Tooltip,
  useToast,
} from "@chakra-ui/react";
import { ArrowBackIcon, EditIcon, SettingsIcon } from "@chakra-ui/icons";
import { Link, useLocation } from "react-router-dom";
import { useRef, useState } from "react";
export default function Account() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const initialRef = useRef(null);
  const Username = useRef(null);
  const Email = useRef(null);
  const Password = useRef(null);
  const finalRef = useRef(null);
  const [editMode, setEditMode] = useState(false);
  const location = useLocation();
  // console.log(location);
  const userData = {
    userName: "Praful Jadhao",
    email: "praful@gmail.com",
    password: "praful123",
  };
  function handelFocusMode() {
    setEditMode(true);
    Username.current.focus();
  }
  function handelUpdate() {
    let username = Username.current.value;
    let email = Email.current.value;
    let password = Password.current.value;
    if (username && email && password) {
      let payload = {
        username,
        email,
        password,
      };
      toast({
        title: "Updated",
        description: "Profile updated successfully",
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
      setEditMode(false);
      console.log(payload);
    }
  }
  return (
    <Flex
      width="90%"
      margin="auto"
      mt={8}
      gap="30px"
      direction={{ base: "column", lg: "row" }}
    >
      <Stack
        shadow={"md"}
        rounded="md"
        overflow={"hidden"}
        width={{ md: "100%", lg: "50%" }}
      >
        <Image
          objectFit={"fill"}
          h="100%"
          src="https://www.blogger.com/about/img/social/facebook-1200x630.jpg"
          alt="Avatar"
        />
        {/* <img
          src="https://www.blogger.com/about/img/social/facebook-1200x630.jpg"
          alt="Avatar"
          class="image"
        /> */}
      </Stack>
      <Spacer />
      <Stack width={{ md: "100%", lg: "50%" }}>
        <HStack alignItems={"center"}>
          {" "}
          <SettingsIcon /> <Heading size="md">Account settings</Heading>
        </HStack>
        <Heading size="md">Profile Photo</Heading>
        <Center>
          <Avatar
            size="2xl"
            name="Segun Adebayo"
            src="https://avatars.githubusercontent.com/u/103850217?v=4"
            alt="User name"
          >
            <AvatarBadge boxSize="1em">
              <Tooltip
                hasArrow
                label="Upload new Profile Picture"
                aria-label="A tooltip"
              >
                <IconButton
                  onClick={onOpen}
                  rounded="full"
                  colorScheme="blue"
                  aria-label="Search database"
                  icon={<EditIcon />}
                />
              </Tooltip>
            </AvatarBadge>
          </Avatar>

          {/* Upload new prffile pricter */}
          <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Upload New Profile Picture</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel>Select</FormLabel>
                  <Input type="file" />
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3}>
                  Upload
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Center>
        <Stack spacing="30px">
          <FormControl>
            <FormLabel>User Name</FormLabel>
            <Input isDisabled={!editMode} variant="filled" ref={Username} />
          </FormControl>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              isDisabled={true}
              variant="filled"
              ref={Email}
              value={userData.email}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              isDisabled={!editMode}
              variant="filled"
              ref={Password}
              value={userData.password}
            />
          </FormControl>

          <>
            {editMode ? (
              <Button
                onClick={handelUpdate}
                w={"min-content"}
                fontSize={"xs"}
                size={"sm"}
                colorScheme="messenger"
              >
                Save
              </Button>
            ) : (
              <Button
                onClick={handelFocusMode}
                w={"min-content"}
                fontSize={"xs"}
                size={"sm"}
                colorScheme="messenger"
              >
                Edit
              </Button>
            )}
          </>
        </Stack>
      </Stack>
    </Flex>
  );
}
