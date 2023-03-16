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
} from "@chakra-ui/react";
import { ArrowBackIcon, EditIcon } from "@chakra-ui/icons";
import { Link, useLocation } from "react-router-dom";
import { useRef } from "react";
export default function Account() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);
  const finalRef = useRef(null);

  const location = useLocation();
  console.log(location);
  return (
    <Flex
      width="90%"
      margin="auto"
      gap="30px"
      direction={{ base: "column", lg: "row" }}
    >
      <Stack width={{ md: "100%", lg: "50%" }}>
        <HStack>
          <Heading size={"md"}>Profile setting</Heading>
        </HStack>
      </Stack>
      <Spacer />
      <Stack width={{ md: "100%", lg: "50%" }}>
        <Heading size="md">Profile Photo</Heading>
        <Center>
          <Avatar
            size="2xl"
            name="Segun Adebayo"
            src="https://avatars.githubusercontent.com/u/103850217?v=4"
            alt="User name"
          >
            <AvatarBadge boxSize="1em">
              <IconButton
                onClick={onOpen}
                rounded="full"
                colorScheme="blue"
                aria-label="Search database"
                icon={<EditIcon />}
              />
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
            <Input value="Praful Jadhao" />
          </FormControl>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input value="praful@gmail.com" />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input value="Praful@123" />
          </FormControl>
          <Button
            w={"min-content"}
            fontSize={"xs"}
            size={"sm"}
            colorScheme="messenger"
          >
            Save
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
}
