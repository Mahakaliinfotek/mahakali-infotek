import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import SecurityIcon from "@mui/icons-material/Security";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import LayersIcon from "@mui/icons-material/Layers";

const features = [
    {
        icon: <SecurityIcon sx={{ fontSize: 40, color: "#3B68FF" }} />,
        title: "Security-First Approach",
        desc: "We integrate security into every stage of the development process, ensuring your data and applications are protected."
    },
    {
        icon: <SyncAltIcon sx={{ fontSize: 40, color: "#3B68FF" }} />,
        title: "Agile & Transparent Delivery",
        desc: "Our agile methodology ensures you are always in the loop, with predictable timelines and transparent communication."
    },
    {
        icon: <LayersIcon sx={{ fontSize: 40, color: "#3B68FF" }} />,
        title: "Future-Proof Architecture",
        desc: "We design scalable and maintainable systems that grow with your business and adapt to new challenges."
    }
];

export default function WhatMakesUsDifferent() {
    return (
        <Box
            sx={{
                width: "100%",
                background: "#F4F6F9",
                py: { xs: 6, md: 8 },
                px: { xs: 3, md: 6 }
            }}
        >
            {/* Section Title */}
            <Typography
                sx={{
                    textAlign: "center",
                    fontSize: { xs: "26px", md: "34px" },
                    fontWeight: 700,
                    mb: 2,
                    fontFamily: "Inter, sans-serif"
                }}
            >
                What Makes Us Different
            </Typography>

            {/* Subtext */}
            <Typography
                sx={{
                    textAlign: "center",
                    fontSize: { xs: "15px", md: "17px" },
                    color: "#555",
                    maxWidth: "650px",
                    mx: "auto",
                    mb: { xs: 4, md: 6 },
                    lineHeight: 1.6,
                    fontFamily: "Inter, sans-serif"
                }}
            >
                Our commitment to excellence and innovation sets us apart. We focus on delivering results that matter to your business.
            </Typography>

            {/* Card Wrapper */}
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: 3,
                    maxWidth: "1400px",
                    mx: "auto"
                }}
            >
                {features.map((item, index) => (
                    <Paper
                        key={index}
                        elevation={0}
                        sx={{
                            width: { xs: "100%", sm: "80%", md: "30%" },
                            textAlign: "center",
                            p: { xs: 3, md: 4 },
                            borderRadius: "14px",
                            background: "#fff",
                            boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                        }}
                    >
                        {/* Icon */}
                        <Box sx={{ mb: 2 }}>{item.icon}</Box>

                        {/* Title */}
                        <Typography
                            sx={{
                                fontSize: "18px",
                                fontWeight: 700,
                                mb: 1,
                                fontFamily: "Inter, sans-serif"
                            }}
                        >
                            {item.title}
                        </Typography>

                        {/* Description */}
                        <Typography
                            sx={{
                                fontSize: "14px",
                                color: "#555",
                                lineHeight: 1.6,
                                fontFamily: "Inter, sans-serif"
                            }}
                        >
                            {item.desc}
                        </Typography>
                    </Paper>
                ))}
            </Box>
        </Box>
    );
}
