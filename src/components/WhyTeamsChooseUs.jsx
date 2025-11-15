import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import SecurityIcon from "@mui/icons-material/Security";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import HubIcon from "@mui/icons-material/Hub";
import SpeedIcon from "@mui/icons-material/Speed";

const points = [
    {
        icon: <VerifiedIcon sx={{ fontSize: 38, color: "#3B68FF" }} />,
        title: "Ownership Mindset",
        desc: "We commit to outcomes in live environments with clear SLAs, real observability, incident playbooks, and zero-downtime releases."
    },
    {
        icon: <AccountTreeIcon sx={{ fontSize: 38, color: "#3B68FF" }} />,
        title: "Architecture Built for Change",
        desc: "Modular, API-first, headless builds that scale cleanly, integrate fast, and keep you vendor-flexible."
    },
    {
        icon: <SecurityIcon sx={{ fontSize: 38, color: "#3B68FF" }} />,
        title: "Security & Compliance by Design",
        desc: "Role-based access, encryption in transit and at rest, audit trails, data residency options, and privacy-aware logging."
    },
    {
        icon: <SmartToyIcon sx={{ fontSize: 38, color: "#3B68FF" }} />,
        title: "AI with Governance",
        desc: "Agents and automations tied to measurable KPIs, human-in-the-loop controls, safe fallbacks, and clear monitoring."
    },
    {
        icon: <HubIcon sx={{ fontSize: 38, color: "#3B68FF" }} />,
        title: "Integration Depth",
        desc: "An enterprise library of automations and connectors across payments, logistics, CRM, ERP, and communications, with real-time tracking and reconciliation."
    },
    {
        icon: <SpeedIcon sx={{ fontSize: 38, color: "#3B68FF" }} />,
        title: "Speed with Rigor",
        desc: "Design systems, reusable components, automated testing, and CI/CD that deliver fast launches without compromising reliability."
    }
];

export default function WhyTeamsChooseUs() {
    return (
        <Box
            sx={{
                width: "100%",
                background: "#fff",
                py: { xs: 6, md: 4 },
                px: { xs: 3, md: 6 }
            }}
        >
            {/* Section Title */}
            <Typography
                sx={{
                    textAlign: "center",
                    fontSize: { xs: "26px", md: "34px" },
                    fontWeight: 700,
                    mb: { xs: 4, md: 6 },
                    fontFamily: "Inter, sans-serif"
                }}
            >
                What Makes Us Different
            </Typography>

            {/* Cards Container */}
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
                {points.map((item, index) => (
                    <Paper
                        key={index}
                        elevation={0}
                        sx={{
                            width: { xs: "100%", sm: "48%", md: "30%" },
                            background: "#fff",
                            p: { xs: 3, md: 4 },
                            textAlign: "center",
                            borderRadius: "16px",
                            boxShadow: "0px 4px 20px rgba(0,0,0,0.06)"
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
                                color: "#0d1b2a",
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
