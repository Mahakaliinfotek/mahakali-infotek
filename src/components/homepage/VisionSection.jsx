import { Box, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import bgvs from "../../assets/images/bgvs.webp"

export default function VisionSection() {
    const cards = [
        {
            title: "Our Mission",
            text: "We strive to build enterprises rooted in fairness, innovation, efficiency, and uncompromising integrity – for our customers, partners, vendors, society, and the environment.",
        },
        {
            title: "Our Values & Ethics",
            text: "Our principles guide everything we do: taking ownership, acting with integrity, respecting everyone, embracing innovation, and promoting equality across all levels.",
        },
        {
            title: "From MD’s Desk",
            text: "A message of empowerment, accountability, and sustainable growth – highlighting how our people, partners, and customers shape our legacy of excellence.",
        },
    ];

    return (
        <Box
            sx={{
                width: "100%",
                position: "relative",
                backgroundImage: `url(${bgvs})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                py: { xs: 6, md: 10 },
                px: { xs: 2, md: 8 },
                textAlign: "center",
                color: "#fff",
                mt:2
            }}
        >
            {/* TOP TEXT */}
            <Typography
                sx={{
                    fontSize: { xs: 20, md: 28 },
                    fontWeight: 600,
                    maxWidth: 900,
                    mx: "auto",
                    lineHeight: 1.4,
                    mb: 1,
                }}
            >
                To grow our <strong>multinational conglomerate</strong> into a global force in
                commodities and services, synonymous with trust & commitment worldwide.
            </Typography>

            {/* <Typography
                sx={{
                    fontSize: 16,
                    opacity: 0.9,
                    mb: 4,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 1,
                    cursor: "pointer",
                }}
            >
                Click to Read More
                <ArrowForwardIcon fontSize="small" />
            </Typography> */}

            {/* THREE CARDS */}
            <Box
                sx={{
                    mt: 2,
                    display: "flex",
                    justifyContent: "center",
                    gap: { xs: 2, md: 4 },
                    flexWrap: "wrap",
                    // border:"2px solid red"
                }}
                
            >
                {cards.map((card, index) => (
                    <Box
                        key={index}
                        sx={{
                            width: { xs: "100%", sm: "80%", md: "30%" },
                            background: "#00445B",
                            padding: 6,
                            borderRadius: "0px 70px 0px 70px",
                            textAlign: "center",
                            color: "#fff",
                            boxShadow: "0px 6px 14px rgba(0,0,0,0.25)",
                        }}
                        
                    >
                        <Typography
                            sx={{
                                fontWeight: 700,
                                fontSize: 20,
                                mb: 1.5,
                            }}
                        >
                            {card.title}
                        </Typography>

                        <Typography
                            sx={{
                                fontSize: 15,
                                opacity: 0.95,
                                lineHeight: 1.5,
                            }}
                        >
                            {card.text}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}
