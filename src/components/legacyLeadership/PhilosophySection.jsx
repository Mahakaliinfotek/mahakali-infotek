import { Box, Typography } from "@mui/material";

export default function PhilosophySection() {
    return (
        <Box
            sx={{
                width: "100%",
                px: { xs: 2, md: 6 },
                paddingBottom:5,
                bgcolor: "#F8FAF7",
                textAlign: "center",
            }}
        >
            {/* ------------------ Title ------------------ */}
            <Typography
                sx={{
                    fontSize: { xs: "32px", md: "40px" },
                    fontWeight: 800,
                    mb: 2,
                    color: "#1B1B1B",
                }}
            >
                Our Philosophy
            </Typography>

            {/* ------------------ Subtitle ------------------ */}
            <Typography
                sx={{
                    fontSize: "16px",
                    maxWidth: "800px",
                    mx: "auto",
                    mb: 6,
                    lineHeight: 1.6,
                    color: "#4B4B4B",
                }}
            >
                We believe in total ownership and accountability. Every team member, regardless of their role, has a voice that matters and the authority to make a difference. We don't just delegate tasks; we entrust responsibility, creating an environment where initiative is celebrated and innovation thrives.
                Here, there are no hierarchies of ideas only the merit of thought. We've cultivated a level playing field where a suggestion from a workshop technician carries the same weight as one from a senior manager. The best ideas win, and we empower our teams to see those ideas through from conception to implementation.
            </Typography>

            {/* ------------------ Quote Cards Wrapper ------------------ */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    gap: 3,
                    justifyContent: "center",
                }}
            >
                {/* ------------------ Card 1 ------------------ */}
                <Box
                    sx={{
                        flex: 1,
                        p: 4,
                        borderRadius: "12px",
                        border: "1px solid #E0E8E3",
                        bgcolor: "white",
                        textAlign: "left",
                        minWidth: 0,
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: "36px",
                            color: "#008037",
                            fontWeight: 700,
                            mb: 2,
                        }}
                    >
                        ❝
                    </Typography>

                    <Typography sx={{ mb: 2, color: "#333", lineHeight: 1.6 }}>
                        "This is a place where you can be yourself. The support is genuine,
                        and it comes from the top down."
                    </Typography>

                    <Typography sx={{ fontWeight: 700, fontSize: "14px" }}>
                        Anika S. – Project Manager
                    </Typography>
                </Box>

                {/* ------------------ Card 2 ------------------ */}
                <Box
                    sx={{
                        flex: 1,
                        p: 4,
                        borderRadius: "12px",
                        border: "1px solid #E0E8E3",
                        bgcolor: "white",
                        textAlign: "left",
                        minWidth: 0,
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: "36px",
                            color: "#008037",
                            fontWeight: 700,
                            mb: 2,
                        }}
                    >
                        ❝
                    </Typography>

                    <Typography sx={{ mb: 2, color: "#333", lineHeight: 1.6 }}>
                        "I started in an entry-level role and have been given countless
                        opportunities to grow. The company invests in you."
                    </Typography>

                    <Typography sx={{ fontWeight: 700, fontSize: "14px" }}>
                        Rohan V. – Senior Engineer
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}
