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
  const { blog, _id, user_id, image, posted, title } = data;
  const { name } = user_id;
  const cancelRef = useRef();
  function handelDelete(id) {
    dispatch(deleteData(id));
    onClose();
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
          <Heading size={"md"} mb="20px" textTransform={"capitalize"}>
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
              maxWidth={["100%","100%",'50%','50%','50%']}
              src={image}
              alt={name}
              objectFit="cover"
            />

            <Text mb='40px' lineHeight={6} flex={1} fontSize="md" fontFamily={"sans-serif"} mt="40px">
              {blog}
            </Text>
          </Stack>

          <Box>
            <CommentCard blog_id={_id} />
          </Box>
        </CardBody>
      </Card>
    </>
  );
};

export default SigleBlog;
