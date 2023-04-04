import React from "react";
import {
  useColorMode,
  IconButton,
  Box,
  HStack,
  Flex,
  Avatar,
  Spacer,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
  Button,
  Text,
  MenuGroup,
  Link,
  useColorModeValue,
  Heading,
} from "@chakra-ui/react";
const Blog = () => {
  return (
    <Box
      marginTop={{ base: "1", sm: "5" }}
      display="flex"
      flexDirection={{ base: "column", sm: "row" }}
      justifyContent="space-between"
    >
      <Box
        display="flex"
        flex="1"
        marginRight="3"
        position="relative"
        alignItems="center"
      >
        <Box
          width={{ base: "100%", sm: "85%" }}
          zIndex="2"
          marginLeft={{ base: "0", sm: "5%" }}
          marginTop="5%"
        >
          <Image
            borderRadius="lg"
            src={
              "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
            }
            alt="some good alt text"
            objectFit="contain"
          />
        </Box>
        <Box zIndex="1" width="100%" position="absolute" height="100%">
          <Box
            bgGradient={useColorModeValue(
              "radial(orange.600 1px, transparent 1px)",
              "radial(orange.300 1px, transparent 1px)"
            )}
            backgroundSize="20px 20px"
            opacity="0.4"
            height="100%"
          />
        </Box>
      </Box>
      <Box
        display="flex"
        flex="1"
        flexDirection="column"
        justifyContent="center"
        marginTop={{ base: "3", sm: "0" }}
      >
        <Heading marginTop="1">
          <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
            Blog article title
          </Link>
        </Heading>
        <Text
          as="p"
          marginTop="2"
          color={useColorModeValue("gray.700", "gray.200")}
          fontSize="lg"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quis, fugiat. Voluptatibus sed modi
          facere sapiente consectetur dicta aliquid delectus tempora nulla
          assumenda esse, magnam perspiciatis commodi itaque impedit alias in
          omnis minus. Est, iure doloribus voluptates dignissimos pariatur cum
          minus corrupti mollitia delectus beatae consectetur ipsam sed
          laboriosam commodi eligendi possimus odit cumque modi tenetur?
          Asperiores voluptas facilis minus id sed, exercitationem optio
          accusamus molestiae cupiditate. Iure at blanditiis nobis atque culpa
          minima, error veniam alias. Eaque tempora modi quae laborum eum dolor
          delectus earum architecto voluptatum dolorem expedita ullam molestias
          adipisci dicta numquam aliquid fuga nam, molestiae sunt quis?
        </Text>
      </Box>
    </Box>
  );
};

export default Blog;
