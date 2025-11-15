import { Box, Typography, Button } from "@mui/material";
import HandshakeIcon from '@mui/icons-material/Handshake';

export default function PartnerWithUs() {
    return (
        <Box
            sx={{
                width: "100%",
                maxWidth: "1400px",
                mx: "auto",
                px: { xs: 2, md: 4 },
                py: { xs: 6, md: 10 },
            }}
        >
            <Box
                sx={{
                    backgroundColor: "#E6F3EC",
                    borderRadius: "20px",
                    p: { xs: 3, md: 6 },
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: { xs: "flex-start", md: "center" },
                    gap: { xs: 4, md: 6 },
                }}
            >
                {/* LEFT SECTION */}
                <Box sx={{ flex: 1 }}>
                    <Typography
                        sx={{
                            fontSize: { xs: "28px", md: "34px" },
                            fontWeight: 700,
                            mb: 2,
                            color: "#1c1c1c",
                        }}
                    >
                        Partner with us on sustainability
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: { xs: "15px", md: "17px" },
                            color: "#444",
                            lineHeight: 1.6,
                            maxWidth: "520px",
                        }}
                    >
                        Whether you're a potential partner, a community member, or interested
                        in our sustainability journey, we'd love to hear from you. Reach out
                        to our team or request our latest report.
                    </Typography>

                    {/* BUTTONS */}
                    {/* <Box
                        sx={{
                            display: "flex",
                            flexDirection: { xs: "column", sm: "row" },
                            gap: 2,
                            mt: 4,
                        }}
                    >
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: "#0B6D3A",
                                textTransform: "none",
                                fontWeight: 600,
                                px: 3,
                                py: 1.2,
                                borderRadius: "8px",
                                fontSize: "16px",
                            }}
                        >
                            Contact Sustainability Team
                        </Button>

                        <Button
                            variant="outlined"
                            sx={{
                                textTransform: "none",
                                fontWeight: 600,
                                px: 3,
                                py: 1.2,
                                borderRadius: "8px",
                                borderColor: "#0B6D3A",
                                color: "#0B6D3A",
                                fontSize: "16px",
                            }}
                        >
                            Request Report
                        </Button>
                    </Box> */}
                </Box>

                {/* RIGHT SECTION — IMAGE / ICON */}
                <Box
                    sx={{
                        flex: 1,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <HandshakeIcon sx={{fontSize:"150px",color: "#0B6D3A",}} />
                    {/* <Box
                        component="img"
                        src="/assets/sustainability-partner.png" // <-- Replace with your image
                        alt="Sustainability Illustration"
                        sx={{
                            width: { xs: "80%", sm: "60%", md: "75%" },
                            maxWidth: "380px",
                            borderRadius: "16px",
                        }}
                    /> */}
                </Box>
            </Box>
        </Box>
    );
}
