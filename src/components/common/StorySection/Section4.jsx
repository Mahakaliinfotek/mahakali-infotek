import React from "react";
import { Box, Typography } from "@mui/material";

// Background + Icon
import Bg4 from "../../../assets/StorySection/Bg4.png"; // replace with actual background if needed
import { storyStyle } from "./StoryStyle";
import FadeOnScroll from "../../Animations/FadeOnScroll";
const styles = storyStyle;

const Section4 = () => {
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
                mt: { xs: 5, md: 0 }
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
                    height: "20px",
                    background: "linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0))",
                    pointerEvents: "none",
                    zIndex: 5
                }}
            /> */}
            {/* Background */}
            {/* <Box
                component="img"
                src={Bg4}
                alt="Section 4 Background"
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
                    alignItems: "center",
                    gap: { xs: 4, md: 6 },
                    maxWidth: "1400px",
                    width: "100%",
                }}
            >
                {/* ---------------- LEFT TEXT ---------------- */}
                <Box sx={{ flex: 1 }}>
                    <FadeOnScroll>
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
                            2001 - Rail-led Logistics Advantage
                        </Typography>

                        <Typography
                            sx={{
                                maxWidth: { xs: "100%", md: "90%" },
                                fontSize: { xs: "14px", md: "16px" },
                                lineHeight: 1.65,
                                mb: 3,
                                opacity: 0.9,
                                ...styles.description
                            }}
                        >
                            In 2001, Mr. Rajesh Pagaria exited the leather segment, driven by
                            sustainability and animal welfare concerns, and rejoined the family
                            business with a renewed vision – to build a truly integrated Indian
                            enterprise. Depots were established at Sealdah and Ultadanga marking the
                            group’s first rail-linked logistics advantage through operations with
                            Northeast Frontier Railway and Eastern Railway.
                        </Typography>

                        <Typography
                            sx={{
                                maxWidth: { xs: "100%", md: "90%" },
                                fontSize: { xs: "14px", md: "16px" },
                                fontWeight: 700,
                                lineHeight: 1.65,
                                ...styles.description
                            }}
                        >
                            Brought the first ever coal rake at Dankuni siding and this operation
                            was inaugurated by Respected General Manager Eastern Railway. The result
                            – lower turnaround time, improved freight efficiency, and reduced
                            volatility in coal movement.
                        </Typography>
                    </FadeOnScroll>
                </Box>

            </Box>
        </Box>
    );
};

export default Section4;
