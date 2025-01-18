"use client";

import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";

const Links = ["Home", "NFTs", "Buy Gaia", "Community", "Info"];

const NavLink = (props) => {
  const { children } = props;
  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      color={"black"}
      fontWeight={600}
      _hover={{
        textDecoration: "none",
        color: "white",
      }}
      href={"#"}
    >
      {children}
    </Box>
  );
};

export default function WithAction() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box w={"100%"} bg={"transparent"}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            bg={colorMode === "light" ? "#DAE6C9" : "blackAlpha.500"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <Box>
            <Image
              w={"80px"}
              src={
                colorMode === "light"
                  ? "https://res.cloudinary.com/dddnxiqpq/image/upload/v1737115939/GAIA_mvnyk3.png"
                  : "https://res.cloudinary.com/dddnxiqpq/image/upload/v1737117323/GAIA_1_ayofqs.png"
              }
            />
          </Box>
          <HStack as={"nav"} spacing={6} display={{ base: "none", md: "flex" }}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </HStack>
          <Flex alignItems={"center"}>
            <Button
              bg={colorMode === "light" ? "#DAE6C9" : "blackAlpha.500"}
              onClick={toggleColorMode}
            >
              {colorMode === "light" ? (
                <MoonIcon color={"black"} />
              ) : (
                <SunIcon color={colorMode === "light" ? "black" : "white"} />
              )}
            </Button>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box
            bg={"#EDF2F7"}
            borderRadius={"8px"}
            p={4}
            display={{ md: "none" }}
            style={{
              transform: "translateY(10px)",
              transition: "opacity 2s ease, transform 0.4s ease",
              willChange: "opacity, transform",
            }}
          >
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
