import { Box } from "@mui/material";
import indiazona from "../assets/images/companyStrip/indiazona.png";
import me from "../assets/images/companyStrip/me.png";
import mi from "../assets/images/companyStrip/mi.png";
import mun from "../assets/images/companyStrip/mun.png";
import mupl from "../assets/images/companyStrip/mupl.png";
import oto from "../assets/images/companyStrip/oto.png";
import rp from "../assets/images/companyStrip/rp.png";
import rse from "../assets/images/companyStrip/rse.png";
import minter from "../assets/images/companyStrip/minter.png";
export default function CompanyStrip() {
    const items = [
        { logo: indiazona, link: "https://indiazona.in" },
        { logo: me, link: "https://mahakaliestate.com/" },
        { logo: mun, link: "https://munminmet.om/" },
        { logo: mupl, link: "https://www.mahakaliudyog.com/" },
        { logo: rse, link: "https://ransanenterprises.com/" },
        { logo: oto, link: "https://otovizag.com/" },
        { logo: mi, link: "https://mahakaliinfotek.com/" },
        { logo: rp, link: "https://krishnaresource.com/" },
        { logo: minter, link: "https://mahakaliinternational.com/" },
    ];

    const loopItems = [...items, ...items]; // Duplicate for infinite loop

    return (
        <Box
            sx={{
                width: "100%",
                overflow: "hidden",
                background: "#fff",
                py: 2,
                boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",

                // Stop the scrolling animation on hover
                "&:hover .marquee-track": {
                    animationPlayState: "paused",
                },
            }}
        >
            <Box
                className="marquee-track"
                sx={{
                    display: "flex",
                    width: "max-content",
                    whiteSpace: "nowrap",

                    animation: "marquee 30s linear infinite",

                    "@keyframes marquee": {
                        "0%": { transform: "translateX(0)" },
                        "100%": { transform: "translateX(-50%)" },
                    },
                }}
            >
                {loopItems.map((item, idx) => (
                    <Box
                        key={idx}
                        component="img"
                        src={item.logo}
                        onClick={() => window.open(item.link, "_blank")}
                        sx={{
                            height: { xs: 40, md: 70 },
                            mx: 4,
                            cursor: "pointer",
                            objectFit: "contain",
                            transition: "0.3s",
                            "&:hover": { transform: "scale(1.12)" },
                        }}
                    />
                ))}
            </Box>
        </Box>
    );
}
