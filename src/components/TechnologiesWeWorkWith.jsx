import React from "react";
import { Box, Typography } from "@mui/material";

export default function TechnologiesWeWorkWith() {
    return (
        <Box
            sx={{
                width: "100%",
                py: { xs: 6, md: 8 },
                px: { xs: 3, md: 6 },
                background: "#fff",
            }}
        >
            {/* Section Title */}
            <Typography
                sx={{
                    fontSize: { xs: "26px", md: "34px" },
                    fontWeight: 700,
                    textAlign: "center",
                    mb: 3,
                    color: "#0d1b2a",
                    fontFamily: "Inter, sans-serif"
                }}
            >
                Technologies We Work With
            </Typography>

            {/* Description */}
            <Typography
                sx={{
                    textAlign: "center",
                    fontSize: { xs: "15px", md: "18px" },
                    lineHeight: 1.7,
                    color: "#4a4f52",
                    maxWidth: "900px",
                    mx: "auto",
                    fontFamily: "Inter, sans-serif"
                }}
            >
                React and modern frontend frameworks, Node and Python services,
                FastAPI and Express APIs, headless CMS, relational and NoSQL data
                stores, cloud platforms with CI/CD, observability stacks, and LLM
                tooling for agents and retrieval.
            </Typography>
        </Box>
    );
}
