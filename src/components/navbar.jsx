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
  Hide,
  Image,
  Button,
  Text,
  Heading,
  MenuGroup,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {
  ChevronDownIcon,
  MoonIcon,
  SunIcon,
  ExternalLinkIcon,
  RepeatIcon,
  EditIcon,
  AddIcon,
} from "@chakra-ui/icons";
import { MdOutlineAccountCircle } from "react-icons/md";
import { useSelector } from "react-redux";

export default function Navbar() {
  const authenticaton = JSON.parse(localStorage.getItem("authenticaton")) || {};
  const { colorMode, toggleColorMode } = useColorMode();
  const auth = useSelector((state) => state.AuthReducer.isAuth);
  const isAuth = Object.keys(authenticaton).length > 0 ? true : false;
  // console.log(user);
  const user = authenticaton?.user;

  // console.log(user);
  // console.log(Object.keys(authenticaton).length);

  return (
    <>
      <Flex
        pos="sticky"
        top={0}
        right={0}
        zIndex="500"
        px={4}
        h="70px"
        align="center"
        w="full"
        bgGradient="linear(to-l,#7fc9df,#d038eb,#7fc9df)"
      >
        <Box>
          <Link to="/">
            <Flex align={"center"} gap="4px">
              <Image
                h="40px"
                src="https://res.cloudinary.com/doaedvl5s/image/upload/v1679925001/Notify_yhvgkj.png"
              />
              <Text color={"white"} fontSize={"sm"}>
                Norify me.
              </Text>
            </Flex>
          </Link>
        </Box>
        <Spacer />
        <HStack>
          <>
            {isAuth ? (
              <>
                <Link to="/newblog">
                  <Button leftIcon={<AddIcon />} colorScheme={"teal"}>
                    New
                  </Button>
                </Link>

                <Menu>
                  <MenuButton>
                    <Avatar size="md" name={user?.name} src={user?.photo} />
                  </MenuButton>
                  <MenuList>
                    <MenuGroup title="Profile">
                      <Link to="/account">
                        <MenuItem>My Account</MenuItem>
                      </Link>
                    </MenuGroup>
                  </MenuList>
                </Menu>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button size="sm" colorScheme={"twitter"} variant="outline">
                    Login
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button size="sm" colorScheme={"twitter"}>
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </>

          <>
            {colorMode === "dark" ? (
              <IconButton
                size="sm"
                onClick={toggleColorMode}
                colorScheme="twitter"
                aria-label="Search database"
                icon={<SunIcon />}
              />
            ) : (
              <IconButton
                size="sm"
                onClick={toggleColorMode}
                colorScheme="twitter"
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
