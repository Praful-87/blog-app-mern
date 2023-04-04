import {
  Flex,
  Box,
  Heading,
  Card,
  CardBody,
  CardHeader,
  Image,
  Text,
  Avatar,
  AspectRatio,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  ButtonGroup,
  Button,
  Spacer,
  useDisclosure,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteData } from "../Redux/App/action";
import { Link } from "react-router-dom";
import CommentCard from "./comment";

const SigleBlog = ({ data }) => {
  const dispatch = useDispatch();
  const authenticaton =
    JSON.parse(localStorage.getItem("authenticaton")) || undefined;
  const userId = authenticaton?.user._id;
  let { isOpen, onOpen, onClose } = useDisclosure();
  const [loading, setLoading] = useState(false);
  const { blog, _id, user_id, image, posted, title } = data;
  const { name } = user_id;
  const cancelRef = useRef();
  async function handelDelete(id) {
    try {
      setLoading(true);
      await dispatch(deleteData(id));
      onClose();
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }

  return (
    <>
      <Card pb={4} pos="relative">
        <CardHeader>
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Avatar name={name} src={user_id.photo} />

            <Box>
              <Heading size="sm">{name} </Heading>
              <Text mt={1} fontSize="xs">
                Posted On: {posted}
              </Text>
            </Box>
            <Spacer />
            {user_id._id === userId && (
              <ButtonGroup>
                <Link to={`/edit/${_id}`}>
                  <Button leftIcon={<EditIcon />} colorScheme={"blue"}>
                    Edit
                  </Button>
                </Link>
                <Button
                  isLoading={loading}
                  leftIcon={<DeleteIcon />}
                  colorScheme={"red"}
                  onClick={onOpen}
                >
                  Delete
                </Button>
                <AlertDialog
                  isOpen={isOpen}
                  leastDestructiveRef={cancelRef}
                  onClose={onClose}
                >
                  <AlertDialogOverlay>
                    <AlertDialogContent>
                      <AlertDialogHeader fontSize="lg" fontWeight="bold">
                        Delete
                      </AlertDialogHeader>

                      <AlertDialogBody>
                        Are you sure? You want to delete.
                      </AlertDialogBody>

                      <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={onClose}>
                          Cancel
                        </Button>
                        <Button
                          colorScheme="red"
                          onClick={() => handelDelete(_id)}
                          ml={3}
                        >
                          Delete
                        </Button>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialogOverlay>
                </AlertDialog>
              </ButtonGroup>
            )}
          </Flex>
        </CardHeader>

        <CardBody>
          {/* <Heading size={"md"} mb="20px" textTransform={"capitalize"}>
            {" "}
            {title}{" "}
          </Heading>
          <Stack
            gap="30px"
            direction={["column", "column", "row", "row", "row"]}
          >
            <Image
              flex={1}
              // width={"50%"}
              maxWidth={["100%", "100%", "50%", "50%", "50%"]}
              src={image}
              alt={name}
              objectFit="cover"
            />

            <Text
              mb="40px"
              lineHeight={6}
              flex={1}
              fontSize="md"
              fontFamily={"sans-serif"}
              mt="40px"
            >
              {blog}
            </Text>
          </Stack>

          <Box>
            <CommentCard blog_id={_id} />
          </Box> */}
          <Box
            // marginTop={{ base: "1", sm: "5" }}
            // border={"1px solid white"}
            display="flex"
            alignItems={[null, null, null, "center", "center"]}
            gap={"20px"}
            // flexDirection={{ base: "column", sm: "row" }}
            flexDirection={["column", "column", "row", "row", "row"]}
            justifyContent="space-between"
          >
            <Box
              // border={"1px solid white"}
              borderRadius={"lg"}
              overflow={"hidden"}
              // display="flex"
              flex="1"
              // marginRight="3"
              // position="relative"
              // alignItems="center"
            >
              <Image
                // flex={1}
                // width={"50%"}
                width="100%"
                src={image}
                alt={name}
                objectFit="cover"
              />
            </Box>
            <Box
              display="flex"
              flex="1"
              flexDirection="column"
              justifyContent="center"
              // marginTop={{ base: "3", sm: "0" }}
            >
              <Heading marginTop={["20px", "10px"]}>{title}</Heading>
              <Text
                as="p"
                marginTop="2"
                color={useColorModeValue("gray.700", "gray.200")}
                fontSize="lg"
              >
                {blog}
              </Text>
            </Box>
          </Box>
          <CommentCard blog_id={_id} />
        </CardBody>
      </Card>
    </>
  );
};

export default SigleBlog;
