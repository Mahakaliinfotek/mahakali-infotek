import { Box, Typography, Button } from "@mui/material";
import hero from "../../assets/images/sustainability/sushero.png";

export default function SustainabilityHero() {
    return (
        <Box
            sx={{
                width: "100%",
                maxWidth: "1400px",
                mx: "auto",
                px: { xs: 2, md: 4 },
                py: { xs: 6, md: 10 },
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                gap: { xs: 4, md: 8 }
            }}
        >
            {/* LEFT CONTENT */}
            <Box
                sx={{
                    flex: 1,
                    maxWidth: { md: "50%" }
                }}
            >
                <Typography
                    sx={{
                        fontSize: { xs: "32px", md: "48px" },
                        fontWeight: 800,
                        lineHeight: 1.2,
                        mb: 2
                    }}
                >
                    Sustainability at <br /> Mahakali
                </Typography>

                <Typography
                    sx={{
                        fontSize: { xs: "15px", md: "18px" },
                        lineHeight: 1.6,
                        color: "#555",
                        mb: 4
                    }}
                >
                    We build essential services for industry with a clear duty to the environment and society, improving air quality, safeguarding water, and restoring the landscapes that anchor our communities. Our approach is simple. Prevent what can be prevented, reduce what cannot be avoided today, and restore what needs time. We think tall and stay rooted in practical action that works on the ground.
                </Typography>

                {/* BUTTONS */}
                {/* <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" },
                        gap: 2
                    }}
                >
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: "#107C41",
                            textTransform: "none",
                            fontWeight: 600,
                            px: 3,
                            py: 1.2,
                            fontSize: "16px",
                            borderRadius: "8px"
                        }}
                    >
                        Download Sustainability Policy
                    </Button>

                    <Button
                        variant="outlined"
                        sx={{
                            textTransform: "none",
                            fontWeight: 600,
                            px: 3,
                            py: 1.2,
                            fontSize: "16px",
                            borderRadius: "8px",
                            borderColor: "#107C41",
                            color: "#107C41"
                        }}
                    >
                        See Impact Metrics
                    </Button>
                </Box> */}
            </Box>

            {/* RIGHT SIDE IMAGE GRID */}
            <Box
                sx={{
                    flex: 1,
                    maxWidth: { md: "50%" },
                    width: "100%"
                }}
            >
                <Box
                    component="img"
                    src={hero}
                    sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "16px"
                    }}
                />
            </Box>
        </Box>
    );
}
