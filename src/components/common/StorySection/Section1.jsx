import React from "react";
import { Box, Typography } from "@mui/material";

// Import the background for Section 1
import Bg1 from "../../../assets/StorySection/Bg1.png";
// If your file name is Story.png and you want the top slice, use Story.png instead.
import { storyStyle } from "./StoryStyle";
import FadeOnScroll from "../../Animations/FadeOnScroll";
const styles = storyStyle;
const Section1 = () => {
    return (
        <Box
            sx={{
                height: { xs: "60vh", md: "100vh" },
                width: "100%",
                position: "relative",

                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                textAlign: "center",
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
            {/* Background Image */}
            {/* <Box
                component="img"
                src={Bg1}
                alt="Section 1 Background"
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    zIndex: -1,
                    filter: "brightness(0.9)",
                }}
            /> */}

            {/* Text Content */}
            <FadeOnScroll>
                <Box sx={{ px: 2, }}>
                    <Typography
                        variant="h4"
                        sx={{
                            ...styles.labelHeader,
                            fontWeight: 700,
                            letterSpacing: "1px",
                            fontSize: { xs: "30px", md: "45px" },

                        }}
                    >
                        THE MAHAKALI GROUP
                    </Typography>

                    <Typography
                        variant="h6"
                        sx={{
                            mt: 2,
                            ...styles.description,
                            fontWeight: 400,
                            fontSize: { xs: "22px", md: "28px" },
                            textDecoration: "underline",
                            textUnderlineOffset: "4px",
                        }}
                    >
                        “Built on experience. Expanded through vision. Growing worldwide.”
                    </Typography>
                </Box>
            </FadeOnScroll>
            {/* <Box
                sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "80px",
                    background: "linear-gradient(to top, rgba(0,0,0,0.45), rgba(0,0,0,0))",
                    pointerEvents: "none",
                    zIndex: 5
                }}
            /> */}
        </Box>
    );
};

export default Section1;
