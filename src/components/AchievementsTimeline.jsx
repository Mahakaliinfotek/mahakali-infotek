import React from "react";
import { Box, Typography } from "@mui/material";

const milestones = [
    {

        title: "Complete Web Stack for Indiazona",
        desc: "Built and operate the entire e-commerce web infrastructure powering Indiazona’s marketplace and seller ecosystem."
    },
    {

        title: "Mahakali Group Corporate Website",
        desc: "Designed and manage the Mahakali Group corporate website and its full content management systems."
    },
    {

        title: "AI Agents & Automation Deployment",
        desc: "Implemented AI agents and workflow automations across onboarding, service processes, and reporting pipelines."
    },
    {

        title: "CI/CD, Observability & Security Baselines",
        desc: "Established CI/CD pipelines, observability dashboards, and security standards for all group digital assets."
    }
];

export default function AchievementsTimeline() {
    return (
        <Box
            sx={{
                background: "#fff",
                width: "100%",
                py: { xs: 6, md: 2 },
                px: { xs: 3, md: 6, lg: 15 },
            }}
        >
            {/* TITLE */}
            <Typography
                sx={{
                    fontSize: { xs: "22px", md: "32px" },
                    fontWeight: 700,
                    mb: { xs: 4, md: 5 },
                    fontFamily: "Inter, sans-serif",
                    color: "#0d1b2a"
                }}
            >
                Achievements & Milestones
            </Typography>

            {/* TIMELINE CONTAINER */}
            <Box
                sx={{
                    // position: "relative",
                    // ml: 2,
                    // "&::before": {
                    //     content: '""',
                    //     position: "absolute",
                    //     left: "11px",
                    //     top: 0,
                    //     width: "2px",
                    //     height: "100%",
                    //     backgroundColor: "#e0e6f0"
                    // }
                }}
            >
                {milestones.map((item, i) => (
                    <Box key={i} sx={{ mb: 5, position: "relative" }}>
                        {/* DOT */}
                        <Box
                            sx={{
                                width: "14px",
                                height: "14px",
                                backgroundColor: "#3B68FF",
                                borderRadius: "50%",
                                position: "absolute",
                                left: "-4px",
                                top: "6px"
                            }}
                        />

                        {/* TEXT BLOCK */}
                        <Box sx={{ ml: 5 }}>
                            <Typography
                                sx={{
                                    fontSize: "16px",
                                    color: "#6a7280",
                                    fontFamily: "Inter, sans-serif"
                                }}
                            >
                                {item.year}
                            </Typography>

                            <Typography
                                sx={{
                                    fontSize: "18px",
                                    fontWeight: 700,
                                    mt: 0.5,
                                    mb: 0.5,
                                    color: "#0d1b2a",
                                    fontFamily: "Inter, sans-serif"
                                }}
                            >
                                {item.title}
                            </Typography>

                            <Typography
                                sx={{
                                    fontSize: "15px",
                                    color: "#4a4f52",
                                    lineHeight: 1.6,
                                    fontFamily: "Inter, sans-serif"
                                }}
                            >
                                {item.desc}
                            </Typography>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}
