import {
    Box,
    Container,
    Typography,
} from "@mui/material";

import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import { useNavigate } from "react-router-dom";


import { motion } from "framer-motion";

const MotionBox = motion.create(Box);

const contactItems = [
    {
        id: "address",
        label: "ADDRESS",
        value: (
            <>
                Door No. 43-4-12/1, 2nd Floor, Vyshnavi Magnum Opp. Indian Oil, Dondaparthy, Railway New Colony, Visakhapatnam - 530016, Andhra Pradesh, India
            </>
        ),
        icon: LocationOnOutlinedIcon,
    },
    {
        id: "phone",
        label: "PHONE",
        value: "0891-2539553, 033 40067940",
        icon: PhoneOutlinedIcon,
    },
    {
        id: "mail",
        label: "MAIL",
        value: "admin@mahakaliinfotek.com",
        icon: MailOutlineRoundedIcon,
    },
];

const socials = [
    {
        id: "linkedin",
        icon: LinkedInIcon,
    },
    {
        id: "twitter",
        icon: TwitterIcon,
    },
    {
        id: "instagram",
        icon: InstagramIcon,
    },
];

export default function GetInTouchSection() {
    const navigator = useNavigate();
    return (
        <Box
            component="section"
            id="contact-us"
            sx={{
                position: "relative",
                background: "#df161600",
                color: "#fff",
                width: "100%",

                // color: "#fff",

                overflow: "hidden",

                background: `
                    radial-gradient(
                        circle at 0% 10%,
                        rgba(0, 105, 82, 0.55) 0%,
                        rgba(0, 70, 54, 0.32) 22%,
                        rgba(0, 40, 30, 0.12) 42%,
                        transparent 62%
                    ),
                    
                `,
            }}
        >


            <Container
                maxWidth={false}
                sx={{
                    width: "100%",

                    px: {
                        xs: 3.4,
                        sm: 5,
                        md: 8,
                    },

                    pt: {
                        xs: 8,
                        sm: 7,
                        md: 9,
                    },

                    pb: {
                        xs: 2,
                        sm: 8,
                        md: 9,
                    },
                }}
            >
                {/* ================= HEADING ================= */}

                <MotionBox
                    initial={{
                        opacity: 0,
                        x: -45,
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        duration: 0.75,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily:
                                '"Anton", sans-serif',

                            fontSize: {
                                xs: "26px",
                                sm: "34px",
                                md: "44px",
                            },

                            lineHeight: 1,

                            fontWeight: 400,

                            textTransform:
                                "uppercase",

                            color: "#fff",
                        }}
                    >
                        GET IN TOUCH.
                    </Typography>
                </MotionBox>

                {/* ================= DOTS ================= */}

                <Box
                    sx={{
                        mt: {
                            xs: 3,
                            sm: 5,
                        },

                        display: "grid",

                        gridTemplateColumns:
                            "repeat(8, 4px)",

                        columnGap: {
                            xs: "13px",
                            sm: "16px",
                        },

                        rowGap: {
                            xs: "13px",
                            sm: "16px",
                        },

                        width: "fit-content",

                        opacity: 0.35,
                    }}
                >
                    {Array.from({
                        length: 32,
                    }).map((_, index) => (
                        <Box
                            key={index}
                            sx={{
                                width: 4,
                                height: 4,

                                borderRadius:
                                    "50%",

                                bgcolor:
                                    "#40756B",
                            }}
                        />
                    ))}
                </Box>

                {/* ================= CONTACT LIST ================= */}

                <Box
                    sx={{
                        mt: {
                            xs: 5,
                            sm: 6,
                            md: 7,
                        },

                        display: "flex",

                        flexDirection:
                            "column",

                        gap: {
                            xs: 3.4,
                            sm: 4,
                        },
                    }}
                >
                    {contactItems.map(
                        (item, index) => {
                            const Icon =
                                item.icon;

                            return (
                                <MotionBox
                                    key={
                                        item.id
                                    }
                                    initial={{
                                        opacity: 0,
                                        y: 25,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                    }}
                                    transition={{
                                        duration:
                                            0.6,

                                        delay:
                                            index *
                                            0.08,

                                        ease: [
                                            0.22,
                                            1,
                                            0.36,
                                            1,
                                        ],
                                    }}
                                    sx={{
                                        display:
                                            "flex",

                                        alignItems:
                                            "center",

                                        gap: {
                                            xs: 2.3,
                                            sm: 3,
                                        },
                                    }}
                                >
                                    {/* ICON */}

                                    <Box
                                        sx={{
                                            width: {
                                                xs: 40,
                                                sm: 46,
                                            },

                                            height: {
                                                xs: 40,
                                                sm: 46,
                                            },

                                            borderRadius:
                                                "50%",

                                            flexShrink: 0,

                                            bgcolor:
                                                "#008E73",

                                            display:
                                                "flex",

                                            alignItems:
                                                "center",

                                            justifyContent:
                                                "center",
                                        }}
                                    >
                                        <Icon
                                            sx={{
                                                color:
                                                    "#fff",

                                                fontSize: {
                                                    xs: 23,
                                                    sm: 26,
                                                },
                                            }}
                                        />
                                    </Box>

                                    {/* TEXT */}

                                    <Box>
                                        <Typography
                                            sx={{
                                                fontFamily:
                                                    '"Roboto Mono", monospace',

                                                fontSize: {
                                                    xs: "12px",
                                                    sm: "14px",
                                                },

                                                lineHeight:
                                                    1.2,

                                                fontWeight:
                                                    500,

                                                color:
                                                    "#008E73",

                                                textTransform:
                                                    "uppercase",

                                                mb: 0.6,
                                            }}
                                        >
                                            {
                                                item.label
                                            }
                                        </Typography>

                                        <Typography
                                            sx={{
                                                fontFamily:
                                                    '"Roboto Mono", monospace',

                                                fontSize: {
                                                    xs: "14px",
                                                    sm: "16px",
                                                    md: "18px",
                                                },

                                                lineHeight:
                                                    1.45,

                                                fontWeight:
                                                    400,

                                                color:
                                                    "#fff",
                                            }}
                                        >
                                            {
                                                item.value
                                            }
                                        </Typography>
                                    </Box>
                                </MotionBox>
                            );
                        }
                    )}
                </Box>
            </Container>


            <Box
                sx={{
                    width: "100%",

                    height: "1px",

                    bgcolor:
                        "rgba(255,255,255,0.16)",
                }}
            />


            <Container
                maxWidth={false}
                sx={{
                    width: "100%",

                    px: {
                        xs: 3.4,
                        sm: 5,
                        md: 8,
                    },

                    pt: {
                        xs: .8,
                        sm: 5,
                    },

                    pb: {
                        xs: 3,
                        sm: 6,
                        md: 8,
                    },
                }}
            >
                {/* FOLLOW US */}

                <Typography
                    sx={{
                        fontFamily:
                            '"Roboto Mono", monospace',

                        fontSize: {
                            xs: "12px",
                            sm: "14px",
                        },

                        fontWeight: 500,

                        textTransform:
                            "uppercase",

                        color: "#fff",

                        letterSpacing:
                            "0.3px",
                    }}
                >
                    FOLLOW US
                </Typography>

                {/* SOCIAL ICONS */}

                <Box
                    sx={{
                        display: "flex",

                        gap: 1.5,

                        mt: 1.7,
                    }}
                >
                    {socials.map(
                        (social) => {
                            const Icon =
                                social.icon;

                            return (
                                <Box
                                    key={
                                        social.id
                                    }
                                    sx={{
                                        width: 34,
                                        height: 34,

                                        borderRadius:
                                            "50%",

                                        bgcolor:
                                            "#fff",

                                        display:
                                            "flex",

                                        alignItems:
                                            "center",

                                        justifyContent:
                                            "center",

                                        cursor: "pointer",

                                        transition:
                                            "transform 250ms ease",

                                        "&:hover":
                                        {
                                            transform:
                                                "translateY(-3px)",
                                        },
                                    }}
                                >
                                    <Icon
                                        sx={{
                                            color:
                                                "#00352C",

                                            fontSize:
                                                23,
                                        }}
                                    />
                                </Box>
                            );
                        }
                    )}
                </Box>

                {/* ================= CTA ================= */}

                <Box
                    sx={{
                        mt: {
                            xs: 2,
                            sm: 7,
                        },
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily:
                                '"Roboto Mono", monospace',

                            fontSize: {
                                xs: "12px",
                                sm: "14px",
                            },

                            fontWeight: 400,

                            textTransform:
                                "uppercase",

                            mb: 1.6,
                        }}
                    >
                        READY TO WORK?
                    </Typography>

                    <Box
                        sx={{
                            display: "flex",

                            alignItems:
                                "center",

                            justifyContent:
                                "space-between",

                            gap: 2,
                        }}
                    >
                        <Typography
                            sx={{
                                fontFamily:
                                    '"Anton", sans-serif',

                                fontSize: {
                                    xs: "20px",
                                    sm: "34px",
                                    md: "42px",
                                },

                                lineHeight: 1,

                                fontWeight:
                                    400,

                                textTransform:
                                    "uppercase",

                                color: "#fff",
                            }}
                        >
                            START A CONVERSATION.
                        </Typography>

                        <Box
                            onClick={() => navigator("/send-quer")}

                            sx={{
                                width: {
                                    xs: 34,
                                    sm: 40,
                                },

                                height: {
                                    xs: 34,
                                    sm: 44,
                                },

                                flexShrink: 0,

                                borderRadius:
                                    "50%",

                                bgcolor:
                                    "#008E73",

                                display:
                                    "flex",

                                alignItems:
                                    "center",

                                justifyContent:
                                    "center",

                                cursor: "pointer",
                            }}
                        >
                            <ArrowOutwardRoundedIcon
                                sx={{
                                    color:
                                        "#fff",

                                    fontSize: {
                                        xs: 25,
                                        sm: 29,
                                    },
                                }}
                            />
                        </Box>


                    </Box>

                    <Box
                        sx={{
                            flexGrow: 1,
                            minHeight: {
                                xs: 10,
                                sm: 100,
                            },
                        }}
                    />

                    {/* BOTTOM LINKS */}

                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            gap: 2,
                            pb: 0,
                        }}
                    >
                        <Typography
                            component="a"
                            href="/privacy-policy"
                            sx={{
                                fontFamily: '"Roboto Mono", monospace',
                                fontSize: {
                                    xs: "14px",
                                    sm: "13px",
                                },
                                color: "#008E73",
                                textTransform: "uppercase",
                                textDecoration: "underline",
                                cursor: "pointer",
                            }}
                        >
                            PRIVACY POLICY
                        </Typography>

                        <Typography
                            component="a"
                            href="/terms-and-conditions"
                            sx={{
                                fontFamily: '"Roboto Mono", monospace',
                                fontSize: {
                                    xs: "14px",
                                    sm: "13px",
                                },
                                color: "#008E73",
                                textTransform: "uppercase",
                                textDecoration: "underline",
                                cursor: "pointer",
                                textAlign: "right",
                            }}
                        >
                            TERMS & CONDITIONS
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}