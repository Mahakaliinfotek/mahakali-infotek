import React from "react";
import { Box, Typography } from "@mui/material";

// Background + Icon
import Bg6 from "../../../assets/StorySection/Bg6.png"; // update to correct background
import MiningIcon from "../../../assets/StorySection/Page6_I1.png"; // update icon file
import { storyStyle } from "./StoryStyle";
import FadeOnScroll from "../../Animations/FadeOnScroll";

const Section6 = () => {
    const styles = storyStyle;
    return (
        <Box
            sx={{
                height: "100vh",
                width: "100%",
                position: "relative",
                display: "flex",
                alignItems: "center",
                scrollSnapAlign: "start",
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
            {/* Background */}
            {/* <Box
                component="img"
                src={Bg6}
                alt="Section 5 Background"
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
                    position: "relative",
                }}
            >
                {/* ---------------- LEFT TEXT BLOCK ---------------- */}
                <Box sx={{ flex: 0.9 }}>
                    <FadeOnScroll>
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: 700,
                                borderLeft: "4px solid #fff",
                                pl: 2,
                                mb: 2,
                                ...styles.labelHeader,
                                fontSize: { xs: "20px", md: "45px" },

                            }}
                        >
                            2004 - 2008 (Mining at Scale)
                        </Typography>

                        <Typography
                            sx={{
                                //   maxWidth: "90%",
                                ...styles.description,
                                fontSize: { xs: "14px", md: "25px" },
                                lineHeight: 1.65,
                                mb: 3,
                                opacity: 0.9,

                            }}
                        >
                            A decisive upstream move came under the leadership of Mr. Rajesh
                            Pagaria as the group entered mining operations for SECL and WCL,
                            managing the full chain - from mine face to stockpile, and mine face
                            to railway siding. Key projects included Chirimiri Opencast, Koriya
                            Opencast, Chirimiri R1 & R2, Kanchan, Dhelvadi, Surakachar, Baghdewa,
                            Gori 1 & 2, Shastri, Dhooptalla, and Nayagaon.
                        </Typography>

                        <Typography
                            sx={{
                                //   maxWidth: "90%",
                                ...styles.description,
                                fontSize: { xs: "14px", md: "24px" },
                                fontWeight: 700,
                                lineHeight: 1.65,
                            }}
                        >
                            The operations were powered by a fleet exceeding 100 owned tippers,
                            13 loaders, and over 200 market-hired units, supported by an in-house
                            maintenance ecosystem ensuring high uptime and operational
                            reliability - all managed by a team of over 550 personnel.
                        </Typography>
                    </FadeOnScroll>
                </Box>

                {/* ---------------- RIGHT ICON ---------------- */}
                <Box
                    sx={{
                        flex: 0.1,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",

                    }}
                >
                    <Box
                        component="img"
                        src={MiningIcon}
                        alt="Mining Icon"
                        sx={{
                            width: { xs: "300px", md: "550px" },
                            position: "absolute",
                            top: { xs: "-20%", md: "auto" },
                            right: { xs: "13%", md: "0%" }
                            //   maxWidth: "420px",
                        }}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default Section6;
