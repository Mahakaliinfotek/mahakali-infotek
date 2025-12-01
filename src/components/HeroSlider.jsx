import { useState } from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// Image imports
import Banner1 from "../assets/images/banner1.webp";
import Banner2 from "../assets/images/banner2.webp";
import Banner3 from "../assets/images/banner3.webp";
import Banner4 from "../assets/images/banner4.webp";
import Banner5 from "../assets/images/banner5.webp";
import Banner6 from "../assets/images/banner6.webp";
import Banner7 from "../assets/images/banner7.webp";
import Banner8 from "../assets/images/banner8.webp";
import Banner9 from "../assets/images/banner9.webp";
import Banner1M from "../assets/images/banner1M.webp";
import Banner2M from "../assets/images/banner2M.webp";
import Banner3M from "../assets/images/banner3M.webp";
import Banner4M from "../assets/images/banner4M.webp";
import Banner5M from "../assets/images/banner5M.webp";
import Banner6M from "../assets/images/banner6M.webp";
import Banner7M from "../assets/images/banner7M.webp";
import Banner8M from "../assets/images/banner8M.webp";
import Banner9M from "../assets/images/banner9M.webp";



export default function HeroSlider() {
    const isMobile = useMediaQuery("(max-width:600px)");
    const [activeIndex, setActiveIndex] = useState(0);
    const slides = [
        // { img: isMobile ? Banner1M : Banner1, name: "MAHAKALI ESTATE" },
        // { img: isMobile ? Banner2M : Banner2, name: "MAHAKALI UDYOG" },
        // { img: isMobile ? Banner3M : Banner3, name: "OSHIYAMAA TRANSPORT OPERATOR" },
        // { img: isMobile ? Banner4M : Banner4, name: "MAHAKALI INTERNATIONAL" },
        // { img: isMobile ? Banner5M : Banner5, name: "INDIAZONA" },
        // { img: isMobile ? Banner6M : Banner6, name: "RANSAN ENTERPRISES" },
        // { img: isMobile ? Banner7M : Banner7, name: "KRISHNA RESOURCES" },
        { img: isMobile ? Banner8M : Banner8, name: "MAHAKALI INFOTEK" },
        // { img: isMobile ? Banner9M : Banner9, name: "MAHAKALI NURANI LLC, OMAN" },

    ];

    return (
        <Box
            sx={{
                width: "100%",
                height: { xs: "80vh", md: "80vh" },
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
                                // height:"100%",
                                aspectRatio: { xs: 0.82, md: 2.41 },
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
