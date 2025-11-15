import React from "react";
import { Box, Typography, Button } from "@mui/material";

export default function HeroCard() {
    return (
        <Box
            sx={{
                width: "100%",
                mx: "auto",
                borderRadius: "24px",
                overflow: "hidden",
                position: "relative",
                height: { xs: 430, md: 480 },
                backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA7k_ODi8PykSP7ywY2F7A-FnAardv_Ro6Wa7AN5g6p6MBD-j7FAZYs0QU6LFwZNygnFqN0HDg-bQB8Xcs3Kq49hOUCRmmpU2Gdn5fZtoIQp-GumLfXooztjQWJRuBmE6Qg_lm9goyZM2LR5FRKt8CWtWVYl2otaQ8N1hPNGyBzmoKc1ukHcF1qYSjppItC2qOQM8V0wwp_la0Qa32hBTru5aAfZz2efVp6opaVPnWSzwdLBSsisDgoce4Es97jNNe1SGhexiFTrzY')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                alignItems: "flex-end",
                p: { xs: 3, md: 4 },
            }}
        >
            {/* Gradient Overlay */}
            <Box
                sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                        "linear-gradient(to bottom, rgba(0,0,0,0) 20%, rgba(0,0,0,0.7) 100%)",

                }}
            />

            {/* CONTENT */}
            <Box sx={{ color: "#fff", position: "relative", zIndex: 2 }}>
                {/* Title */}
                <Typography
                    sx={{
                        fontSize: { xs: "28px", md: "34px" },
                        fontWeight: 800,
                        mb: 1,
                        fontFamily: "Inter, sans-serif",
                    }}
                >
                    Mahakali Infotek
                </Typography>

                {/* Subtitle */}
                <Typography
                    sx={{
                        fontSize: { xs: "15px", md: "17px" },
                        lineHeight: 1.6,
                        maxWidth: "420px",
                        mb: 3,
                        color: "rgba(255,255,255,0.9)",
                    }}
                >
                    Building the future of software, one line of code at a time.
                </Typography>

                {/* Buttons */}
                <Box sx={{ display: "flex", gap: 2 }}>
                    <Button
                        variant="contained"
                        sx={{
                            background: "#3B68FF",
                            color: "#fff",
                            px: 3,
                            py: 1.2,
                            fontSize: "14px",
                            borderRadius: "10px",
                            textTransform: "none",
                            fontWeight: 600,
                            "&:hover": { background: "#3057e6" },
                        }}
                    >
                        Get In Touch
                    </Button>

                    <Button
                        variant="contained"
                        sx={{
                            background: "rgba(255,255,255,0.2)",
                            backdropFilter: "blur(6px)",
                            color: "#fff",
                            px: 3,
                            py: 1.2,
                            fontSize: "14px",
                            borderRadius: "10px",
                            textTransform: "none",
                            fontWeight: 600,
                        }}
                    >
                        Our Services
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}
