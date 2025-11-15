import { Box, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// Your two images
import bgImage from "../../assets/images/mediaCSR/bg.webp";
import mediaImg from "../../assets/images/mediaCSR/main.webp";

export default function MediaCSRSection() {
    return (
        <Box
            sx={{
                width: "100%",
                minHeight: {xs:"300px",sm:"300px",md:"450px"},
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                py: { xs: 6, md: 10 },
                px: { xs: 2, md: 4 },
                textAlign: "center",
                color: "#fff",
                position: "relative",
                mb:"100px"
            }}
        >
            {/* Header */}
            <Typography
                sx={{
                    fontSize: { xs: 26, md: 32 },
                    fontWeight: 700,
                    mb: 1,
                }}
            >
                Media & CSR
            </Typography>

            <Typography
                sx={{
                    fontSize: { xs: 15, md: 17 },
                    mb: 3,
                }}
            >
                Engaging audiences with purposeful communication that uplifts society.
            </Typography>

            {/* MAIN IMAGE BELOW SECTION – CENTERED */}
            <Box
                sx={{
                    position: "absolute",
                    bottom: "-80px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: { xs: "90%", sm: "70%", md: "55%" },
                    borderRadius: 2,
                    overflow: "hidden",
                    // boxShadow: "0px 6px 20px rgba(0,0,0,0.35)",
                    // background: "#000",
                }}
            >
                {/* Main Image */}
                <Box
                    sx={{
                        height: { xs: 220, md: 350 },
                        width:"100%",
                        objectFit: "contain",
                    }}
                    component="img"
                    src={mediaImg}
                >
                </Box>
            </Box>
        </Box>
    );
}
