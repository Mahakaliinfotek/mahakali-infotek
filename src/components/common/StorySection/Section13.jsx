import React from "react";
import { Box, Typography } from "@mui/material";

// Background + right-side icon (update paths as needed)
import Bg13 from "../../../assets/StorySection/Bg13.png";
import Icon2024 from "../../../assets/StorySection/Page13_I1.png";
import { storyStyle } from "./StoryStyle";
import FadeOnScroll from "../../Animations/FadeOnScroll";
const styles = storyStyle;
const Section13 = () => {
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
                px: { xs: 3, md: 4 },
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
            {/* ------------ Background ------------ */}
            {/* <Box
                component="img"
                src={Bg13}
                alt="Background"
                sx={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",s
                    height: "100%",
                    objectFit: "cover",
                    zIndex: -1,
                }}
            /> */}

            {/* ------------ Content Wrapper ------------ */}
            <Box
                sx={{
                    width: "100%",
                    maxWidth: "1400px",
                    mx: "auto",
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    justifyContent: "space-between",
                    alignItems: { xs: "center", md: "center" },
                    gap: { xs: 4, md: 8 },
                }}
            >

                {/* =====================================================
              LEFT BLOCK — TEXT CONTENT
        ===================================================== */}
                <Box sx={{ flex: 1, }}>
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
                            2024 - Mahakali Infotek launches Indiazona
                        </Typography>

                        <Typography
                            sx={{
                                fontSize: { xs: "14px", md: "16px" },
                                lineHeight: 1.65,
                                ...styles.description
                            }}
                        >
                            Ms. Bhawna Pagaria led the launch of Indiazona under Mahakali Infotek —
                            a digital commerce platform built on the India-first vision of transparent,
                            inclusive, and trust-based trade. The platform connects Indian sellers and
                            buyers through verified access, digital onboarding, and transparent
                            transaction flows.
                        </Typography>
                    </FadeOnScroll>
                </Box>

                {/* =====================================================
              RIGHT BLOCK — ICON / IMAGE
        ===================================================== */}
                <Box
                    component="img"
                    src={Icon2024}
                    alt="Indiazona Launch Icon"
                    sx={{
                        width: { xs: "250px", md: "450px" },
                        position: { xs: "absolute", md: "static" },
                        top: { xs: "50%", md: "auto" },
                        left: { xs: "20%", md: "auto" },
                        transform: { xs: "translateY(-50%)", md: "none" },
                        borderRadius: "50%",
                        objectFit: "cover",
                        opacity: { xs: 0.5, md: 1 },
                    }}
                />
            </Box>
        </Box>
    );
};

export default Section13;
