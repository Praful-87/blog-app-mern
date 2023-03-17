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
  Heading,
  Hide,
  Icon,
  Center,
  Image,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {
  ChevronDownIcon,
  MoonIcon,
  SunIcon,
  ArrowBackIcon,
  TriangleDownIcon,
  InfoIcon,
} from "@chakra-ui/icons";
import Register from "./register";
import Login from "./login";
import logo from "./logo/Notify.png";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  const isAuth = true;
  return (
    <>
      <Flex
        px={4}
        h="70px"
        align="center"
        w="full"
        pos="sticky"
        top="0"
        left="0"
        zIndex={500}
        bgGradient="linear(to-l,#7fc9df,#d038eb,#7fc9df)"
      >
        <Link to="">
          <Flex align={"center"}>
            {/* Notify me. */}
            <Image
              borderRadius="full"
              boxSize="50px"
              src={logo}
              alt="Dan Abramov"
            />
            <Box ml={1}>
              <Heading size="lg" color={"white"}>
                Notify Me.
              </Heading>
              <Text fontSize="xs">Better for now</Text>
            </Box>
          </Flex>
        </Link>
        <Spacer />
        <HStack>
          <>
            {isAuth ? (
              <>
                <Hide below="md">
                  <Avatar
                    size="md"
                    name="Ryan Florence"
                    src="https://avatars.githubusercontent.com/u/103850217?v=4"
                  />
                </Hide>

                <Menu>
                  <MenuButton>
                    Praful Jadaho
                    <ChevronDownIcon />
                  </MenuButton>

                  <MenuList>
                    <MenuItem>
                      <Link to="/account">
                        {" "}
                        <InfoIcon />
                        &nbsp; Account
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link to="/">
                        {" "}
                        <ArrowBackIcon />
                        &nbsp; Logout
                      </Link>
                    </MenuItem>
                  </MenuList>
                </Menu>
              </>
            ) : (
              <>
                <Login />
                <Register />
              </>
            )}
          </>

          <>
            {colorMode === "dark" ? (
              <IconButton
                size="sm"
                onClick={toggleColorMode}
                colorScheme="blue"
                aria-label="Search database"
                icon={<SunIcon />}
              />
            ) : (
              <IconButton
                size="sm"
                onClick={toggleColorMode}
                colorScheme="blue"
                aria-label="Search database"
                icon={<MoonIcon />}
              />
            )}
          </>
        </HStack>
      </Flex>
    </>
  );
}
