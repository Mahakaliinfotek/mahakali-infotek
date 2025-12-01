import { Box, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// Replace this with your background + inside image
import historyBg from "../../assets/images/history/historybg.webp";
import historyImg from "../../assets/images/history/history.webp";
import { useNavigate } from "react-router-dom";

export default function HistorySection() {
    const navigate = useNavigate();
    return (
        <Box
            sx={{
                position: "relative",
                width: "100%",
                backgroundImage: `url(${historyBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                py: { xs: 6, md: 10 },
                px: { xs: 2, md: 4 },
                textAlign: "center",
                color: "#fff",
            }}
        >
            {/* Overlay Layer */}
            <Box
                sx={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(0,0,0,0.45)",      // solid transparent overlay
                    // OR gradient overlay:
                    // background: "linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.1) 100%)",
                    zIndex: 1,
                }}
            />

            <Box sx={{ position: "relative", zIndex: 2 }}>

                {/* Section Header */}
                <Typography
                    sx={{
                        fontSize: { xs: 26, md: 34 },
                        fontWeight: 700,
                    }}
                >
                    Our History
                </Typography>

                <Typography
                    sx={{
                        mt: 1,
                        mb: 5,
                        fontSize: { xs: 15, md: 17 },
                        opacity: 0.9,
                    }}
                >
                    A journey built on vision, values, and continuous evolution.
                </Typography>

                {/* Content Box */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        justifyContent: "center",
                        alignItems: "stretch",
                        width: "100%",
                        maxWidth: 1000,
                        mx: "auto",
                        background: "rgba(0,0,0,0.0)",

                    }}
                >
                    {/* LEFT IMAGE */}
                    <Box
                        sx={{
                            flex: 1,
                            height: { xs: 250, md: 360 },
                            backgroundImage: `url(${historyImg})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            transition: "transform 0.3s ease",
                            "&:hover": {
                                transform: "scale(1.05)",
                            },
                        }}
                    />

                    {/* RIGHT TEXT BOX */}
                    <Box
                        sx={{
                            flex: 1,
                            background: "#00445B",
                            px: { xs: 3, md: 5 },
                            py: { xs: 3, md: 4 },
                            textAlign: "center",
                            color: "#fff",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            flexDirection: "column",
                            transition: "transform 0.3s ease",
                            "&:hover": {
                                transform: "scale(1.05)",
                            },
                        }}
                    // border={1}
                    >
                        <Typography
                            sx={{
                                fontWeight: 700,
                                fontSize: 20,
                                mb: 1.5,
                                maxWidth: "300px",

                            }}
                        >
                            From One Desk in Kolkata to a Global Resource Network
                        </Typography>

                        <Typography
                            sx={{
                                fontSize: 15,
                                lineHeight: 1.6,
                                opacity: 0.95,
                                textAlign: "left"
                            }}
                        >
                            What began in <b>1984</b> as a humble trading firm is now a diversified conglomerate operating across mining, logistics, imports, exports, and digital commerce.For <b>four decades</b>, we’ve expanded from India’s eastern coal belt to global mineral hubs, combining traditional expertise with next-gen platforms like Indiazona.


                        </Typography>

                        {/* Click to Read More */}
                        <Typography
                            sx={{
                                mt: 3,
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                                fontSize: 18,
                                // fontWeight: 500,
                                cursor: "pointer",
                                transition: "transform 0.3s ease",
                                "&:hover": {
                                    transform: "scale(1.15)",
                                },
                            }}

                            onClick={() => navigate("/about-us")}
                        >
                            Discover Our Journey
                            <ArrowForwardIcon fontSize="small" />
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
