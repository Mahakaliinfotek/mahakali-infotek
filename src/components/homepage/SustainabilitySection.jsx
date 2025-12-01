import { Box, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// Replace with your images
import imgMain from "../../assets/images/sustainability/sus1.png";
import imgSmall1 from "../../assets/images/sustainability/sus2.png";
import imgSmall2 from "../../assets/images/sustainability/sus3.png";
import { useNavigate } from "react-router-dom";


export default function SustainabilitySection() {
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                width: "100%",
                py: { xs: 6, md: 8 },
                px: { xs: 2, md: 4 },
                display: "flex",
                justifyContent: "center",
            }}
        >
            {/* Outer Container with Border */}
            <Box
                sx={{
                    width: "100%",
                    maxWidth: 1400,
                    // border: "6px solid #0c6ea2",
                    background: "#044b63",
                    // borderRadius: "4px",
                    p: { xs: 3, md: 4 },
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column-reverse", md: "row" },
                        alignItems: "center",
                        gap: 4,
                    }}
                >
                    {/* LEFT TEXT SIDE */}
                    <Box sx={{ flex: 1, color: "#fff" }}>
                        <Typography
                            sx={{
                                fontSize: { xs: 22, md: 28 },
                                fontWeight: 700,
                                mb: 2,
                            }}
                        >
                            Sustainability at Mahakali
                        </Typography>

                        <Typography
                            sx={{
                                fontSize: 15,
                                lineHeight: 1.7,
                                opacity: 0.95,
                                mb: 3,
                            }}
                        >
                            We build essential services for industry with a clear duty to the
                            environment and society, improving air quality, safeguarding water,
                            and restoring the landscapes that anchor our communities. Our
                            approach is simple. Prevent what can be prevented, reduce what
                            cannot be avoided today, and restore what needs time. We think
                            tall and stay rooted in practical action that works on the
                            ground.
                        </Typography>

                        <Typography
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                                fontSize: 15,
                                cursor: "pointer",
                                fontWeight: 500,
                            }}
                            onClick={() => navigate('/sustainability')}
                        >
                            Click to Read More
                            <ArrowForwardIcon fontSize="small" />
                        </Typography>
                    </Box>

                    {/* RIGHT IMAGE GRID */}
                    <Box
                        sx={{
                            flex: 1,
                            display: "flex",
                            // gridTemplateColumns: "1fr 1fr",
                            // gridTemplateRows: "1fr 1fr",
                            // gap: 2,
                            justifyContent: "center",
                            alignItems: "center",

                        }}
                    >
                        <Box >


                            {/* Big Image (left side) */}
                            <Box
                                component="img"
                                src={imgMain}
                                sx={{
                                    // gridRow: "1 / 3",
                                    width: { xs: "130px", sm: "200px", md: "300px" },
                                    height: "100%",
                                    objectFit: "cover",
                                    transition: "transform 0.3s ease",
                                    "&:hover": {
                                        transform: "scale(1.05)",
                                    },
                                    // borderRadius: "18px",
                                }}
                            />
                        </Box>

                        <Box sx={{ width: { xs: "150px", md: "100%" } }}>


                            {/* Small Image 1 */}
                            <Box
                                component="img"
                                src={imgSmall1}
                                sx={{
                                    width: { xs: "130px", sm: "200px", md: "300px" },
                                    height: "100%",
                                    objectFit: "cover",
                                    transition: "transform 0.3s ease",
                                    "&:hover": {
                                        transform: "scale(1.05)",
                                    },
                                }}

                            />

                            {/* Small Image 2 */}
                            <Box
                                component="img"
                                src={imgSmall2}
                                sx={{
                                    width: { xs: "130px", sm: "200px", md: "300px" },
                                    height: "100%",
                                    objectFit: "cover",
                                    transition: "transform 0.3s ease",
                                    "&:hover": {
                                        transform: "scale(1.05)",
                                    },
                                }}
                            />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
