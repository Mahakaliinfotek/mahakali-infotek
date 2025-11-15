import React from "react";
import { Box, Typography } from "@mui/material";

// Background + Icons
import Bg3 from "../../../assets/StorySection/Bg3.png"; // Update to your correct image.
import IconLeather from "../../../assets/StorySection/Page3_I1.png";
import IconExport from "../../../assets/StorySection/Page3_I2.png";
import IconIndia from "../../../assets/StorySection/Page3_I3.png";
import { storyStyle } from "./StoryStyle";
import FadeOnScroll from "../../Animations/FadeOnScroll";
import FadeDownOnScroll from "../../Animations/FadeDownOnScroll";
const styles = storyStyle;
const Section3 = () => {
    return (
        <Box
            sx={{
                height: { xs: "auto", md: "100vh" },
                width: "100%",
                position: "relative",
                scrollSnapAlign: "start",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                overflow: "hidden",
                px: { xs: 2, md: 4 },
                pb: { xs: 4, md: 0 },
               
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
                src={Bg3}
                alt="Section 3 Background"
                sx={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    zIndex: -1,
                }}
            /> */}

            {/* CONTENT WRAPPER */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: { xs: 5, md: 5 },
                    maxWidth: "1400px",
                    width: "100%",
                    position: "relative",
                    // border:1, 
                }}
            >
                {/* ---------------- LEFT SIDE: 1994 ---------------- */}
                <Box sx={{ flex: 1 }}>
                    <FadeOnScroll>
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: 700,
                                borderLeft: "4px solid #fff",
                                pl: 2,
                                mb: 2,
                                ...styles.labelHeader,
                                fontSize: { xs: "20px", md: "30px" },

                            }}
                        >
                            1994 - West Bengal Consolidation
                        </Typography>

                        <Typography
                            sx={{
                                maxWidth: "90%",
                                fontSize: { xs: "14px", md: "16px" },
                                lineHeight: 1.6,
                                ...styles.description
                            }}
                        >
                            By 1994, the group had consolidated a strong foothold across public
                            sector units and private coal supply networks to industries and
                            traders in West Bengal. Robust on-ground operations and long-standing
                            stakeholder relationships created a platform for scalable and reliable
                            energy delivery.
                        </Typography>
                    </FadeOnScroll>

                    {/* LEFT ICONS */}

                    <FadeOnScroll>
                        <Box
                            sx={{
                                display: "flex",
                                gap: { xs: 0, md: 3 },
                                mt: { xs: 0, md: 6 },

                                width: { xs: "120px", md: "200px" },
                                zIndex: { xs: 1, md: "auto" }
                            }}
                        >
                            <Box
                                component="img"
                                src={IconLeather}
                                alt="Leather Icon"
                                sx={{
                                    width: { xs: "100px", md: "200px" },
                                    position: { xs: "absolute", md: "static" },
                                    bottom: { xs: "30%", md: "auto" },
                                    left: { xs: "1%", md: "auto" },
                                    transform: { xs: "translateY(-50%)", md: "none" },
                                    opacity: { xs: 0.9, md: 1 },
                                }}
                            />
                            <Box
                                component="img"
                                src={IconExport}
                                alt="Export Icon"
                                sx={{
                                    width: { xs: "100px", md: "200px" },
                                    position: { xs: "absolute", md: "static" },
                                    bottom: { xs: "-15%", md: "auto" },
                                    right: { xs: "5%", md: "auto" },
                                    transform: { xs: "translateY(-50%)", md: "none" },
                                    opacity: { xs: 0.9, md: 1 },
                                }}
                            />
                        </Box>
                    </FadeOnScroll>
                </Box>

                {/* ---------------- RIGHT SIDE: 1996 ---------------- */}
                <Box sx={{ flex: 1, textAlign: { xs: "right", md: "left", }, alignSelf: "flex-end" }}>

                    {/* RIGHT ICON: BENGAL MAP */}
                    
                    <Box
                        component="img"
                        src={IconIndia}

                        alt="India Map Icon"
                        sx={{
                            width: { xs: "200px", md: "300px" },
                            mt: { xs: 4, md: 6 },
                            // ml: "auto",
                            top: { xs: "-10%", md: "-20%" },
                            right: { xs: "0%", md: "10%" },
                            display: "block",
                            position: "absolute"
                        }}
                    />
                   
                    <FadeOnScroll>
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: 700,
                                borderRight: "4px solid #fff",
                                pr: 2,
                                mb: 2,
                                display: "inline-block",
                                ...styles.labelHeader,
                                fontSize: { xs: "20px", md: "30px" },
                            }}
                        >
                            1996 - The First Step Beyond Borders
                        </Typography>

                        <Typography
                            sx={{
                                mt: 1,
                                fontSize: { xs: "14px", md: "16px" },
                                lineHeight: 1.6,
                                ...styles.description
                            }}
                        >
                            In 1996, Mr. Rajesh Pagaria diversified into leather exports,
                            forging durable partnerships across key European markets. This
                            venture built the group’s early discipline in international trade,
                            logistics, and client relationship management – principles that would
                            later underpin its cross-sectoral expansions in resources and
                            minerals.
                        </Typography>
                    </FadeOnScroll>
                </Box>
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

export default Section3;
