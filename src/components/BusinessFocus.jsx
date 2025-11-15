import React from "react";
import { Box, Typography } from "@mui/material";

export default function BusinessFocus() {
    return (
        <Box
            sx={{
                width: "100%",
                py: { xs: 6, md: 4 },
                px: { xs: 3, md: 6, lg: 10 },
                background: "#fff",
                fontFamily: "Inter, sans-serif",
            }}
        >
            {/* Title */}
            <Typography
                sx={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: { xs: "22px", md: "32px" },
                    fontWeight: 700,
                    color: "#0d1b2a",
                    mb: 2,
                }}
            >
                Our Business Focus
            </Typography>

            {/* Subtitle */}
            <Typography
                sx={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: { xs: "14px", md: "18px" },
                    lineHeight: 1.7,
                    // maxWidth: "900px",
                    color: "#4a5568",
                }}
            >
                Mahakali Infotek is the technology arm of the Mahakali Group. We design, build, and run digital systems that carry real business load. From high-traffic websites and headless commerce to AI agents and workflow automation, we focus on speed to value, reliability, and clear ownership in production..
            </Typography>
        </Box>
    );
}
