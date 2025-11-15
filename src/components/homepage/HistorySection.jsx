import { Box, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// Replace this with your background + inside image
import historyBg from "../../assets/images/history/historybg.png";
import historyImg from "../../assets/images/history/history.png";
import { useNavigate } from "react-router-dom";

export default function HistorySection() {
    const navigate=useNavigate();
    return (
        <Box
            sx={{
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
                    maxWidth: 1200,
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
                    }}
                />

                {/* RIGHT TEXT BOX */}
                <Box
                    sx={{
                        flex: 1,
                        background: "#00445B",
                        p: { xs: 3, md: 4 },
                        textAlign: "left",
                        color: "#fff",
                    }}
                >
                    <Typography
                        sx={{
                            fontWeight: 700,
                            fontSize: 20,
                            mb: 1.5,
                        }}
                    >
                        About Mahakali Udyog Pvt. Ltd.
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: 15,
                            lineHeight: 1.6,
                            opacity: 0.95,
                        }}
                    >
                        In the year 1984, Sri Ranjit Singh Pagaria, founded this Business
                        with a table space office at Kolkata and the journey started
                        thereof. The journey of a thousand miles starts with a single stride,
                        and all remarkable stories have an unassuming starting, a solid
                        center, and an animating finale. The history of Mahakali Udyog began
                        3 decades back, as a Coal Trading Company. The little stride taken by
                        my son Mr. Rajesh Pagaria by implementing Imported Coal trading….
                    </Typography>

                    {/* Click to Read More */}
                    <Typography
                        sx={{
                            mt: 3,
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            fontSize: 15,
                            fontWeight: 500,
                            cursor: "pointer",
                        }}

                        onClick={() => navigate("/about-us")}
                    >
                        Click to Read More
                        <ArrowForwardIcon fontSize="small" />
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}
