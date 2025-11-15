import React from "react";
import { Box, Typography } from "@mui/material";

// Background (replace with your final path)
import Bg8 from "../../../assets/StorySection/Bg8.png";
import { storyStyle } from "./StoryStyle";
import FadeOnScroll from "../../Animations/FadeOnScroll";
const styles = storyStyle;
const Section8 = () => {
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
                px: { xs: 2, md: 6 },
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

            {/* ------- Background ------- */}
            {/* <Box
                component="img"
                src={Bg8}
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

            {/* ------- Content Wrapper ------- */}
            <Box
                sx={{
                    width: "100%",
                    maxWidth: "1400px",
                    mx: "auto",
                    display: "flex",
                    flexDirection: "column",
                    gap: { xs: 5, md: 10 },
                }}
            >

                {/* ------------ 2014 Block ------------ */}
                <Box>
                    <FadeOnScroll>
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: 700,
                                borderLeft: "4px solid #fff",
                                pl: 2,
                                mb: 2,
                                fontSize: { xs: "20px", md: "24px" },
                                ...styles.labelHeader
                            }}
                        >
                            2014 - Bilaspur Hub
                        </Typography>

                        <Typography
                            sx={{
                                maxWidth: { xs: "100%", md: "80%" },
                                fontSize: { xs: "14px", md: "16px" },
                                lineHeight: 1.65,
                                ...styles.description
                            }}
                        >
                            A dedicated operational base and plot were set up in Bilaspur,
                            anchoring the group’s presence along the Central India coal belt and
                            optimizing rail coordination under the SECR corridors.
                        </Typography>
                    </FadeOnScroll>
                </Box>

                {/* ------------ 2015 Block ------------ */}
                <Box>
                    <FadeOnScroll>
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: 700,
                                borderLeft: "4px solid #fff",
                                pl: 2,
                                mb: 2,
                                fontSize: { xs: "20px", md: "24px" },
                                ...styles.labelHeader
                            }}
                        >
                            2015 - Pan-India Presence
                        </Typography>

                        <Typography
                            sx={{
                                maxWidth: { xs: "100%", md: "80%" },
                                fontSize: { xs: "14px", md: "16px" },
                                lineHeight: 1.65,
                                ...styles.description
                            }}
                        >
                            Under the leadership of Mr. Avanti Pagaria, the enterprise achieved a
                            strong Pan-India presence in the domestic coal market, with extensive
                            client clusters, service corridors, and an expanding rail rake program
                            powering the supply chain.
                        </Typography>
                    </FadeOnScroll>
                </Box>

            </Box>
        </Box>
    );
};

export default Section8;
