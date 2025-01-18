import React from "react";
import { Box, Image, Text, useColorMode } from "@chakra-ui/react";
import Slider from "react-slick"; // Import react-slick
import "slick-carousel/slick/slick.css"; // Import slick-carousel CSS
import "slick-carousel/slick/slick-theme.css"; // Import slick-carousel theme CSS

const SliderComp = () => {
  const { colorMode } = useColorMode();

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: false,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const cards = [
    {
      title: "Open Source",
      description: "Anybody can use the power of Gaia for free.",
      image:
        "https://res.cloudinary.com/dddnxiqpq/image/upload/v1737098990/freepik__the-style-is-candid-image-photography-with-natural__17354_1_yggizq.png",
    },
    {
      title: "Social Handle",
      description: "Gaia creates posts autonomously on Twitter",
      image:
        "https://res.cloudinary.com/dddnxiqpq/image/upload/v1737098990/freepik__the-style-is-candid-image-photography-with-natural__44232_1_nr2cvl.png",
    },
    {
      title: "Weather Update",
      description: "Has weather information from around the world.",
      image:
        "https://res.cloudinary.com/dddnxiqpq/image/upload/v1737098990/freepik__the-style-is-candid-image-photography-with-natural__46070_1_rvvi7g.png",
    },
    {
      title: "Autonomous",
      description: "Can read information from the internet.",
      image:
        "https://res.cloudinary.com/dddnxiqpq/image/upload/v1737098990/freepik__the-style-is-candid-image-photography-with-natural__37849_1_pkgemk.png",
    },
  ];

  return (
    <Box padding="40px">
      <Box>
        <Slider {...settings}>
          {cards.map((card, index) => (
            <Box key={index} textAlign="center" p={4}>
              <Image src={card.image} alt={card.title} mx="auto" mb={4} />
              <Text fontSize={"18px"} fontWeight={600}>
                {card.title}
              </Text>
              <Text
                fontSize={{ base: "12px", md: "18px" }}
                textAlign={"center"}
              >
                {card.description}
              </Text>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default SliderComp;
