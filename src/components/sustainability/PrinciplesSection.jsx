import { Box, Typography, Paper } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import GroupsIcon from "@mui/icons-material/Groups";

export default function PrinciplesSection() {
    const data = [
        {
            icon: <CheckCircleOutlineIcon sx={{ fontSize: 36, color: "#0B6D3A" }} />,
            title: "Do the basics right every day and make them non-negotiable",
            subtitle: "Example: Real-time air quality monitoring at all sites.",
        },
        {
            icon: <TrendingUpIcon sx={{ fontSize: 36, color: "#0B6D3A" }} />,
            title: "Choose simple solutions that scale across sites",
            subtitle: "Example: Standardized rainwater harvesting systems deployed company-wide.",
        },
        {
            icon: <TrackChangesIcon sx={{ fontSize: 36, color: "#0B6D3A" }} />,
            title: "Measure what matters and improve continuously",
            subtitle: "Example: Monthly tracking of sapling survival rates to adjust care.",
        },
        {
            icon: <GroupsIcon sx={{ fontSize: 36, color: "#0B6D3A" }} />,
            title: "Care for our communities and operating regions first",
            subtitle: "Example: Prioritizing local hiring for environmental projects.",
        },
    ];

    return (
        <Box
            sx={{
                width: "100%",
                maxWidth: "1400px",
                mx: "auto",
                px: { xs: 2, md: 4 },
                py: { xs: 2, md: 0 },
                textAlign: "center",
            }}
        >
            {/* Heading */}
            <Typography
                sx={{
                    fontSize: { xs: "28px", md: "36px" },
                    fontWeight: 700,
                    mb: { xs: 4, md: 6 },
                }}
            >
                Our Principles
            </Typography>

            {/* Cards */}
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: 3,
                }}
            >
                {data.map((item, index) => (
                    <Paper
                        key={index}
                        elevation={0}
                        sx={{
                            width: { xs: "100%", sm: "47%", md: "23%" },
                            p: 3,
                            borderRadius: "12px",
                            border: "1px solid #e6e6e6",
                            textAlign: "left",
                        }}
                    >
                        {/* Icon */}
                        <Box sx={{ mb: 1 }}>{item.icon}</Box>

                        {/* Title */}
                        <Typography
                            sx={{
                                fontWeight: 700,
                                fontSize: "16px",
                                mb: 1,
                                lineHeight: 1.4,
                            }}
                        >
                            {item.title}
                        </Typography>

                        {/* Subtitle */}
                        <Typography
                            sx={{
                                fontSize: "14px",
                                color: "#555",
                                lineHeight: 1.5,
                            }}
                        >
                            {item.subtitle}
                        </Typography>
                    </Paper>
                ))}
            </Box>
        </Box>
    );
}
