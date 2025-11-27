import { Box, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// Replace these with your actual images
import img1 from "../../assets/images/business/muplbg.png";
import img2 from "../../assets/images/business/otobg.png";
import img3 from "../../assets/images/business/izbg.png";
import img4 from "../../assets/images/business/mibg.png";
import img5 from "../../assets/images/business/mibg2.png";
import img6 from "../../assets/images/business/rsebg.png";
import img7 from "../../assets/images/business/mebg.png";
import img8 from "../../assets/images/business/kpbg.png";
import img9 from "../../assets/images/business/munbg.png";


// Replace these with real logos
import logo1 from "../../assets/images/business/mupl.png";
import logo2 from "../../assets/images/business/oto.png";
import logo3 from "../../assets/images/business/iz.png";
import logo4 from "../../assets/images/business/mi.png";
import logo5 from "../../assets/images/business/minter.png";
import logo6 from "../../assets/images/business/rse.png";
import logo7 from "../../assets/images/business/me.png";
import logo8 from "../../assets/images/business/kp.png";
import logo9 from "../../assets/images/business/mun.png";


export default function BusinessesSection() {
    const businesses = [
        {
            logo: logo1,
            bg: img1,
            text: "Four decades of trusted coal and coke solutions since 1984.",
            link: "https://www.mahakaliudyog.com/",
        },
        {
            logo: logo2,
            bg: img2,
            text: "End-to-end bulk logistics and stevedoring experts across India’s East Coast.",
            link: "https://otovizag.com/",
        },
        {
            logo: logo3,
            bg: img3,
            text: "Where buyers discover more and sellers grow faster.",
            link: "https://indiazona.in",
        },
        {
            logo: logo4,
            bg: img4,
            text: "Building reliable digital systems.",
            link: "https://mahakaliinfotek.com/",
        },
        {
            logo: logo5,
            bg: img5,
            text: "Reliable coke supply with precise screening for steel industries.",
            link: "https://mahakaliinternational.com/",
        },
        {
            logo: logo6,
            bg: img6,
            text: "Powering industries with reliable coal solutions since 2003.",
            link: "https://ransanenterprises.com/",
        },
        {
            logo: logo9,
            bg: img9,
            text: "Reliable limestone and minerals supply from Oman.",
            link: "https://munminmet.om/",
        },
        {
            logo: logo8,
            bg: img8,
            text: "Reliable coal supply from Indonesia with consistent quality.",
            link: "https://krishnaresource.com/" ,
        },
        {
            logo: logo7,
            bg: img7,
            text: "Turning land into productive and sustainable assets.",
            link: "https://mahakaliestate.com/",
        },
        
    ];

    return (
        <Box id="businesses-section"  sx={{ width: "100%", py: 6, px: { xs: 2, md: 4 } }} >
            {/* Header */}
            <Typography
                sx={{
                    fontSize: { xs: 24, md: 32 },
                    fontWeight: 700,
                    color: "#005875",
                    fontFamily: "IBM Plex Sans",
                }}
            >
                Our Businesses
            </Typography>
            <Typography
                sx={{
                    mt: 1,
                    mb: 4,
                    fontSize: 16,
                    // color: "#555",
                    // maxWidth: 700,
                    fontFamily: "Inter",
                }}
            >
                Discover the diverse ventures we operate, each built with quality, innovation, & customer commitment at its core.
            </Typography>

            {/* Grid */}
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "1fr",
                        sm: "repeat(2, 1fr)",
                        md: "repeat(3, 1fr)",
                    },
                    gap: 2,
                }}
            >
                {businesses.map((item, index) => (
                    <Box
                        key={index}
                        sx={{
                            height: 250,
                            position: "relative",
                            overflow: "hidden",
                            borderRadius: 1,
                            cursor: "pointer",
                            transition: "0.3s",
                            "&:hover": {
                                transform: "scale(1.02)",
                                boxShadow: "0px 4px 12px rgba(0,0,0,0.25)",
                            },
                        }}
                        onClick={() => window.open(item.link, "_blank")}
                    >
                        {/* Background Image */}
                        <Box
                            sx={{
                                position: "absolute",
                                width: "100%",
                                height: "100%",
                                backgroundImage: `url(${item.bg})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                               
                            }}
                        />

                        {/* Gradient Overlay */}
                        <Box
                            sx={{
                                position: "absolute",
                                width: "100%",
                                height: "100%",
                            }}
                        />

                        {/* Content */}
                        <Box
                            sx={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                width: "85%",
                                textAlign: "center",
                                color: "#fff",
                            }}
                        >
                            {/* Logo */}
                            <Box
                                component="img"
                                src={item.logo}
                                sx={{
                                    width: 150,
                                    mb: 2,
                                    // px: 2,
                                    // py: 1,
                                    borderRadius: "12px",
                                    // background: "#fff",
                                    objectFit: "contain",
                                }}
                            />

                            {/* Text */}
                            <Typography sx={{ fontSize: 15, fontWeight: 500 }}>
                                {item.text}
                            </Typography>

                            {/* Read More */}
                            {/* <Typography
                                sx={{
                                    mt: 1,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: 1,
                                    fontSize: 14,
                                }}
                            >
                                Click to Read More
                                <ArrowForwardIcon sx={{ fontSize: 16 }} />
                            </Typography> */}
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}
