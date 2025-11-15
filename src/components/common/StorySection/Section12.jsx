import React from "react";
import { Box, Typography } from "@mui/material";

// Background (update path if needed)
import Bg12 from "../../../assets/StorySection/Bg12.png";
import { storyStyle } from "./StoryStyle";
import FadeOnScroll from "../../Animations/FadeOnScroll";
const styles = storyStyle;
const Section12 = () => {
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
            {/* ------------ Background ------------ */}
            {/* <Box
                component="img"
                src={Bg12}
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

            {/* ------------ Content Wrapper ------------ */}
            <Box
                sx={{
                    width: "100%",
                    maxWidth: "1400px",
                    mx: "auto",
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    justifyContent: "space-between",
                    //   alignItems: "flex-start",
                    gap: { xs: 5, md: 8 },
                }}
            >

                {/* =====================================================
              LEFT BLOCK – 2022
        ===================================================== */}
                <Box sx={{ flex: 0.6, }}>
                    <FadeOnScroll>
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: 700,
                                borderLeft: "4px solid #fff",
                                pl: 2,
                                mb: 2,
                                mt: -20,
                                fontSize: { xs: "20px", md: "24px" },
                                lineHeight: 1.4,
                                ...styles.labelHeader
                            }}
                        >
                            2022 - Indonesia Mining & Coke Vessel
                        </Typography>

                        <Typography
                            sx={{
                                fontSize: { xs: "14px", md: "16px" },
                                lineHeight: 1.65,
                                ...styles.description
                            }}
                        >
                            Began coke vessels import from China, Columbia and Indonesia and
                            enhanced the quality precision by adding a screening unit at Vizag
                            to segregate coke into multiple sizes customized for consumers like
                            foundries, stainless steel and ferroalloy clients nationwide.
                        </Typography>
                    </FadeOnScroll>
                </Box>


                {/* =====================================================
              RIGHT BLOCK – 2023
        ===================================================== */}
                <Box sx={{ flex: 0.4, alignSelf: "flex-end", }}>
                    <FadeOnScroll>
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: 700,
                                borderLeft: "4px solid #fff",
                                pl: 2,
                                mb: 2,
                                mt: 5,
                                fontSize: { xs: "20px", md: "24px" },
                                ...styles.labelHeader
                            }}
                        >
                            2023 - Indonesia Mining
                        </Typography>

                        <Typography
                            sx={{
                                fontSize: { xs: "14px", md: "16px" },
                                lineHeight: 1.65,
                                ...styles.description
                            }}
                        >
                            Under the leadership of Mr. D. K. Prasad, the group expanded mining
                            and sourcing operations to Samarinda and South Kalimantan, adding
                            local trading and mining capabilities.
                        </Typography>
                    </FadeOnScroll>
                </Box>

            </Box>
        </Box>
    );
};

export default Section12;
