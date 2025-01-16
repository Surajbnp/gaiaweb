import React from "react";
import styles from "../styles/homepage.module.css";
import { Box, Image, Button, useColorMode, Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { GoArrowUpRight } from "react-icons/go";

const Homepage = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box w="100%" position={"relative"}>
        <Box className={styles.navbar}>
          <Navbar />
        </Box>
        <Box className={styles.rectangle}>
        </Box>
        <Image
          className={styles.gaia}
          w="fit-content"
          height={"90%"}
          src="https://v5imagecollection.s3.us-east-1.amazonaws.com/CharacterPNG.png"
        />
        <Button
          w={"180px"}
          color={"#8CC63F"}
          _hover={{ bg: "transparent", color: "whitesmoke" }}
          bg={"transparent"}
          border={"1px solid #8CC63F"}
          borderRadius={"20px"}
          pos={"absolute"}
          bottom={"8%"}
          left={"50%"}
          transform={"translateX(-50%)"}
          zIndex={50}
        >
          Buy Now
        </Button>
        <Box w={"100%"} className={styles.crousel}></Box>
      </Box>

      {/* section 2 started */}
      <Box
        bg={colorMode === "light" ? "#DAE6C9" : "#12180b"}
        className={styles.sec2}
      >
        <Box>
          <Text lineHeight={"70px"} textAlign={"start"} fontSize={"62px"}>
          Meet Gaia, the <span style={{fontWeight : "bold"}}>AI</span>ngel of Nature
          </Text>
          <Text mt={4} w={"600px"} textAlign={"start"}>
            GAIA is an AI character promoting environmental conservation,
            engaging communities, and rewarding sustainable actions with tokens.
          </Text>
          <Button
            color={"#457500"}
            borderRadius={"30px"}
            bg={"transparent"}
            rightIcon={<GoArrowUpRight />}
            className={styles.btn}
          >
            Get Started
          </Button>
        </Box>
        <Box></Box>
      </Box>
    </>
  );
};

export default Homepage;
