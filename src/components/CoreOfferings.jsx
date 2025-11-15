import React from "react";
import { Box, Typography, Paper } from "@mui/material";

const offerings = [
    {
        title: "Web & Product Engineering",
        img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=60",
        points: [
            "Design and development for corporate sites, portals, and headless CMS",
            "E-commerce architecture, catalog, search, payments, order flows",
            "Performance, accessibility, SEO foundations, analytics setup"
        ]
    },
    {
        title: "AI Agents & Automation",
        img: "https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?auto=format&fit=crop&w=900&q=60",
        points: [
            "Chat and voice agents for support, sales, and internal ops",
            "Process automation for onboarding, approvals, invoices, alerts",
            "Retrieval-augmented search over docs and data, audit-ready logs"
        ]
    },
    {
        title: "Data & Integrations",
        img: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=900&q=60",
        points: [
            "APIs and webhooks, CRM and ERP connectors, payment and logistics integrations",
            "ETL pipelines for reports and dashboards, near real-time notifications"
        ]
    },
    {
        title: "Cloud, DevOps & Security",
        img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=60",
        points: [
            "CI/CD, observability, uptime SLAs, cost and performance tuning",
            "Role-based access, data privacy and compliance by design"
        ]
    }
];

export default function CoreOfferings() {
    return (
        <Box
            sx={{
                width: "100%",
                background: "#ffffff",
                py: { xs: 6, md: 2 },
                px: { xs: 3, md: 6 },
                // borderRadius: "20px"
            }}
        >
            {/* Title */}
            <Typography
                sx={{
                    textAlign: "center",
                    fontSize: { xs: "26px", md: "34px" },
                    fontWeight: 700,
                    mb: { xs: 4, md: 6 },
                    fontFamily: "Inter, sans-serif",
                    color: "#0d1b2a"
                }}
            >
                Core Offerings
            </Typography>

            {/* Card Wrapper */}
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: 3,
                    mx: "auto",
                    maxWidth: "1400px"
                }}
            >
                {offerings.map((item, i) => (
                    <Paper
                        key={i}
                        elevation={1}
                        sx={{
                            width: { xs: "100%", sm: "48%", md: "22%" },
                            borderRadius: "16px",
                            p: 2.2,
                            background: "#fff",
                            boxShadow: "0 4px 18px rgba(0,0,0,0.06)"
                        }}
                    >
                        {/* Image */}
                        <Box
                            component="img"
                            src={item.img}
                            alt={item.title}
                            sx={{
                                width: "100%",
                                height: "100px",
                                objectFit: "cover",
                                borderRadius: "10px",
                                mb: 2
                            }}
                        />

                        {/* Title */}
                        <Typography
                            sx={{
                                fontSize: "16px",
                                fontWeight: 700,
                                mb: 1,
                                color: "#0d1b2a",
                                fontFamily: "Inter, sans-serif"
                            }}
                        >
                            {item.title}
                        </Typography>

                        {/* Bullet Points */}
                        <Box sx={{ mb: 2 }}>
                            {item.points.map((point, idx) => (
                                <Box
                                    key={idx}
                                    sx={{
                                        display: "flex",
                                        alignItems: "flex-start",
                                        mb: 1,
                                        gap: 1
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: 7,
                                            height: 5,
                                            bgcolor: "#0d1b2a",
                                            borderRadius: "50%",
                                            mt: "7px"
                                        }}
                                    />
                                    <Typography
                                        sx={{
                                            fontSize: "13px",
                                            color: "#4a4f52",
                                            lineHeight: 1.5,
                                            fontFamily: "Inter, sans-serif"
                                        }}
                                    >
                                        {point}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </Paper>
                ))}
            </Box>
        </Box>
    );
}
