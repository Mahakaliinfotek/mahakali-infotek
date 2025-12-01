import { Box, Typography } from "@mui/material";

// Icons
import FacebookIcon from "@mui/icons-material/Facebook";
import CloseIcon from "@mui/icons-material/Close"; // X
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { animatedUnderline } from "../Animations/hoverUnderline";

const config = {
    leftLinks: [
        { label: "Join Our Team", path: "#" },
        { label: "Feedback Form", path: "#" },
        { label: "Terms & Conditions", path: "#" },
        { label: "Privacy Policy", path: "#" },
    ],

    corporateOffice: {
        title: "Corporate Office",
        address: `Door No. 43-4-12/1, 2nd Floor, Vyshnavi Magnum Opp. Indian Oil,
Dondaparthy, Railway New Colony, Visakhapatnam - 530016,
Andhra Pradesh, India`,
        phone: "0891-2539553",
    },

    headOffice: {
        title: "Head Office",
        address: `11, Clive Row, 4th Floor,
Kolkata - 700001`,
        phone: "033 40067940",
    },

    contact: {
        email: "info@mahakaliudyog.com",
    },

    social: {
        username: "@_mahakaliudyog",
        links: [
            { icon: "facebook", url: "https://www.facebook.com/Mahakaliudyog/" },
            { icon: "x", url: "https://x.com/mahakaliudyog" },
            { icon: "instagram", url: "https://www.instagram.com/_mahakaliudyog/" },
            { icon: "linkedin", url: "https://www.linkedin.com/company/mahakali-udyog-pvt-ltd/?originalSubdomain=in" },
        ],
    },

    copyright: "© 2025 Mahakali Group. All Rights Reserved.",
};

export default function Footer() {

    const { leftLinks, corporateOffice, headOffice, contact, social, copyright } = config;

    const getIcon = (name) => {
        switch (name) {
            case "facebook": return <FacebookIcon />;
            case "x": return <CloseIcon />;
            case "google": return <GoogleIcon />;
            case "instagram": return <InstagramIcon />;
            case "linkedin": return <LinkedInIcon />;
            default: return null;
        }
    };

    return (
        <Box
            sx={{
                width: "100%",
                bgcolor: "#043D4E",
                color: "#E2E2E2",
                pt: 6,
                pb: 3,
                px: { xs: 3, md: 8 },
                fontFamily: "Inter",
            }}
        >
            {/* TOP SECTION */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: 5,
                    mb: 4,
                }}
            >
                {/* LEFT LINKS */}
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2, }}>
                    {leftLinks.map((item, i) => (
                        <Typography
                            key={i}
                            component="a"
                            // href={item.path}
                            style={{ textDecoration: "none", color: "#E2E2E2" }}
                            sx={{ fontSize: "15px", fontWeight: 500, cursor: "pointer",...animatedUnderline(), }}
                        >
                            {item.label}
                        </Typography>
                    ))}
                </Box>

                {/* FIXED WIDTH MIDDLE SECTION */}
                <Box sx={{ display: "flex", flexDirection: "column", gap: 3, width: { md: "380px" } }}>
                    <Box>
                        <Typography sx={{ fontWeight: 600, fontSize: "16px", mb: 1,...animatedUnderline(), }}>
                            {corporateOffice.title}
                        </Typography>
                        <Typography sx={{ fontSize: "14px", lineHeight: "22px" }}>
                            {corporateOffice.address}
                            <br />Tel - {corporateOffice.phone}
                        </Typography>
                    </Box>

                    <Box>
                        <Typography sx={{ fontWeight: 600, fontSize: "16px", mb: 1,...animatedUnderline(), }}>
                            {headOffice.title}
                        </Typography>
                        <Typography sx={{ fontSize: "14px", lineHeight: "22px" }}>
                            {headOffice.address}
                            <br />Tel - {headOffice.phone}
                        </Typography>
                    </Box>
                </Box>

                {/* CONTACT + SOCIAL */}
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2, minWidth: "200px" }}>
                    <Typography sx={{ fontWeight: 600, fontSize: "16px" }}>
                        Contact Us
                    </Typography>

                    <Typography
                        component="a"
                        href={`mailto:${contact.email}`}
                        style={{ textDecoration: "none", color: "#E2E2E2" }}
                        sx={{ fontSize: "14px", mb: 2 ,...animatedUnderline(),}}
                    >
                        {contact.email}
                    </Typography>

                    <Typography sx={{ fontWeight: 600, fontSize: "16px" }}>
                        Follow Us
                    </Typography>

                    {/* ICONS */}
                    <Box sx={{ display: "flex", gap: 2, mb: 1 }}>
                        {social.links.map((item, i) => (
                            <Box
                                key={i}
                                component="a"
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    ...iconStyle, transition: "transform 0.3s ease",
                                    "&:hover": {
                                        transform: "scale(1.15)",
                                    }
                                }}
                            >
                                {getIcon(item.icon)}
                            </Box>
                        ))}
                    </Box>

                    <Typography sx={{ fontSize: "14px",...animatedUnderline(), }}>
                        {social.username}
                    </Typography>
                </Box>
            </Box>

            {/* Divider */}
            <Box sx={{ width: "100%", height: "1px", bgcolor: "#4F6D78", mb: 2 }} />

            {/* COPYRIGHT */}
            <Typography sx={{ textAlign: "center", fontSize: "14px" }}>
                {copyright}
            </Typography>
        </Box>
    );
}

const iconStyle = {
    width: "38px",
    height: "38px",
    borderRadius: "50%",
    border: "1px solid #E2E2E2",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    textDecoration: "none",
    color: "#E2E2E2",
};
