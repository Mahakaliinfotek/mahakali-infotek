import React from "react";
import { Box, Typography } from "@mui/material";

// Background (update the path if different)
import Bg10 from "../../../assets/StorySection/Bg10.png";
import { storyStyle } from "./StoryStyle";
import FadeOnScroll from "../../Animations/FadeOnScroll";
const styles = storyStyle;
const Section10 = () => {
    return (
        <Box
            sx={{
                height: "100vh",
                width: "100%",
                position: "relative",
                scrollSnapAlign: "start",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                px: { xs: 3, md: 6 },
                overflow: "hidden",
            }}
        >
            {/* <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "80px",
                    background: "linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0))",
                    pointerEvents: "none",
                    zIndex: 5
                }}
            /> */}
            {/* <Box
                sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "80px",
                    background: "linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0))",
                    pointerEvents: "none",
                    zIndex: 5
                }}
            /> */}
            {/* ----------- Background ----------- */}
            {/* <Box
                component="img"
                src={Bg10}
                alt="Background"
                sx={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    zIndex: -1,
                }}
            /> */}

            {/* ----------- Main Content ----------- */}
            <Box
                sx={{
                    width: "100%",
                    maxWidth: "1400px",
                    mx: "auto",
                }}
            >
                {/* Heading */}
                <FadeOnScroll>
                    <Typography
                        variant="h5"
                        sx={{
                            fontWeight: 700,
                            borderLeft: "4px solid #fff",
                            pl: 2,
                            mb: 2,
                            fontSize: { xs: "20px", md: "26px" },
                            lineHeight: 1.4,
                            ...styles.labelHeader
                        }}
                    >
                        2019 - Oshiyamaa Transport Operator (OTO)
                    </Typography>

                    {/* Description */}
                    <Typography
                        sx={{
                            maxWidth: { xs: "100%", md: "80%" },
                            fontSize: { xs: "14px", md: "16px" },
                            lineHeight: 1.65,
                            ...styles.description
                        }}
                    >
                        The next generation, Mr. Harsh Pagaria, established Oshiyamaa
                        Transport Operator (OTO) – a dedicated port-to-pan India logistics
                        partner. What began as a student-led venture evolved into a trusted
                        transporter, leveraging fleet telematics and route intelligence to
                        deliver reliable last-mile connectivity.
                    </Typography>
                </FadeOnScroll>
            </Box>
        </Box>
    );
};

export default Section10;
