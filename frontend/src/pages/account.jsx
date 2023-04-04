import {
  Heading,
  HStack,
  Stack,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Spacer,
  Image,
  Center,
  Avatar,
  Box,
  Button,
  Tooltip,
  useToast,
} from "@chakra-ui/react";
import { SettingsIcon } from "@chakra-ui/icons";

import { useRef, useState } from "react";
import { useDispatch } from "react-redux";

import { updateProfile } from "../Redux/Auth/action";

export default function Account() {
  const authenticaton =
    JSON.parse(localStorage.getItem("authenticaton")) || undefined;
  const [newImage, setNewImage] = useState("");
  const toast = useToast();
  const Username = useRef(null);
  const Password = useRef(null);
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const user = authenticaton?.user;
  const dispatch = useDispatch();
  // console.log(newImage);

  function handelFocusMode() {
    setEditMode(true);
    Username.current.focus();
  }
  function imageUploadController() {
    if (newImage) {
      const formData = new FormData();
      formData.append("name", Username.current.value);
      formData.append("profile_photo", newImage);

      return formData;
    } else {
      let payload = {
        name: Username.current.value,
      };
      return payload;
    }
  }

  async function handelUpdate() {
    let name = Username.current.value;

    if (name) {
      setLoading(true);
      try {
        let payload = imageUploadController();
        let res = await dispatch(updateProfile(payload, user._id));
        let data = await res;
        // console.log(data);
        toast({
          title: "Updated",
          status: "success",
          position: "top",
        });

        setLoading(false);
        setNewImage("");
        authenticaton.user = data;
        localStorage.setItem("authenticaton", JSON.stringify(authenticaton));
      } catch (error) {
        toast({
          title: "Failed to Update",
          status: "error",
          position: "top",
        });
        // console.log(error.message);
        setLoading(false);
      }
    } else {
      toast({
        title: "Empty Field",
        description: "Username cannot be empty",
        status: "warning",
        position: "top",
      });
      console.log(error.message);
      setLoading(false);
    }
  }
  return (
    <Box>
      {/* <Heading>Hwllo</Heading> */}
      {true && (
        <Flex
          width="90%"
          margin="auto"
          mt={8}
          gap="30px"
          direction={["column", "column", "row", "row", "row"]}
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
              src={
                "https://www.blogger.com/about/img/social/facebook-1200x630.jpg"
              }
              alt="Avatar"
            />
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
                src={user.photo}
                alt="User name"
              />
            </Center>

            <Stack spacing="30px">
              <FormControl>
                <FormLabel>User Name</FormLabel>
                <Input
                  isDisabled={!editMode}
                  variant="filled"
                  ref={Username}
                  defaultValue={user.name}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Tooltip
                  hasArrow
                  label="Email Connot be changed"
                  aria-label="A tooltip"
                >
                  <Input
                    isDisabled={true}
                    variant="filled"
                    defaultValue={user.email}
                  />
                </Tooltip>
              </FormControl>
              <FormControl>
                <FormLabel>Password</FormLabel>
                <Input
                  isDisabled={!editMode}
                  variant="filled"
                  ref={Password}
                  type="password"
                  defaultValue={user.name}
                />
              </FormControl>
              {editMode && (
                <FormLabel
                  p="2"
                  bg="green.400"
                  width={"fit-content"}
                  cursor="pointer"
                  rounded="5px"
                >
                  Change Profile photo
                  <Input
                    type="file"
                    display={"none"}
                    onChange={(e) => setNewImage(e.target.files[0])}
                  />
                </FormLabel>
              )}
              <>
                {editMode ? (
                  <Button
                    isLoading={loading}
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
      )}
    </Box>
  );
}
