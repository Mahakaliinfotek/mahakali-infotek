import { Box, Typography, IconButton } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import pc1 from "../../assets/images/peopleCulture/pc1.webp";
import pc2 from "../../assets/images/peopleCulture/pc2.webp";
import pc3 from "../../assets/images/peopleCulture/pc3.webp";
import pc4 from "../../assets/images/peopleCulture/pc4.webp";
import { useNavigate } from "react-router-dom";

export default function PeopleCultureSlider() {
    const items = [
        {
            image: pc1,
            title: "Our Philosophy",
            text: "We believe in total ownership and accountability...",
        },
        {
            image: pc2,
            title: "A Culture of Hands-On Excellence",
            text: "We believe in learning by doing. Our approach...",
        },
        {
            image: pc3,
            title: "A Culture of Hands-On Excellence",
            text: "We believe in learning by doing. Our approach...",
        },
        {
            image: pc4,
            title: "A Culture of Hands-On Excellence",
            text: "We believe in learning by doing. Our approach...",
        },
    ];

    const navigate=useNavigate()

    return (
        <Box>

            <Box sx={{px:4.5,mt:4,mb:2}}>
                <Typography
                    sx={{
                        fontSize: { xs: 22, md: 28 },
                        fontWeight: 700,
                        // textAlign: "center",
                        fontFamily:"IBM Plex Sans",
                        mb: 1,
                        color:"#005875"
                    }}
                >
                    Our People. Our Asset.
                </Typography>
                <Typography
                    sx={{
                        fontSize: { xs: 16, md: 18 },
                        // fontWeight: 700,
                        // textAlign: "center",
                        fontFamily:"Inter",
                    
                        // color:"#005875"
                    }}
                >
                    At the Mahakali Group, our greatest asset isn't found in our facilities or our technology - it's in our people.
                </Typography>
            </Box>

            <Box sx={{ width: "100%", py: 2, display: "flex" }}>
                {/* Left Arrow */}
                <IconButton
                    className="prevBtn"
                    sx={{
                        // position: "absolute",
                        // top: "50%",
                        // left: -10,
                        // transform: "translateY(-50%)",
                        // zIndex: 10,
                        background: "rgba(255,255,255,0.8)",
                        "&:hover": { background: "white" },
                    }}
                >
                    <ArrowBackIosNewIcon fontSize="small" />
                </IconButton>



                <Swiper
                    modules={[Navigation]}
                    slidesPerView={2}
                    spaceBetween={-0.5}
                    navigation={{
                        prevEl: ".prevBtn",
                        nextEl: ".nextBtn",
                    }}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        900: { slidesPerView: 2 },
                    }}
                >
                    {items.map((item, index) => (
                        <SwiperSlide key={index}>
                            <Box
                                sx={{
                                    position: "relative",
                                    height: 300,
                                    // borderRadius: 2,
                                    overflow: "hidden",
                                    cursor: "pointer",
                                }}
                                onClick={()=>navigate("/legacy-leadership")}
                            >
                                {/* Background Image */}
                                <Box
                                    component="img"
                                    src={item.image}
                                    sx={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                    }}
                                />

                                {/* Overlay Gradient */}
                                <Box
                                    sx={{
                                        position: "absolute",
                                        bottom: 0,
                                        left: 0,
                                        width: "100%",
                                        p: 3,
                                        background:
                                            "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.8) 100%)",
                                        color: "#fff",
                                    }}
                                >
                                    <Typography
                                        sx={{ fontSize: 18, fontWeight: 700, mb: 1 }}
                                    >
                                        {item.title}
                                    </Typography>

                                    <Typography
                                        sx={{
                                            fontSize: 14,
                                            opacity: 0.9,
                                            fontWeight: 300,
                                        }}
                                    >
                                        {item.text}{" "}
                                        <strong style={{ cursor: "pointer", textDecoration: "underline" }}>
                                            Click to Read More
                                        </strong>
                                    </Typography>
                                </Box>
                            </Box>
                        </SwiperSlide>
                    ))}

                </Swiper>
                {/* Right Arrow */}
                <IconButton
                    className="nextBtn"
                    sx={{
                        // position: "absolute",
                        // top: "50%",
                        // right: -10,
                        // transform: "translateY(-50%)",
                        // zIndex: 10,
                        // background: "rgba(216, 40, 40, 0.8)",
                        "&:hover": { background: "white" },
                    }}
                >
                    <ArrowForwardIosIcon fontSize="small" />
                </IconButton>
            </Box>
        </Box>
    );
}
