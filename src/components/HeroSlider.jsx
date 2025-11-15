import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// Image imports
import Banner1 from "../assets/images/banner1.png";
import Banner2 from "../assets/images/banner2.png";
import Banner3 from "../assets/images/banner3.png";
import Banner4 from "../assets/images/banner4.png";
import Banner5 from "../assets/images/banner5.png";
import Banner6 from "../assets/images/banner6.png";
import Banner7 from "../assets/images/banner7.png";
import Banner8 from "../assets/images/banner8.png";
import Banner9 from "../assets/images/banner9.png";


const slides = [
    // { img: Banner1, name: "MAHAKALI ESTATE" },
    // { img: Banner2, name: "MAHAKALI UDYOG" },
    // { img: Banner3, name: "OSHIYAMAA TRANSPORT OPERATOR" },
    // { img: Banner4, name: "MAHAKALI INTERNATIONAL" },
    // { img: Banner5, name: "INDIAZONA" },
    // { img: Banner6, name: "RANSAN ENTERPRISES" },
    // { img: Banner7, name: "KRISHNA RESOURCES" },
    { img: Banner8, name: "MAHAKALI INFOTEK" },
    // { img: Banner9, name: "MAHAKALI NURANI LLC, OMAN" },
];

export default function HeroSlider() {

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <Box
            sx={{
                width: "100%",
                height: { xs: "70vh", md: "70vh" },
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* IMAGE SLIDER */}
            <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                onSlideChange={(swiper) =>
                    setActiveIndex(swiper.realIndex)
                }
                style={{ height: "100%" }}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <Box
                            sx={{
                                width: "100%",
                                height: "100%",
                                backgroundImage: `url(${slide.img})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                filter: "brightness(0.85)",
                            }}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "100%",
                    color: "white",
                    textAlign: "center",
                    zIndex: 20,
                    px: 2,
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        alignItems: "center",
                    }}

                // border={1}
                >

                    {/* FIXED LEFT PART */}
                    <Typography
                        sx={{
                            fontSize: { xs: "20px", md: "30px", lg: "30px" },
                            fontWeight: 100,
                            letterSpacing: 1,
                            whiteSpace: "nowrap",
                            textShadow: "0 0 8px rgba(0,0,0,0.8)",
                            fontFamily: "IBM Plex Sans"
                        }}
                    >
                        THE MAHAKALI GROUP |
                    </Typography>

                    {/* DYNAMIC RIGHT PART */}
                    <Typography
                        sx={{
                            fontSize: { xs: "22px", md: "40px", lg: "40px" },
                            fontWeight: 500,
                            letterSpacing: 1,
                            ml: 1,
                            // maxWidth: "700px",
                            textAlign: "center",
                            lineHeight: 1.1,
                            wordBreak: "break-word",
                            textShadow: "0 0 8px rgba(0,0,0,0.8)",
                            fontFamily: "IBM Plex Sans",

                        }}
                    // border={1}
                    >
                        {slides[activeIndex].name}
                    </Typography>
                </Box>
            </Box>









        </Box>
    );
}
