import { Box, Typography, Paper } from "@mui/material";

export default function ImpactAtAGlance() {
    const stats = [
        {
            value: "1.2M+",
            label: "Trees Planted Since 2020",
        },
        {
            value: "28%",
            label: "Average Particulate Reduction (YoY)",
        },
        {
            value: "500M",
            label: "Litres of Rainwater Harvested Annually",
        },
        {
            value: "95%",
            label: "Sites with Covered Stacks",
        },
    ];

    return (
        <Box
            sx={{
                width: "100%",
                maxWidth: "1400px",
                mx: "auto",
                px: { xs: 2, md: 4 },
                py: { xs: 6, md: 2 },
                textAlign: "center",
            }}
        >
            {/* Heading */}
            <Typography
                sx={{
                    fontSize: { xs: "28px", md: "36px" },
                    fontWeight: 700,
                    mb: 1,
                }}
            >
                Impact at a glance
            </Typography>

            {/* Subtitle */}
            <Typography
                sx={{
                    fontSize: { xs: "14px", md: "16px" },
                    color: "#555",
                    maxWidth: "700px",
                    mx: "auto",
                    mb: { xs: 4, md: 6 },
                    lineHeight: 1.6,
                }}
            >
                We believe in transparent, measurable progress. Here’s a snapshot of our key
                sustainability metrics.
            </Typography>

            {/* Stats Cards */}
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: 3,
                }}
            >
                {stats.map((item, index) => (
                    <Paper
                        key={index}
                        elevation={0}
                        sx={{
                            width: { xs: "100%", sm: "47%", md: "23%" },
                            p: 3,
                            borderRadius: "12px",
                            border: "1px solid #e6e6e6",
                            textAlign: "center",
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: "32px",
                                fontWeight: 700,
                                color: "#0B6D3A",
                                mb: 0.5,
                            }}
                        >
                            {item.value}
                        </Typography>

                        <Typography
                            sx={{
                                fontSize: "14px",
                                color: "#555",
                                lineHeight: 1.4,
                            }}
                        >
                            {item.label}
                        </Typography>
                    </Paper>
                ))}
            </Box>
        </Box>
    );
}
