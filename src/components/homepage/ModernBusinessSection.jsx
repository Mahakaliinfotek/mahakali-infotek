
"use client";

import { useEffect, useRef, useState } from "react";
import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import { motion, useReducedMotion } from "framer-motion";

import bannerImge from "../../assets/home/bannerImge.png";
import ServicesSection from "./ServicesSection";
import ModernBusinessScreens from "./ModernBusinessScreens";



import banner_DV from "../../assets/home/banner_DV.png";

import CareerBenefitsSection from "./CareerBenefitsSection";
import HowWeWorkSection from "./HowWeWorkSection";
import HowWeWorkSectionDesktop from "./HowWeWorkSection_Desktop";
import ContactSection from "./ContactSection";
import CareerBenefitsSectionDesktop from "./CareerBenefitsSection_dv";

const MotionTypography = motion.create(Typography);

const TOTAL_SECTIONS = 5;

export default function ModernBusinessSection() {
    const isMobile = useMediaQuery("(max-width:600px)");
    const containerRef = useRef(null);
    const isSnappingRef = useRef(false);
    const lastScrollYRef = useRef(0);

    const [activeIndex, setActiveIndex] = useState(0);

    const shouldReduceMotion = useReducedMotion();
    const [isSectionVisible, setIsSectionVisible] = useState(false);


    const getScrollData = () => {
        const container = containerRef.current;

        if (!container) return null;

        const viewportHeight = window.innerHeight;

        const containerTop =
            container.getBoundingClientRect().top + window.scrollY;

        const scrollableDistance =
            container.offsetHeight - viewportHeight;

        const sectionStep =
            scrollableDistance / (TOTAL_SECTIONS - 1);

        const relativeScroll =
            window.scrollY - containerTop;

        return {
            containerTop,
            viewportHeight,
            scrollableDistance,
            sectionStep,
            relativeScroll,
        };
    };



    const smoothScrollTo = (targetY, duration = 650) => {
        const startY = window.scrollY;
        const distance = targetY - startY;
        const startTime = performance.now();

        const easeOutCubic = (t) =>
            1 - Math.pow(1 - t, 3);

        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;

            const progress = Math.min(
                elapsed / duration,
                1
            );

            const easedProgress =
                easeOutCubic(progress);

            window.scrollTo(
                0,
                startY +
                distance *
                easedProgress
            );

            if (progress < 1) {
                requestAnimationFrame(
                    animate
                );
            } else {
                window.scrollTo(
                    0,
                    targetY
                );

                lastScrollYRef.current =
                    targetY;

                isSnappingRef.current =
                    false;
            }
        };

        requestAnimationFrame(animate);
    };

    useEffect(() => {
        if (shouldReduceMotion) return;

        const timer = setTimeout(() => {
            const data = getScrollData();

            if (!data) return;

            if (
                data.relativeScroll < 0 ||
                data.relativeScroll >
                data.scrollableDistance
            ) {
                return;
            }

            const index = Math.round(
                data.relativeScroll /
                data.sectionStep
            );

            const safeIndex = Math.max(
                0,
                Math.min(
                    index,
                    TOTAL_SECTIONS - 1
                )
            );

            const exactY =
                data.containerTop +
                safeIndex *
                data.sectionStep;

            setActiveIndex(
                safeIndex
            );

            window.scrollTo(
                0,
                exactY
            );

            lastScrollYRef.current =
                exactY;
        }, 80);

        return () =>
            clearTimeout(timer);
    }, [shouldReduceMotion]);


    useEffect(() => {
        if (shouldReduceMotion) return;

        const handleScroll = () => {
            if (
                isSnappingRef.current
            ) {
                return;
            }

            const data =
                getScrollData();

            if (!data) return;

            const currentScrollY =
                window.scrollY;

            // Outside ModernBusinessSection
            if (
                data.relativeScroll <
                0 ||
                data.relativeScroll >
                data.scrollableDistance
            ) {
                lastScrollYRef.current =
                    currentScrollY;

                return;
            }

            const direction =
                currentScrollY >
                    lastScrollYRef.current
                    ? "down"
                    : "up";

            lastScrollYRef.current =
                currentScrollY;

            const rawIndex =
                data.relativeScroll /
                data.sectionStep;

            const baseIndex =
                Math.floor(rawIndex);

            const progress =
                rawIndex -
                baseIndex;

            let targetIndex = null;

            // SCROLL DOWN
            if (
                direction === "down" &&
                progress >= 0.12
            ) {
                targetIndex =
                    baseIndex + 1;
            }

            // SCROLL UP
            if (
                direction === "up" &&
                progress <= 0.88
            ) {
                targetIndex =
                    baseIndex;
            }

            if (
                targetIndex === null
            ) {
                return;
            }

            const safeIndex =
                Math.max(
                    0,
                    Math.min(
                        targetIndex,
                        TOTAL_SECTIONS -
                        1
                    )
                );

            const targetY =
                data.containerTop +
                safeIndex *
                data.sectionStep;

            if (
                Math.abs(
                    currentScrollY -
                    targetY
                ) < 3
            ) {
                setActiveIndex(
                    safeIndex
                );
                return;
            }

            setActiveIndex(
                safeIndex
            );

            isSnappingRef.current =
                true;

            smoothScrollTo(targetY);
        };

        window.addEventListener(
            "scroll",
            handleScroll,
            {
                passive: true,
            }
        );

        return () => {
            window.removeEventListener(
                "scroll",
                handleScroll
            );
        };
    }, [shouldReduceMotion]);

    return isMobile ? (
        <Box
            ref={containerRef}
            component="section"
            sx={{
                position: "relative",

                height: shouldReduceMotion
                    ? "auto"
                    : `${TOTAL_SECTIONS * 100}svh`,


            }}
        >
            <Box
                sx={{
                    position:
                        shouldReduceMotion
                            ? "relative"
                            : "sticky",

                    top: 20,

                    height:
                        shouldReduceMotion
                            ? "auto"
                            : "100svh",

                    overflow:
                        shouldReduceMotion
                            ? "visible"
                            : "hidden",
                }}
            >


                {activeIndex !== 4 && (<Container
                    maxWidth={false}
                    sx={{
                        maxWidth:
                            "1440px",

                        px: {
                            xs: 2.5,
                            sm: 4,
                            md: 6,
                            lg: 8,
                        },

                        position:
                            "absolute",

                        top: {
                            xs: activeIndex === 3 ? 60 : 45,
                            md: activeIndex === 0 ? 200 : 10,
                        },

                        left: "50%",

                        transform:
                            "translateX(-50%)",

                        width: "100%",

                        zIndex: 30,

                        pointerEvents:
                            "none",
                    }}
                >
                    <MotionTypography
                        initial={{
                            opacity: 0,
                            x: -80,




                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                        }}
                        transition={{
                            duration: 2.5,
                            delay: 0.18,
                            ease: [
                                0.22,
                                1,
                                0.36,
                                1,
                            ],
                        }}
                        sx={{
                            fontFamily:
                                '"Anton", "Arial Narrow", sans-serif',

                            fontSize: {
                                xs:
                                    activeIndex === 0
                                        ? "28px"
                                        : "24px",
                                sm: "58px",
                                md: 42,
                                lg: 52,
                            },

                            lineHeight:
                                0.95,

                            fontWeight:
                                400,

                            textTransform:
                                "uppercase",

                            letterSpacing:
                                "0.5px",
                            transition:
                                "font-size 2s cubic-bezier(0.22, 1, 0.36, 1)",
                        }}
                    >
                        BUILT TO PARTNER
                        WITH
                    </MotionTypography>

                    <MotionTypography
                        initial={{
                            opacity: 0,
                            x: -80,
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                        }}
                        transition={{
                            duration: 2.5,
                            delay: 0.18,
                            ease: [
                                0.22,
                                1,
                                0.36,
                                1,
                            ],
                        }}
                        sx={{
                            mt: {
                                xs: 1.5,
                                md: 2.5,
                            },

                            fontFamily:
                                '"Anton", "Arial Narrow", sans-serif',

                            fontSize: {
                                xs:
                                    activeIndex === 0
                                        ? "28px"
                                        : "24px",
                                sm: "58px",
                                md: 42,
                                lg: 52,
                            },

                            lineHeight:
                                0.95,

                            fontWeight:
                                400,

                            color:
                                "#006A4E",

                            textTransform:
                                "uppercase",

                            letterSpacing:
                                "0.5px",
                            transition:
                                "font-size 2s cubic-bezier(0.22, 1, 0.36, 1)",
                        }}
                    >
                        MODERN BUSINESS
                    </MotionTypography>
                </Container>)}

                <ModernBusinessScreens activeIndex={activeIndex} />



            </Box>
        </Box>
    ) : (
        <Box
            component="section"
            sx={{
                position: "relative",
                width: "100%",
                overflow: "visible",
            }}
        >

            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,

                    width: "100%",
                    height: {
                        xs: "100svh",
                        md: "100svh",
                    },


                    px: {
                        xs: 1.5,
                        md: 2,
                    },

                    zIndex: 0,
                    pointerEvents: "none",
                }}
            >
                <Box
                    sx={{
                        position: "relative",

                        width: "100%",
                        height: "100%",

                        overflow: "hidden",

                        borderRadius: {
                            xs: "0px",
                            md: "0 0 22px 22px",
                        },
                    }}
                >
                    <motion.img
                        src={banner_DV}
                        alt="Mahakali Infotek modern business office"
                        initial={{
                            scale: 1.06,
                        }}
                        animate={{
                            scale: 1,
                        }}
                        transition={{
                            duration: 2.2,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        style={{
                            display: "block",

                            width: "100%",
                            height: "100%",

                            objectFit: "cover",
                            objectPosition: "center",
                        }}
                    />


                    <Box
                        sx={{
                            position: "absolute",
                            inset: 0,

                            background: {
                                xs:
                                    "linear-gradient(180deg, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.5) 100%)",

                                md:
                                    "linear-gradient(90deg, rgba(0,0,0,0.68) 0%, rgba(0,0,0,0.28) 48%, rgba(0,0,0,0.06) 100%)",

                            },
                        }}
                    />
                </Box>
            </Box>


            <Box
                sx={{
                    height: {
                        xs: "170px",
                        sm: "210px",
                        md: "260px",
                        lg: "285px",
                    },
                }}
            />


            <Box
                sx={{
                    position: "sticky",

                    top: {
                        xs: "75px",
                        sm: "80px",
                        md: "25px",
                    },

                    zIndex: 30,

                    width: "100%",

                    pointerEvents: "none",
                }}
            >
                <Container
                    maxWidth={false}
                    sx={{
                        maxWidth: "1440px",

                        px: {
                            xs: 3,
                            sm: 5,
                            md: 6,
                            lg: 6,
                        },
                    }}
                >
                    <MotionTypography
                        initial={{
                            opacity: 0,
                            // x: -70,
                            //x: "-100vw",
                            x: -120,

                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                        }}
                        transition={{
                            duration: 3.6,
                            delay: 0.30,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        sx={{
                            fontFamily:
                                '"Anton", "Arial Narrow", sans-serif',

                            fontSize: {
                                xs: "30px",
                                sm: "42px",
                                md: "48px",
                                lg: "58px",
                            },

                            lineHeight: 0.95,
                            fontWeight: 400,

                            textTransform: "uppercase",

                            letterSpacing: "0.5px",

                            textShadow:
                                "0 2px 10px rgba(0,0,0,0.3)",
                        }}
                    >
                        BUILT TO PARTNER WITH
                    </MotionTypography>

                    <MotionTypography
                        initial={{
                            opacity: 0,
                            x: -120,
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                        }}
                        transition={{
                            duration: 3.6,
                            delay: 0.30,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        sx={{
                            mt: {
                                xs: 1,
                                md: 1.5,
                            },

                            fontFamily:
                                '"Anton", "Arial Narrow", sans-serif',

                            fontSize: {
                                xs: "30px",
                                sm: "42px",
                                md: "48px",
                                lg: "58px",
                            },

                            lineHeight: 0.95,

                            fontWeight: 400,

                            color: "#007A5A",

                            textTransform: "uppercase",

                            letterSpacing: "0.5px",

                            textShadow:
                                "0 2px 10px rgba(0,0,0,0.3)",
                        }}
                    >
                        MODERN BUSINESS
                    </MotionTypography>
                </Container>
            </Box>


            <Container
                maxWidth={false}
                sx={{
                    position: "relative",
                    zIndex: 2,

                    maxWidth: "1440px",

                    px: {
                        xs: 3,
                        sm: 5,
                        md: 6,
                        lg: 6,
                    },

                    pt: {
                        xs: 4,
                        md: 4,
                    },

                    // complete first viewport
                    minHeight: {
                        xs: "calc(100svh - 300px)",
                        md: "calc(100svh - 390px)",
                    },

                    display: "flex",
                    alignItems: "flex-start",
                }}
            >
                <MotionTypography
                    initial={{
                        opacity: 0,
                        x: -120,
                    }}
                    animate={{
                        opacity: 1,
                        x: 0,
                    }}
                    transition={{
                        duration: 3.6,
                        delay: 0.30,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    sx={{
                        maxWidth: {
                            xs: "100%",
                            md: "780px",
                        },

                        fontFamily:
                            '"Roboto Mono", monospace',

                        fontSize: {
                            xs: "12px",
                            sm: "16px",
                            md: "18px",
                            lg: "20px",
                        },

                        lineHeight: {
                            xs: 1.6,
                            md: 1.75,
                        },

                        fontWeight: 400,

                        textTransform: "uppercase",

                        color: "#fff",
                    }}
                >
                    MAHAKALI INFOTEK IS A PARTNER TO MODERN
                    BUSINESSES, BRINGING TOGETHER BUSINESS
                    EXPERTISE, TECHNOLOGY AND EXECUTION. FROM
                    SOLVING TODAY&apos;S CHALLENGES TO BUILDING
                    WHAT&apos;S NEXT, WE WORK ALONGSIDE YOU AT
                    EVERY STAGE OF THE JOURNEY.
                </MotionTypography>
            </Container>


            <ServicesSection isActive={true} />

            <CareerBenefitsSectionDesktop />
            <HowWeWorkSectionDesktop />
            <ContactSection />





        </Box>
    );
}


function MotionBox({
    children,
    isActive,
    index,
}) {
    return (
        <motion.div
            initial={false}
            animate={{
                opacity: isActive
                    ? 1
                    : 0,

                y: isActive
                    ? 0
                    : index === 0
                        ? -80
                        : 80,

                scale: isActive
                    ? 1
                    : 0.98,
            }}
            transition={{
                duration: 0.65,
                ease: [
                    0.22,
                    1,
                    0.36,
                    1,
                ],
            }}
            style={{
                position:
                    "absolute",

                inset: 0,

                width: "100%",
                height: "100%",

                pointerEvents:
                    isActive
                        ? "auto"
                        : "none",
            }}
        >
            {children}
        </motion.div>
    );
}



// "use client";

// import { Box, Container, Typography } from "@mui/material";
// import { motion } from "framer-motion";

// import ModernBusinessScreens from "./ModernBusinessScreens";
// import banner_DV from "../../assets/home/banner_DV.png";
// import ServicesSection from "./ServicesSection";
// import CareerBenefitsSection from "./CareerBenefitsSection";
// import HowWeWorkSection from "./HowWeWorkSection";
// import HowWeWorkSectionDesktop from "./HowWeWorkSection_Desktop";
// import ContactSection from "./ContactSection";

// const MotionTypography = motion.create(Typography);

// export default function ModernBusinessSection() {
//     return (
//         <Box
//             component="section"
//             sx={{
//                 position: "relative",
//                 width: "100%",
//                 overflow: "visible",
//             }}
//         >

//             <Box
//                 sx={{
//                     position: "absolute",
//                     top: 0,
//                     left: 0,

//                     width: "100%",
//                     height: {
//                         xs: "100svh",
//                         md: "100svh",
//                     },


//                     px: {
//                         xs: 1.5,
//                         md: 2,
//                     },

//                     zIndex: 0,
//                     pointerEvents: "none",
//                 }}
//             >
//                 <Box
//                     sx={{
//                         position: "relative",

//                         width: "100%",
//                         height: "100%",

//                         overflow: "hidden",

//                         borderRadius: {
//                             xs: "0px",
//                             md: "0 0 22px 22px",
//                         },
//                     }}
//                 >
//                     <motion.img
//                         src={banner_DV}
//                         alt="Mahakali Infotek modern business office"
//                         initial={{
//                             scale: 1.06,
//                         }}
//                         animate={{
//                             scale: 1,
//                         }}
//                         transition={{
//                             duration: 2.2,
//                             ease: [0.22, 1, 0.36, 1],
//                         }}
//                         style={{
//                             display: "block",

//                             width: "100%",
//                             height: "100%",

//                             objectFit: "cover",
//                             objectPosition: "center",
//                         }}
//                     />


//                     <Box
//                         sx={{
//                             position: "absolute",
//                             inset: 0,

//                             background: {
//                                 xs:
//                                     "linear-gradient(180deg, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.5) 100%)",

//                                 md:
//                                     "linear-gradient(90deg, rgba(0,0,0,0.68) 0%, rgba(0,0,0,0.28) 48%, rgba(0,0,0,0.06) 100%)",

//                             },
//                         }}
//                     />
//                 </Box>
//             </Box>


//             <Box
//                 sx={{
//                     height: {
//                         xs: "170px",
//                         sm: "210px",
//                         md: "260px",
//                         lg: "285px",
//                     },
//                 }}
//             />


//             <Box
//                 sx={{
//                     position: "sticky",

//                     top: {
//                         xs: "75px",
//                         sm: "80px",
//                         md: "25px",
//                     },

//                     zIndex: 30,

//                     width: "100%",

//                     pointerEvents: "none",
//                 }}
//             >
//                 <Container
//                     maxWidth={false}
//                     sx={{
//                         maxWidth: "1440px",

//                         px: {
//                             xs: 3,
//                             sm: 5,
//                             md: 6,
//                             lg: 6,
//                         },
//                     }}
//                 >
//                     <MotionTypography
//                         initial={{
//                             opacity: 0,
//                             x: -70,
//                         }}
//                         animate={{
//                             opacity: 1,
//                             x: 0,
//                         }}
//                         transition={{
//                             duration: 3.6,
//                             delay: 0.30,
//                             ease: [0.22, 1, 0.36, 1],
//                         }}
//                         sx={{
//                             fontFamily:
//                                 '"Anton", "Arial Narrow", sans-serif',

//                             fontSize: {
//                                 xs: "30px",
//                                 sm: "42px",
//                                 md: "48px",
//                                 lg: "58px",
//                             },

//                             lineHeight: 0.95,
//                             fontWeight: 400,

//                             textTransform: "uppercase",

//                             letterSpacing: "0.5px",

//                             textShadow:
//                                 "0 2px 10px rgba(0,0,0,0.3)",
//                         }}
//                     >
//                         BUILT TO PARTNER WITH
//                     </MotionTypography>

//                     <MotionTypography
//                         initial={{
//                             opacity: 0,
//                             x: -70,
//                         }}
//                         animate={{
//                             opacity: 1,
//                             x: 0,
//                         }}
//                         transition={{
//                             duration: 3.6,
//                             delay: 0.30,
//                             ease: [0.22, 1, 0.36, 1],
//                         }}
//                         sx={{
//                             mt: {
//                                 xs: 1,
//                                 md: 1.5,
//                             },

//                             fontFamily:
//                                 '"Anton", "Arial Narrow", sans-serif',

//                             fontSize: {
//                                 xs: "30px",
//                                 sm: "42px",
//                                 md: "48px",
//                                 lg: "58px",
//                             },

//                             lineHeight: 0.95,

//                             fontWeight: 400,

//                             color: "#007A5A",

//                             textTransform: "uppercase",

//                             letterSpacing: "0.5px",

//                             textShadow:
//                                 "0 2px 10px rgba(0,0,0,0.3)",
//                         }}
//                     >
//                         MODERN BUSINESS
//                     </MotionTypography>
//                 </Container>
//             </Box>


//             <Container
//                 maxWidth={false}
//                 sx={{
//                     position: "relative",
//                     zIndex: 2,

//                     maxWidth: "1440px",

//                     px: {
//                         xs: 3,
//                         sm: 5,
//                         md: 6,
//                         lg: 6,
//                     },

//                     pt: {
//                         xs: 4,
//                         md: 4,
//                     },

//                     // complete first viewport
//                     minHeight: {
//                         xs: "calc(100svh - 300px)",
//                         md: "calc(100svh - 390px)",
//                     },

//                     display: "flex",
//                     alignItems: "flex-start",
//                 }}
//             >
//                 <MotionTypography
//                     initial={{
//                         opacity: 0,
//                         x: -60,
//                     }}
//                     animate={{
//                         opacity: 1,
//                         x: 0,
//                     }}
//                     transition={{
//                         duration: 3.6,
//                         delay: 0.30,
//                         ease: [0.22, 1, 0.36, 1],
//                     }}
//                     sx={{
//                         maxWidth: {
//                             xs: "100%",
//                             md: "780px",
//                         },

//                         fontFamily:
//                             '"Roboto Mono", monospace',

//                         fontSize: {
//                             xs: "12px",
//                             sm: "16px",
//                             md: "18px",
//                             lg: "20px",
//                         },

//                         lineHeight: {
//                             xs: 1.6,
//                             md: 1.75,
//                         },

//                         fontWeight: 400,

//                         textTransform: "uppercase",

//                         color: "#fff",
//                     }}
//                 >
//                     MAHAKALI INFOTEK IS A PARTNER TO MODERN
//                     BUSINESSES, BRINGING TOGETHER BUSINESS
//                     EXPERTISE, TECHNOLOGY AND EXECUTION. FROM
//                     SOLVING TODAY&apos;S CHALLENGES TO BUILDING
//                     WHAT&apos;S NEXT, WE WORK ALONGSIDE YOU AT
//                     EVERY STAGE OF THE JOURNEY.
//                 </MotionTypography>
//             </Container>


//             <ServicesSection isActive={true} />

//             <CareerBenefitsSection />
//             <HowWeWorkSectionDesktop />
//             <ContactSection />




//         </Box>
//     );
// }