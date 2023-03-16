import {
  Button,
  Flex,
  Box,
  Heading,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  Text,
  Avatar,
  IconButton,
  HStack,
  Spacer,
  Center,
  AspectRatio,
  Stack,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { BiLike, BiChat, BiShare } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import React from "react";

const SigleBlog = () => {
  const count = 2;
  const commnet = 2;
  const user = "praful jadhao";
  const posted = "2022-04-03";
  const post_image =
    "https://images.unsplash.com/photo-1594315590298-329f49c8dcb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGhlJTIwc3VufGVufDB8fDB8fA%3D%3D&w=1000&q=80";
  const profile_image = "https://avatars.githubusercontent.com/u/103850217?v=4";

  const desc = "";
  return (
    
      <Card>
        <CardHeader>
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Avatar name={user} src={profile_image} />

            <Box>
              <Heading size="sm">{user} </Heading>
              <Text fontSize="xs">Posted On: {posted}</Text>
            </Box>
          </Flex>
        </CardHeader>
        <CardBody>
          <AspectRatio maxW="400px" ratio={4 / 3}>
            <Image src={post_image} alt={user} objectFit="cover" />
          </AspectRatio>
          <Text fontSize="sm" fontFamily={"sans-serif"} mt="20px">
            View a summary of all your customers over the last Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Neque saepe dignissimos,
            quisquam exercitationem quos dolore repellendus corporis labore
            perferendis aut laboriosam molestiae quaerat nulla, tempore tempora
            deleniti ipsum! Velit distinctio quas quod architecto eos pariatur.
            Aut mollitia vel ut dignissimos qui eligendi cum, deserunt sapiente
            distinctio quibusdam, dolor molestias earum voluptates repellendus,
            nihil eaque quam harum atque esse aliquid. Unde natus perspiciatis
            esse a illum iste quasi eum. Tempore eius distinctio velit
            provident, obcaecati mollitia animi magni nam, commodi facilis at
            fugiat quibusdam, libero ullam necessitatibus quisquam eos et
            excepturi debitis a omnis. Autem qui cupiditate eaque ipsa,
            consectetur aspernatur?
          </Text>
        </CardBody>
        <CardFooter>
          <HStack>
            <Button
              size={"sm"}
              fontSize="sm"
              leftIcon={<BiLike />}
              colorScheme="pink"
            >
              Like {count}
            </Button>
            <Button
              size={"sm"}
              fontSize="sm"
              leftIcon={<BiChat />}
              colorScheme="green"
            >
              Comment {commnet}
            </Button>
          </HStack>
        </CardFooter>
      </Card>
    
  );
};

export default SigleBlog;
