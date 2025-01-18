import React, { useState, useEffect } from "react";
import styles from "../styles/homepage.module.css";
import {
  Box,
  Image,
  Button,
  useColorMode,
  Text,
  LightMode,
  Flex,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { GoArrowUpRight } from "react-icons/go";
import SliderComp from "../components/SliderComp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../components/Footer";
import ContinuousSlider from "../components/ImageSlider";

const Homepage = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openLink = () => {
    window.open(
      "https://app.virtuals.io/prototypes/0x9eb54E00863b6e12eed39B6081E018fec8336EBc/terminal",
      "_blank"
    );
  };

  return (
    <>
      <Box w="100%" overflow={"hidden"} position={"relative"}>
        {/* Navbar */}
        <Box
          className={styles.navbar}
          bg={isSticky ? "#5E7C24" : "transparent"}
          boxShadow={isSticky ? "md" : "none"}
          position={"fixed"}
          top={0}
          zIndex={1000}
          transition="background-color 0.3s, box-shadow 0.3s"
          width={"100%"}
        >
          <Navbar />
        </Box>
        <Box className={styles.rectangle}></Box>
        <Image
          className={styles.gaia}
          w="fit-content"
          height={"100%"}
          src="https://v5imagecollection.s3.us-east-1.amazonaws.com/CharacterPNG.png"
        />
        <Button
          w={"180px"}
          color={"#8CC63F"}
          _hover={{
            bg: "transparent",
            color: "whitesmoke",
            borderColor: "whitesmoke",
          }}
          bg={"transparent"}
          border={"1px solid #8CC63F"}
          borderRadius={"20px"}
          pos={"absolute"}
          bottom={"8%"}
          left={"50%"}
          transform={"translateX(-50%)"}
          zIndex={50}
          onClick={openLink}
        >
          Buy Now
        </Button>
        <Box w={"100%"} className={styles.crousel}></Box>
      </Box>

      {/* section 2 started */}
      <Box
        bg={colorMode === "light" ? "#DAE6C9" : "#12180b"}
        color={colorMode === "light" ? "#457500" : "#8CC63F"}
        className={styles.sec2}
      >
        <Box>
          <Text
            lineHeight={{ base: "48px", md: "70px" }}
            textAlign={"start"}
            fontSize={{ base: "42px", md: "62px" }}
          >
            Meet Gaia, the <span style={{ fontWeight: "bold" }}>AI</span>ngel of
            Nature
          </Text>
          <Text
            mt={4}
            fontSize={{ base: "18px", md: "26px" }}
            textAlign={"start"}
          >
            GAIA is an AI character promoting environmental conservation,
            engaging communities, and rewarding sustainable actions with tokens.
          </Text>
          <Button
            color={colorMode === "light" ? "#457500" : "#8CC63F"}
            border={`1px solid ${
              colorMode === "light" ? "#457500" : "#8CC63F"
            }`}
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

      {/* section 3 */}
      <Box
        backgroundColor={colorMode === "light" ? "#FCFFCD" : "#2B3C15"}
        color={colorMode === "light" ? "#457500" : "#8CC63F"}
        className={styles.sec3}
      >
        <Text fontSize={{ base: "42px", md: "62px" }}>Powers of GAIA</Text>

        <Box className={styles.slider}>
          <SliderComp />
        </Box>
      </Box>

      {/* section 4 */}
      <Box
        backgroundColor={colorMode === "light" ? "#FCFFCD" : "#12180b"}
        color={colorMode === "light" ? "#457500" : "#8CC63F"}
        className={styles.sec4}
      >
        <Text fontSize={{ base: "42px", md: "62px" }}>{"GAIA Supports"}</Text>

        <Box>
          <ContinuousSlider />
        </Box>
      </Box>

      {/* Footer */}
      <Box>
        <Footer />
      </Box>
    </>
  );
};

export default Homepage;
