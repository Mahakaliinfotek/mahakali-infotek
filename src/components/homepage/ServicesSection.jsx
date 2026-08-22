// import {
//     Box,
//     Container,
//     Typography,
// } from "@mui/material";

// import { motion } from "framer-motion";

// const MotionTypography =
//     motion.create(Typography);

// const MotionBox =
//     motion.create(Box);

// const services = [
//     "CUSTOM WEBSITES",
//     "CUSTOM SOFTWARE",
//     "AI AGENTS",
//     "AUTOMATIONS",
//     "INTEGRATIONS",
//     "E-COMMERCE",
//     "BUSINESS DEVELOPMENT",
//     "STRATEGY",
// ];

// const serviceAnimation = {
//     hidden: {
//         opacity: 0,
//         x: 120,
//     },

//     visible: {
//         opacity: 1,
//         x: 0,
//     },
// };

// export default function ServicesSection({
//     isActive = false,
// }) {
//     return (
//         <Box
//             component="section"
//             sx={{
//                 width: "100%",
//                 minHeight: "100%",
//                 color: "#fff",
//             }}
//         >
//             <Container
//                 maxWidth={false}
//                 sx={{
//                     maxWidth: "1440px",

//                     px: {
//                         xs: 3,
//                         sm: 5,
//                         md: 8,
//                     },

//                     pb: {
//                         xs: 2,
//                         md: 10,
//                     },
//                 }}
//             >
//                 {/* SERVICES LABEL */}

//                 <Typography
//                     sx={{
//                         fontFamily:
//                             '"Roboto Mono", monospace',

//                         fontSize: {
//                             xs: "12px",
//                             md: "14px",
//                         },

//                         fontWeight: 400,

//                         textTransform:
//                             "uppercase",

//                         mb: {
//                             xs: 2,
//                             md: 6,
//                         },
//                     }}
//                 >
//                     SERVICES:
//                 </Typography>

//                 {/* FULL SERVICES FADE WRAPPER */}

//                 <MotionBox
//                     initial={false}
//                     animate={
//                         isActive
//                             ? {
//                                 opacity: [
//                                     1,
//                                     1,
//                                     0.35,
//                                     1,
//                                 ],
//                             }
//                             : {
//                                 opacity: 1,
//                             }
//                     }
//                     transition={
//                         isActive
//                             ? {
//                                 delay: 3.7,

//                                 duration: 3,

//                                 times: [
//                                     0,
//                                     0.25,
//                                     0.65,
//                                     1,
//                                 ],

//                                 repeat: Infinity,

//                                 repeatType:
//                                     "loop",

//                                 ease:
//                                     "easeInOut",
//                             }
//                             : {
//                                 duration: 0,
//                             }
//                     }
//                     sx={{
//                         width: "100%",
//                     }}
//                 >
//                     <Box
//                         sx={{
//                             display: "flex",

//                             flexDirection:
//                                 "column",

//                             alignItems:
//                                 "flex-end",

//                             gap: {
//                                 xs: 3.5,
//                                 sm: 3,
//                                 md: 3.5,
//                             },
//                         }}
//                     >
//                         {services.map(
//                             (
//                                 service,
//                                 index
//                             ) => (
//                                 <MotionTypography
//                                     key={
//                                         service
//                                     }

//                                     initial="hidden"

//                                     animate={
//                                         isActive
//                                             ? "visible"
//                                             : "hidden"
//                                     }

//                                     variants={
//                                         serviceAnimation
//                                     }

//                                     transition={{
//                                         duration:
//                                             0.9,

//                                         delay:
//                                             isActive
//                                                 ? 0.2 +
//                                                 index *
//                                                 0.35
//                                                 : 0,

//                                         ease: [
//                                             0.22,
//                                             1,
//                                             0.36,
//                                             1,
//                                         ],
//                                     }}

//                                     sx={{
//                                         width:
//                                             "100%",

//                                         fontFamily:
//                                             '"Anton", sans-serif',

//                                         fontSize: {
//                                             xs: "27px",
//                                             sm: "34px",
//                                             md: "42px",
//                                         },

//                                         fontWeight:
//                                             400,

//                                         lineHeight:
//                                             1,

//                                         textTransform:
//                                             "uppercase",

//                                         textAlign:
//                                             "right",
//                                     }}
//                                 >
//                                     {service}
//                                 </MotionTypography>
//                             )
//                         )}
//                     </Box>
//                 </MotionBox>
//             </Container>
//         </Box>
//     );
// }


import {
    Box,
    Container,
    Typography,
    useMediaQuery,
} from "@mui/material";

import { motion } from "framer-motion";
import customewebsit from "../../assets/home/customewebsit.webp";
import CustomSoftware from "../../assets/home/CustomSoftware.webp";
import AIAgents from "../../assets/home/AIAgents.webp";
import Automations from "../../assets/home/Automations.webp";
import BusinessDevelopment from "../../assets/home/BusinessDevelopment.webp";
import Integrations from "../../assets/home/Integrations.webp";
import eCommerce from "../../assets/home/eCommerce.webp";
import Strategy from "../../assets/home/Strategy.webp";
import { useState } from "react";



const MotionTypography =
    motion.create(Typography);

const MotionBox =
    motion.create(Box);

const services = [
    {
        title: "CUSTOM WEBSITES",
        image: customewebsit,
    },
    {
        title: "CUSTOM SOFTWARE",
        image: CustomSoftware,
    },
    {
        title: "AI AGENTS",
        image: AIAgents,
    },
    {
        title: "AUTOMATIONS",
        image: Automations,
    },
    {
        title: "INTEGRATIONS",
        image: Integrations,
    },
    {
        title: "E-COMMERCE",
        image: eCommerce,
    },
    {
        title: "BUSINESS DEVELOPMENT",
        image: BusinessDevelopment,
    },
    {
        title: "STRATEGY",
        image: Strategy,
    },
];

const serviceAnimation = {
    hidden: {
        opacity: 0,
        x: 120,
    },

    visible: {
        opacity: 1,
        x: 0,
    },
};

export default function ServicesSection({
    isActive = false,
}) {
    const [activeService, setActiveService] = useState(services[0]);
    const isMobile = useMediaQuery("(max-width:600px)");
    return isMobile ? (
        <Box
            component="section"
            sx={{
                width: "100%",
                minHeight: "100%",
                color: "#fff",
            }}
        >
            <Container
                maxWidth={false}
                sx={{
                    maxWidth: "1440px",

                    px: {
                        xs: 3,
                        sm: 5,
                        md: 8,
                    },

                    pb: {
                        xs: 2,
                        md: 10,
                    },
                }}
            >
                {/* SERVICES LABEL */}

                <Typography
                    sx={{
                        fontFamily:
                            '"Roboto Mono", monospace',

                        fontSize: {
                            xs: "12px",
                            md: "14px",
                        },

                        fontWeight: 400,

                        textTransform:
                            "uppercase",

                        mb: {
                            xs: 2,
                            md: 6,
                        },
                    }}
                >
                    SERVICES:
                </Typography>

                {/* FULL SERVICES FADE WRAPPER */}

                <MotionBox
                    initial={false}
                    animate={
                        isActive
                            ? {
                                opacity: [
                                    1,
                                    1,
                                    0.35,
                                    1,
                                ],
                            }
                            : {
                                opacity: 1,
                            }
                    }
                    transition={
                        isActive
                            ? {
                                delay: 3.7,

                                duration: 3,

                                times: [
                                    0,
                                    0.25,
                                    0.65,
                                    1,
                                ],

                                repeat: Infinity,

                                repeatType:
                                    "loop",

                                ease:
                                    "easeInOut",
                            }
                            : {
                                duration: 0,
                            }
                    }
                    sx={{
                        width: "100%",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",

                            flexDirection:
                                "column",

                            alignItems:
                                "flex-end",

                            gap: {
                                xs: 3.5,
                                sm: 3,
                                md: 3.5,
                            },
                        }}
                    >
                        {services.map(
                            (
                                service,
                                index
                            ) => (
                                <MotionTypography
                                    key={
                                        service
                                    }

                                    initial="hidden"

                                    animate={
                                        isActive
                                            ? "visible"
                                            : "hidden"
                                    }

                                    variants={
                                        serviceAnimation
                                    }

                                    transition={{
                                        duration:
                                            0.9,

                                        delay:
                                            isActive
                                                ? 0.2 +
                                                index *
                                                0.35
                                                : 0,

                                        ease: [
                                            0.22,
                                            1,
                                            0.36,
                                            1,
                                        ],
                                    }}

                                    sx={{
                                        width:
                                            "100%",

                                        fontFamily:
                                            '"Anton", sans-serif',

                                        fontSize: {
                                            xs: "27px",
                                            sm: "34px",
                                            md: "42px",
                                        },

                                        fontWeight:
                                            400,

                                        lineHeight:
                                            1,

                                        textTransform:
                                            "uppercase",

                                        textAlign:
                                            "right",
                                    }}
                                >
                                    {service.title}
                                </MotionTypography>
                            )
                        )}
                    </Box>
                </MotionBox>
            </Container>
        </Box>
    ) : (
        <Box
            component="section"
            sx={{
                position: "relative",

                width: "100%",

                // FIXED SCREEN HEIGHT
                height: {
                    xs: "auto",
                    md: "100svh",
                },


                color: "#fff",

                overflow: {
                    xs: "visible",
                    md: "hidden",
                },
            }}
        >
            <Container
                maxWidth={false}
                sx={{
                    maxWidth: "1600px",

                    width: "100%",
                    height: "100%",
                    mt: 20,

                    px: {
                        xs: 2.5,
                        sm: 4,
                        md: 6,
                    },

                    display: {
                        xs: "block",
                        md: "grid",
                    },

                    gridTemplateColumns: {
                        md: "42% 58%",
                    },

                    columnGap: {
                        md: 6,
                        lg: 8,
                    },
                }}
            >
                {/* ====================================
                    LEFT SIDE
                    DOES NOT SCROLL
                ==================================== */}

                <Box
                    sx={{
                        height: {
                            xs: "auto",
                            md: "100svh",
                        },

                        pt: {
                            xs: 7,
                            md: 8,
                        },

                        display: "flex",
                        flexDirection: "column",

                        alignItems: "flex-start",

                        overflow: "hidden",
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily:
                                '"Roboto Mono", monospace',

                            fontSize: {
                                xs: "16px",
                                md: "18px",
                                lg: "20px",
                            },

                            mb: {
                                xs: 5,
                                md: 7,
                            },
                        }}
                    >
                        SERVICES:
                    </Typography>

                    

                    <Box
                        sx={{
                            width: {
                                xs: "100%",
                                md: "500px",
                                lg: "560px",
                            },

                            height: {
                                xs: "260px",
                                sm: "340px",
                                md: "370px",
                                lg: "390px",
                            },

                            flexShrink: 0,
                            borderRadius: "14px",
                            overflow: "hidden",
                        }}
                    >
                        <Box
                            component="img"
                            key={activeService.title}
                            src={activeService.image}
                            alt={activeService.title}
                            sx={{
                                display: "block",
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                objectPosition: "center",

                                animation: "serviceImageFade 0.4s ease",

                                "@keyframes serviceImageFade": {
                                    from: {
                                        opacity: 0,
                                        transform: "scale(1.04)",
                                    },
                                    to: {
                                        opacity: 1,
                                        transform: "scale(1)",
                                    },
                                },
                            }}
                        />
                    </Box>
                </Box>



                <Box
                    sx={{
                        position: "relative",

                        height: {
                            xs: "auto",


                            md: "80svh",
                        },

                        overflowY: {
                            xs: "visible",

                            // IMPORTANT
                            md: "auto",
                        },



                        overflowX: "hidden",

                        pr: {
                            xs: 0,
                            md: 16,

                        },

                        // hide scrollbar
                        scrollbarWidth: "none",

                        "&::-webkit-scrollbar": {
                            display: "none",
                        },
                    }}
                >
                    {/* top spacing */}
                    <Box
                        sx={{
                            height: {
                                md: "100px",

                            },
                        }}
                    />

                    

                    {services.map((service) => (
                        <Box
                            key={service.title}
                            onMouseEnter={() => setActiveService(service)}
                            sx={{
                                height: {
                                    xs: "100px",
                                    md: "120px",
                                },

                                flexShrink: 0,

                                display: "flex",
                                alignItems: "center",

                                justifyContent: {
                                    xs: "flex-start",
                                    md: "flex-end",
                                },

                                cursor: "pointer",
                            }}
                        >
                            <Typography
                                sx={{
                                    fontFamily:
                                        '"Anton", "Arial Narrow", sans-serif',

                                    fontSize: {
                                        xs: "36px",
                                        sm: "48px",
                                        md: "58px",
                                        lg: "68px",
                                    },

                                    lineHeight: 1,
                                    fontWeight: 400,

                                    textTransform: "uppercase",

                                    textAlign: {
                                        xs: "left",
                                        md: "right",
                                    },

                                    transition:
                                        "opacity 0.3s ease, transform 0.3s ease",

                                    // opacity:
                                    //     activeService.title === service.title
                                    //         ? 1
                                    //         : 0.65,

                                    transform:
                                        activeService.title === service.title
                                            ? "translateX(0)"
                                            : "translateX(0)",
                                }}
                            >
                                {service.title}
                            </Typography>
                        </Box>
                    ))}

                    {/* bottom spacing */}
                    <Box
                        sx={{
                            height: {
                                md: "100px",
                            },
                        }}
                    />
                </Box>
            </Container>
        </Box>
    );
}

