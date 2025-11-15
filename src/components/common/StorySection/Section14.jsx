import React from "react";
import { Box, Typography } from "@mui/material";

// Background (update path if needed)
import Bg14 from "../../../assets/StorySection/Bg14.png";
import { storyStyle } from "./StoryStyle";
import FadeOnScroll from "../../Animations/FadeOnScroll";
const styles = storyStyle;
const Section14 = () => {
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
            {/* ---------- Background ---------- */}
            {/* <Box
                component="img"
                src={Bg14}
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

            {/* ---------- Content ---------- */}
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
                            mb: 3,
                            mt: 10,
                            fontSize: { xs: "20px", md: "26px" },
                            ...styles.labelHeader
                        }}
                    >
                        2025 - Mahakali Nurani LLC, Oman
                    </Typography>

                    {/* Description */}
                    <Typography
                        sx={{
                            maxWidth: "90%",
                            fontSize: { xs: "14px", md: "16px" },
                            lineHeight: 1.65,
                            ...styles.description
                        }}
                    >
                        Expanding its global resource footprint, the group established Mahakali
                        Nurani LLC in Oman, trading limestone, gypsum, and other industrial
                        minerals from Oman to India and global markets with port-to-port
                        reliability.
                    </Typography>
                </FadeOnScroll>
            </Box>
        </Box>
    );
};

export default Section14;
