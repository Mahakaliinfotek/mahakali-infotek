import React from "react";
import { Box, Typography } from "@mui/material";

// Background + Icon
import Bg2 from "../../../assets/StorySection/Bg2.png";
import IconPage2 from "../../../assets/StorySection/iconPage2.png";
import { storyStyle } from "./StoryStyle";
import FadeOnScroll from "../../Animations/FadeOnScroll";
const styles = storyStyle;
const Section2 = () => {

    return (
        <Box
            sx={{
                height: { xs: "80vh", md: "100vh" },
                width: "100%",
                position: "relative",
                scrollSnapAlign: "start",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                overflow: "hidden",

                px: { xs: 2, md: 4 },
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
            {/* Background */}
            {/* <Box
                component="img"
                src={Bg2}
                alt="Section 2 Background"
                sx={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    zIndex: -1,
                }}
            /> */}

            {/* Content Container */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: { xs: 4, md: 6 },
                    maxWidth: "1400px",
                    width: "100%",
                }}
            >
                {/* LEFT TEXT BLOCK */}
                <FadeOnScroll>
                    <Box sx={{ flex: 0.7 }}>
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: 700,
                                borderLeft: "4px solid #fff",
                                pl: 2,
                                mb: 2,
                                fontSize: { xs: "20px", md: "28px" },
                                ...styles.labelHeader
                            }}
                        >
                            1984 - Foundation
                        </Typography>

                        <Typography
                            sx={{
                                lineHeight: 1.7,
                                ...styles.description,
                                fontSize: { xs: "14px", md: "25px" },
                                maxWidth: "100%",

                            }}
                        >
                            The journey began in 1984, when Shri R. S. Pagaria laid the
                            foundation of the enterprise from a modest table-space office in
                            Kolkata. With trading and supply of Hard Coke, Pearl Coke, and Steam
                            Coal, he established the cornerstone of what would evolve into a
                            multi-vertical group spanning resources, logistics, and technology
                            integration.
                        </Typography>
                    </Box>
                </FadeOnScroll>

                {/* RIGHT ICON */}
                <FadeOnScroll>
                    <Box
                        sx={{
                            flex: 0.3,
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <Box
                            component="img"
                            src={IconPage2}
                            alt="Foundation Icon"
                            sx={{
                                width: { xs: "200px", md: "320px" },
                                maxWidth: "420px",
                            }}
                        />
                    </Box>
                </FadeOnScroll>
            </Box>
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
        </Box>
    );
};

export default Section2;
