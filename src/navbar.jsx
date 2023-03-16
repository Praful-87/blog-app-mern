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
  Hide
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ChevronDownIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import Register from "./register";
import Login from "./login";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  const isAuth = true;
  return (
    <>
      <Flex px={4} h="70px" align="center" w="full">
        <Box>
          <Heading>.Blog</Heading>
        </Box>
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
                      <Link to="/account">Your Account</Link>
                    </MenuItem>
                    <MenuItem>Logout</MenuItem>
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
