import React from "react";
import { Box, Typography } from "@mui/material";

// Background + Icon
import Bg5 from "../../../assets/StorySection/Bg5.png"; // update to your actual background
import IwaiLogo from "../../../assets/StorySection/Page5_I1.png"; // update icon file name
import { storyStyle } from "./StoryStyle";
import FadeOnScroll from "../../Animations/FadeOnScroll";
import FadeDownOnScroll from "../../Animations/FadeDownOnScroll";
const styles = storyStyle;
const Section5 = () => {
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

            {/* CONTENT WRAPPER */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: { xs: 5, md: 8 },
                    maxWidth: "1400px",
                    width: "100%",

                }}
            >
                {/* ---------------- LEFT SIDE: 2002 ---------------- */}
                <Box sx={{ flex: 0.6 }}>
                    <FadeOnScroll>
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: 700,
                                borderLeft: "4px solid #fff",
                                pl: 2,
                                mb: 3,
                                ...styles.labelHeader,
                                fontSize: { xs: "20px", md: "40px" },

                            }}
                        >
                            2002 - Beginning of Barge Movement
                        </Typography>

                        <Typography
                            sx={{
                                maxWidth: "100%",

                                lineHeight: 1.65,
                                ...styles.description,
                                mb: 2,
                                fontWeight: 500,
                                fontSize: { xs: "14px", md: 30 },
                                lineHeight: "35px"


                            }}
                        >
                            Under the leadership of Mr. Rajesh Pagaria, the group pioneered
                            India’s first organized coal barge movement on National Waterway No. 2
                            in partnership with the Inland Waterways Authority of India (IWAI) and
                            CIWTC.
                        </Typography>

                        <Typography
                            sx={{
                                // maxWidth: "95%",

                                lineHeight: 1.65,
                                ...styles.description,
                                fontSize: { xs: "14px", md: 30 },
                                lineHeight: "35px"
                            }}
                        >
                            The inaugural barge, MV Rajnikant, was loaded at Jogigupha Ghat and
                            discharged at Manirampur, Barakpore, reviving a pre-independence trade
                            route between India and Bangladesh. Over 50 barge movements followed,
                            establishing inland waterways as a viable logistics mode for bulk
                            cargo.
                        </Typography>
                    </FadeOnScroll>
                </Box>

                {/* ---------------- RIGHT SIDE: 2003 ---------------- */}

                <Box sx={{
                    flex: 0.4,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",       // center horizontally
                    justifyContent: "center",
                }}>
                    {/* ROUND LOGO */}
                    <FadeDownOnScroll>
                        <Box
                            component="img"
                            src={IwaiLogo}
                            alt="IWAI Logo"
                            sx={{
                                width: { xs: "90px", md: "180px" },
                                mb: { xs: 2, md: 3 },

                            }}
                        />
                    </FadeDownOnScroll>
                    <Box
                        sx={{

                            textAlign: { xs: "left", md: "left" },
                        }}
                    >

                        <Box sx={{ alignSelf: "flex-end" }}>
                            <FadeOnScroll>
                                <Typography
                                    variant="h5"
                                    sx={{
                                        fontWeight: 700,
                                        borderRight: "4px solid #fff",
                                        pr: 2,
                                        mb: 2,
                                        fontSize: { xs: "20px", md: "26px" },
                                        display: "inline-block",
                                        ...styles.labelHeader
                                    }}
                                >
                                    2003 - Expanding into Odisha
                                </Typography>

                                <Typography
                                    sx={{
                                        maxWidth: "100%",

                                        // lineHeight: 1.65,
                                        ...styles.description,
                                        fontSize: { xs: "14px", md: "30px" },
                                        lineHeight: "30px",
                                    }}
                                >
                                    The group expanded its coal trading and logistics network into
                                    Odisha, securing its first operating plot at Mangoli Chowk and
                                    subsequently building a strong state-wide operational footprint.
                                </Typography>
                            </FadeOnScroll>
                        </Box>

                    </Box>
                </Box>

            </Box>

        </Box>
    );
};

export default Section5;
