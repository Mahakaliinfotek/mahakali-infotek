import React from "react";
import { Box, Typography } from "@mui/material";

// Background + icon (update the file path if needed)
import Bg11 from "../../../assets/StorySection/Bg11.png";
import Icon2021 from "../../../assets/StorySection/Page11_I1.png";
import { storyStyle } from "./StoryStyle";
import FadeOnScroll from "../../Animations/FadeOnScroll";
const styles = storyStyle;
const Section11 = () => {
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
                src={Bg11}
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

            {/* ------------ Wrapper ------------ */}
            <Box
                sx={{
                    width: "100%",
                    maxWidth: "1400px",
                    mx: "auto",
                    display: "flex",
                    flexDirection: "column",
                    gap: { xs: 5, md: 15 },
                    position: "relative",
                    //   border:1
                }}
            >

                {/* =====================================================
              2020 BLOCK
        ===================================================== */}
                <Box sx={{}}>
                    <FadeOnScroll>
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: 700,
                                borderLeft: "4px solid #fff",
                                pl: 2,
                                mb: 3,
                                fontSize: { xs: "20px", md: "24px" },
                                ...styles.labelHeader
                            }}
                        >
                            2020 - Coke Export Aggregation
                        </Typography>

                        <Typography
                            sx={{
                                fontSize: { xs: "14px", md: "16px" },
                                lineHeight: 1.65,
                                ...styles.description
                            }}
                        >
                            Aggregated BF grade coke from 12 coke oven plants across the East coast,
                            and successfully executed 5 shipments, delivered to Kakinada & Paradip port.
                        </Typography>
                    </FadeOnScroll>
                </Box>


                {/* =====================================================
              2021 BLOCK (with icon on the right)
        ===================================================== */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        justifyContent: "space-between",
                        alignItems: { xs: "flex-start", md: "center" },
                        gap: { xs: 3, md: 0 },
                        width: "100%",
                    }}
                >
                    {/* Text Block */}
                    <Box sx={{ flex: 1, }}>
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
                                2021 - Northeast Mining Platform
                            </Typography>

                            <Typography
                                sx={{
                                    fontSize: { xs: "14px", md: "16px" },
                                    lineHeight: 1.65,
                                    ...styles.description
                                }}
                            >
                                Under Mr. Avanti Pagaria, the group commenced on-ground mining operations
                                in Nagaland and Meghalaya, supplying coal across East, North, and Central
                                India with enhanced security, traceability, and turnaround efficiency.
                            </Typography>
                        </FadeOnScroll>
                    </Box>

                    {/* Icon (Right side) */}
                    <Box
                        component="img"
                        src={Icon2021}
                        alt="Mining Icon"
                        sx={{
                            width: { xs: "200px", md: "400px" },
                            mt: { xs: 2, md: 0 },
                            position: "absolute",
                            bottom: "-10%",
                            right: "0"
                        }}
                    />
                </Box>

            </Box>
        </Box>
    );
};

export default Section11;
