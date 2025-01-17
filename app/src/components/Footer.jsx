import { Box, Flex, useColorMode } from "@chakra-ui/react";
import React from "react";
import styles from "../styles/footer.module.css";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";
import { TiSocialYoutube } from "react-icons/ti";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  const { colorMode } = useColorMode();
  return (
    <Box
      color={colorMode === "light" ? "black" : "white"}
      bg={colorMode === "light" ? "#DAE6C9" : "#2B3C15"}
      className={styles.cont}
    >
      <Flex gap={"30px"} w={"fit-content"}>
        <a
          href="https://t.me/gaiaawake"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Telegram"
        >
          <FaTelegramPlane />
        </a>
        <a
          href="https://www.instagram.com/gaiaawake/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <SlSocialInstagram />
        </a>
        <a
          href="https://x.com/GAIAawake"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <SlSocialTwitter />
        </a>
        <a
          href="https://www.youtube.com/@GAIAawake"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
        >
          <TiSocialYoutube />
        </a>
      </Flex>
    </Box>
  );
};

export default Footer;
