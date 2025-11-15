import React from "react";
import { Box, Typography } from "@mui/material";

// Background + Map
import Bg7 from "../../../assets/StorySection/Bg7.png";        // update path
import IndiaMap from "../../../assets/StorySection/Page7_I1.png"; // update path
import { storyStyle } from "./StoryStyle";
import FadeOnScroll from "../../Animations/FadeOnScroll";
const styles = storyStyle;
const Section7 = () => {
    return (
        <Box
            sx={{
                height: "100vh",
                width: "100%",
                position: "relative",
                display: "flex",
                scrollSnapAlign: "start",
                alignItems: "center",
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
            {/* ---------------- BACKGROUND ---------------- */}
            {/* <Box
                component="img"
                src={Bg7}
                alt="Background"
                sx={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    zIndex: -2,
                }}
            /> */}

            {/* ---------------- INDIA MAP (center background) ---------------- */}
            <Box
                component="img"
                src={IndiaMap}
                alt="India Map"
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: { xs: "100%", md: "50%" },
                    opacity: 0.9,
                    zIndex: 1,
                }}
            />

            {/* ---------------- CONTENT GRID ---------------- */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "column" },
                    justifyContent: "space-between",
                    alignItems: { xs: "flex-start", md: "center" },
                    gap: { xs: 5, md: 6 },
                    maxWidth: "1400px",
                    width: "100%",
                    mx: "auto",
                }}
            >

                {/* ---------------- LEFT SECTION (2008) ---------------- */}
                <Box sx={{ flex: 1 }}>
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
                            2008 - East - South-west Expansion
                        </Typography>

                        <Typography
                            sx={{

                                maxWidth: "98%",
                                ...styles.description,
                                fontSize: { xs: "14px", md: "25px" },
                                lineHeight: 1.65,
                            }}
                        >
                            Having established end-to-end coverage across the eastern coal belt, the
                            group expanded westward, launching coal trading operations in Chhattisgarh,
                            Andhra Pradesh, and Maharashtra. This marked the creation of long-haul
                            trading corridors connecting eastern mines to western consumption clusters.
                        </Typography>
                    </FadeOnScroll>
                </Box>


                {/* ---------------- RIGHT SECTION ---------------- */}
                <Box
                    sx={{
                        flex: 1,
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        textAlign: "left",
                        gap: 4,
                    }}
                >
                    {/* ---- 2010 block ---- */}
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
                                2010 - Central India Scale-Up
                            </Typography>

                            <Typography
                                sx={{

                                    ...styles.description,
                                    fontSize: { xs: "14px", md: "25px" },
                                    lineHeight: 1.65,
                                }}
                            >
                                A dedicated trading base was established at Jharsuguda to serve the
                                Rourkela–Raigarh industrial belt — a key demand hub for steel, power,
                                and aluminium industries — further strengthening the group’s Central
                                India network.
                            </Typography>
                        </FadeOnScroll>
                    </Box>

                    {/* ---- 2012 block ---- */}
                    <Box sx={{ textAlign: { xs: "left", md: "left" } }}>
                        <FadeOnScroll>
                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: 700,
                                    borderRight: "4px solid #fff",
                                    pr: 2,
                                    mb: 2,
                                    fontSize: { xs: "20px", md: "24px" },
                                    display: "inline-block",
                                    ...styles.labelHeader
                                }}
                            >
                                2012 — Northeast Expansion
                            </Typography>

                            <Typography
                                sx={{


                                    ...styles.description,
                                    fontSize: { xs: "14px", md: "25px" },
                                    lineHeight: 1.65,
                                }}
                            >
                                Coal trading operations were scaled up across the Northeast, supplying
                                to tea gardens and industrial clusters, while also integrating
                                import-backed coal flows from East Coast ports through strategically
                                planned supply corridors.
                            </Typography>
                        </FadeOnScroll>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Section7;
