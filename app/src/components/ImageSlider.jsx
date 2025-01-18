import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, useColorMode } from "@chakra-ui/react";

const ContinuousSlider = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const supportsImg = [
    {
      img: "https://res.cloudinary.com/dddnxiqpq/image/upload/v1737101520/Group_24_i4yncu.png",
      name: "Let’s GROW",
    },
    {
      img: "https://res.cloudinary.com/dddnxiqpq/image/upload/v1737101519/Group_19_pz5qng.png",
      name: "TREEGENS",
    },
    {
      img: "https://res.cloudinary.com/dddnxiqpq/image/upload/v1737101519/Group_23_jttdpu.png",
      name: "ECOSAPIENS",
    },
    {
      img: "https://res.cloudinary.com/dddnxiqpq/image/upload/v1737101519/Group_20_mupfe7.png",
      name: "ROBURNA",
    },
    {
      img: "https://res.cloudinary.com/dddnxiqpq/image/upload/v1737103028/Group_28_ipawtf.png",
      name: "PUBLIC NOUNS",
    },
    {
      img: "https://res.cloudinary.com/dddnxiqpq/image/upload/v1737101519/Group_21_hq40zx.png",
      name: "$EARTH",
    },
  ];

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    arrows: false,
    centerMode: true,
    focusOnSelect: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <Box
      style={{
        width: "100%",
        margin: "20px auto",
        padding: "0 10px",
        height: "auto",
      }}
    >
      <Slider {...settings}>
        {supportsImg.map((item, index) => (
          <Box key={index}>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              flexDirection={"column"}
              margin={"0 15px"} // Reduce margin for better spacing
              borderRadius={"8px"}
            >
              <img
                src={item.img}
                alt={item.name}
                style={{
                  maxWidth: "150px", // Restrict width for images
                  height: "auto",
                  borderRadius: "4px",
                  marginBottom: "8px",
                }}
              />
              <p style={{ fontSize: "1rem" }}>{item.name}</p>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ContinuousSlider;
