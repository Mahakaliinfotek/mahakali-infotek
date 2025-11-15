import React from "react";
import { Box, Typography } from "@mui/material";

// Background + Icons (update paths as needed)
import Bg9 from "../../../assets/StorySection/Bg9.png";
import Icon2016 from "../../../assets/StorySection/Page9_I1.png";
import Icon2018 from "../../../assets/StorySection/Page9_I2.png";
import { storyStyle } from "./StoryStyle";
import FadeOnScroll from "../../Animations/FadeOnScroll";
import FadeDownOnScroll from "../../Animations/FadeDownOnScroll";
const styles = storyStyle;
const Section9 = () => {
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
            {/* ------------ Background ------------ */}
            {/* <Box
                component="img"
                src={Bg9}
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

            {/* ------------ 2 Column Wrapper ------------ */}
            <Box
                sx={{
                    width: "100%",
                    maxWidth: "1400px",
                    mx: "auto",
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: { xs: 5, md: 8 },
                }}
            >

                {/* ============================================================
              LEFT COLUMN – 2016 BLOCK
        ============================================================ */}

                <Box sx={{
                    flex: 1, display: "flex",
                    flexDirection: "column",
                    alignItems: "center",       // center horizontally
                    justifyContent: "center",
                    mt: -2
                }}>
                    {/* Top Icon */}
                    <FadeDownOnScroll>
                        <Box
                            component="img"
                            src={Icon2016}
                            alt="2016 Icon"
                            sx={{
                                width: { xs: "90px", md: "200px" },
                                mb: 1,
                            }}
                        />
                    </FadeDownOnScroll>

                    {/* Heading */}
                    <FadeOnScroll>
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: 700,
                                borderLeft: "4px solid #fff",
                                pl: 2,
                                mb: 2,

                                ...styles.labelHeader,
                                fontSize: { xs: "20px", md: "38px" },
                            }}
                        >
                            2016 - Venturing into Imported Coal
                        </Typography>

                        {/* Paragraph */}
                        <Typography
                            sx={{
                                fontSize: { xs: "14px", md: "16px" },
                                lineHeight: 1.65,
                                // maxWidth: "95%",
                                ...styles.description
                            }}
                        >
                            The group’s first imported coal vessel marked the beginning of a
                            disciplined international sourcing strategy, drawing supplies from
                            South Africa and Indonesia to meet India’s evolving industrial fuel
                            requirements.
                        </Typography>
                    </FadeOnScroll>
                </Box>


                {/* ============================================================
              RIGHT COLUMN – 2018 BLOCK
        ============================================================ */}
                <Box sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",       // center horizontally
                    justifyContent: "center",
                }}>

                    {/* Top Icon */}
                    <FadeDownOnScroll>
                        <Box
                            component="img"
                            src={Icon2018}
                            alt="2018 Icon"
                            sx={{
                                width: { xs: "110px", md: "240px" },
                                mb: 2,
                            }}
                        />
                    </FadeDownOnScroll>
                    <Box sx={{ textAlign: "left" }}>
                        {/* Heading */}
                        <FadeOnScroll>
                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: 700,
                                    borderLeft: "4px solid #fff",
                                    pl: 2,
                                    mb: 2,

                                    ...styles.labelHeader,
                                    fontSize: { xs: "20px", md: "38px" },
                                }}
                            >
                                2018 - Stevedoring Capability
                            </Typography>

                            {/* Paragraph */}
                            <Typography
                                sx={{
                                    fontSize: { xs: "14px", md: "16px" },
                                    lineHeight: 1.65,
                                    ...styles.description
                                }}
                            >
                                A strategic step towards end-to-end logistics control, the group
                                acquired a stevedoring license, enabling direct cargo handling at
                                Visakhapatnam port. This improved turnaround efficiency and
                                strengthened cargo quality control across inbound and outbound
                                operations.
                            </Typography>
                        </FadeOnScroll>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Section9;
