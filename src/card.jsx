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
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { BiLike, BiChat, BiShare } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import React from "react";

const SigleBlog = ({ data }) => {
  const { blog, user_id } = data;
  const { name } = user_id;
  // console.log(data);
  const count = 2;
  const commnet = 2;
  const posted = "2022-04-03";
  const post_image =
    "https://images.unsplash.com/photo-1594315590298-329f49c8dcb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGhlJTIwc3VufGVufDB8fDB8fA%3D%3D&w=1000&q=80";
  const profile_image = "https://avatars.githubusercontent.com/u/103850217?v=4";

  return (
    <Card>
      <CardHeader>
        <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
          <Avatar name={name} src={profile_image} />

          <Box>
            <Heading size="sm">{name} </Heading>
            <Text fontSize="xs">Posted On: {posted}</Text>
          </Box>
        </Flex>
      </CardHeader>
      <CardBody>
        <AspectRatio maxW="400px" ratio={4 / 3}>
          <Image src={post_image} alt={name} objectFit="cover" />
        </AspectRatio>
        <Text fontSize="sm" fontFamily={"sans-serif"} mt="20px">
          {blog}
        </Text>
      </CardBody>
      <CardFooter>
        {/* <Button
          size={"sm"}
          fontSize="sm"
          leftIcon={<BiLike />}
          colorScheme="pink"
        >
          Like {count}
        </Button> */}

        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Button
                  size={"sm"}
                  fontSize="sm"
                  leftIcon={<BiChat />}
                  colorScheme="green"
                >
                  Comments {commnet}
                </Button>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </CardFooter>
    </Card>
  );
};

export default SigleBlog;
