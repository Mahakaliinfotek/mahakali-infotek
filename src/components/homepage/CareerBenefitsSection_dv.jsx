
import { useEffect, useRef, useState } from "react";
import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";

import UnifiedApproach from "../../assets/home/UnifiedApproach.webp";
import CommittedTimelines from "../../assets/home/CommittedTimelines.webp";
import FullTransparency from "../../assets/home/FullTransparency.webp";
import FutureReady from "../../assets/home/FutureReady.webp";
import SpecialistTeam from "../../assets/home/SpecialistTeam.webp";

import UnifiedApproach_dv from "../../assets/home/UnifiedApproach_dv.webp";
import CommittedTimelines_dv from "../../assets/home/CommittedTimelines_dv.webp";
import FullTransparency_dv from "../../assets/home/FullTransparency_dv.webp";
import FutureReady_dv from "../../assets/home/FutureReady_dv.webp";
import SpecialistTeam_dv from "../../assets/home/SpecialistTeam_dv.webp";

import ScrollStackCards2 from "./ScrollStackCards2";
import ScrollStackCards from "./ScrollStackCards";

const MotionBox = motion.create(Box);



function CareerBenefitCard({ item, index, cardRef }) {
    return (
        <MotionBox
            ref={cardRef}
            sx={{
                position: "relative",
                width: "100%",

                minHeight: {
                    xs: index === 4 ? "820px" : "620px",
                    sm: "700px",
                    md: "620px",
                },

                overflow: "hidden",
                background:
                    "linear-gradient(107deg, #000 34.3%, #002219 100%)",

                // bgcolor: "#000",
            }}
        >
            <Box
                component="img"
                src={item.image}
                alt={item.eyebrow}
                sx={{
                    position: "absolute",
                    inset: 0,

                    width: "100%",
                    height: "80%",

                    objectFit: "cover",
                    objectPosition: "center",

                    zIndex: 0,
                }}
            />

            <Box
                sx={{
                    position: "absolute",
                    inset: 0,

                    zIndex: 1,

                    pointerEvents: "none",

                    // background: {
                    //     xs: `
                    //         linear-gradient(
                    //             180deg,
                    //             rgba(0,0,0,0.98) 0%,
                    //             rgba(0,0,0,0.90) 20%,
                    //             rgba(0,0,0,0.60) 42%,
                    //             rgba(0,0,0,0.18) 65%,
                    //             rgba(0,0,0,0.15) 100%
                    //         )
                    //     `,
                    //     md: `
                    //         linear-gradient(
                    //             90deg,
                    //             rgba(0,0,0,0.95) 0%,
                    //             rgba(0,0,0,0.82) 35%,
                    //             rgba(0,0,0,0.35) 65%,
                    //             rgba(0,0,0,0.12) 100%
                    //         )
                    //     `,
                    // },
                }}
            />

            <Container
                maxWidth="xl"
                sx={{
                    position: "relative",
                    zIndex: 2,

                    height: "100%",
                    minHeight: "inherit",

                    px: {
                        xs: "24px !important",
                        sm: "38px !important",
                        md: "70px !important",
                    },

                    py: {
                        xs: 5,
                        sm: 6,
                        md: 3,
                    },
                    mt: { md: -10 },

                    display: "flex",

                    alignItems: {
                        xs: "flex-start",
                        md: "center",
                    },
                }}
            >
                <MotionBox
                    initial={{
                        opacity: 0,
                        x: -70,
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.3,
                    }}
                    transition={{
                        duration: 0.75,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >
                    <Typography
                        sx={{
                            color: "#fff",

                            fontFamily:
                                '"Anton", sans-serif',

                            fontSize: {
                                xs: "30px",
                                sm: "40px",
                                md: "52px",
                            },

                            lineHeight: 1,

                            fontWeight: 400,

                            textTransform:
                                "uppercase",

                            mb: {
                                xs: 2.5,
                                md: 3,
                            },
                        }}
                    >
                        {item.eyebrow}
                    </Typography>

                    <Typography
                        component="p"
                        sx={{
                            color:
                                "rgba(255,255,255,0.92)",

                            fontFamily:
                                '"Roboto Mono", monospace',

                            fontSize: {
                                xs: "13px",
                                sm: "16px",
                                md: "18px",
                            },

                            lineHeight: {
                                xs: 1.65,
                                md: 1.6,
                            },

                            fontWeight: 400,

                            textTransform:
                                "uppercase",

                            maxWidth: {
                                xs: "100%",
                                md: "580px",
                            },
                        }}
                    >
                        {item.description}
                    </Typography>
                </MotionBox>
            </Container>
        </MotionBox>
    );
}



export default function CareerBenefitsSectionDesktop() {
    const scrollRef = useRef(null);
    const cardRefs = useRef([]);
    const isMobile = useMediaQuery("(max-width:600px)");
    const [isLastCardReached, setIsLastCardReached] =
        useState(false);

    useEffect(() => {
        const scrollContainer = scrollRef.current;

        if (!scrollContainer) return;

        const handleScroll = () => {

            if (window.innerWidth >= 900) return;

            const lastCard =
                cardRefs.current[
                careerBenefits.length - 1
                ];

            if (!lastCard) return;

            const containerRect =
                scrollContainer.getBoundingClientRect();

            const lastRect =
                lastCard.getBoundingClientRect();

            const stickyTop =
                window.innerWidth >= 600
                    ? 80
                    : 50;

            const triggerY =
                containerRect.top + stickyTop;

            setIsLastCardReached(
                lastRect.top <= triggerY + 5
            );
        };

        scrollContainer.addEventListener(
            "scroll",
            handleScroll,
            { passive: true }
        );

        handleScroll();

        return () => {
            scrollContainer.removeEventListener(
                "scroll",
                handleScroll
            );
        };
    }, []);



    const careerBenefits = [
        {
            id: "specialist-team",
            eyebrow: "Specialist Team",
            description:
                "Business expertise from IIT Calcutta, experienced technology professionals from IITs, and access to specialists across relevant industries and functions.",
            image: isMobile ? SpecialistTeam : SpecialistTeam_dv,
        },
        {
            id: "unified-approach",
            eyebrow: "Unified Approach",
            description:
                "Every business is different. We combine business strategy, technology and execution to create customised solutions rather than relying on templates or one-size-fits-all approaches.",
            image: isMobile ? UnifiedApproach : UnifiedApproach_dv,
        },
        {
            id: "committed-timelines",
            eyebrow: "Committed Timelines",
            description:
                "We commit to realistic timelines upfront and deliver our commitments on time with clear milestones and accountability throughout.",
            image: isMobile ? CommittedTimelines : CommittedTimelines_dv,
        },
        {
            id: "full-transparency",
            eyebrow: "Full Transparency",
            description:
                "Clear scope, pricing, deliverables and timelines from the outset, with complete visibility whenever something changes along the way.",
            image: isMobile ? FullTransparency : FullTransparency_dv,
        },
        {
            id: "future-ready",
            eyebrow: "Future-Ready",
            description:
                "We look beyond the immediate requirement, building solutions and capabilities that can adapt as your business, customers and technology evolve.",
            image: isMobile ? FutureReady : FutureReady_dv,
        },
    ];

    return (
        <Box
            component="section"
            id="career-benefits"
            sx={{
                position: "relative",
                width: "100%",


                height: {
                    xs: "100%",
                    md: "auto",
                },

                minHeight: {
                    md: "100svh",
                },


                overflow: {
                    xs: "hidden",
                    md: "visible",
                },
            }}
        >

            <Container
                maxWidth={false}
                sx={{
                    px: {
                        xs: 3,
                        sm: 5,
                        md: 8,
                    },

                    position: {
                        xs: "absolute",
                        sm: "absolute",

                        // DESKTOP
                        md: "relative",
                    },

                    top: {
                        xs: 60,
                        sm: 30,

                        // DESKTOP:
                        // do not use top positioning
                        md: "auto",
                    },

                    left: {
                        xs: "50%",
                        sm: "50%",
                        md: "auto",
                    },

                    transform: {
                        xs: isLastCardReached
                            ? "translate(-50%, -120px)"
                            : "translateX(-50%)",

                        sm: isLastCardReached
                            ? "translate(-50%, -120px)"
                            : "translateX(-50%)",

                        md: "none",
                    },

                    width: "100%",

                    zIndex: 30,

                    pointerEvents: "none",

                    opacity: {
                        xs: isLastCardReached
                            ? 0
                            : 1,

                        sm: isLastCardReached
                            ? 0
                            : 1,

                        // DESKTOP:
                        // simply scroll away normally
                        md: 1,
                    },

                    transition: {
                        xs:
                            "transform 0.8s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.6s ease",

                        md: "none",
                    },

                    /*
                     * Desktop spacing:
                     * label starts underneath your
                     * BUILT TO PARTNER heading.
                     */
                    pt: {
                        md: 3,
                    },

                    pb: {
                        md: 5,
                    },
                }}
            >
                <MotionBox
                    initial={{
                        opacity: 0,
                        x: -50,
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        duration: 0.7,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily:
                                '"Roboto Mono", monospace',

                            fontSize: {
                                xs: "12px",
                                sm: "14px",
                                md: "14px",
                            },

                            lineHeight: 1.2,
                            fontWeight: 400,
                            color: "#fff",

                            textTransform: "uppercase",
                        }}
                    >
                        WHY CHOOSE US?
                    </Typography>
                </MotionBox>
            </Container>

            {/* =========================================
                CARDS
            ========================================= */}

            <Box
                ref={scrollRef}
                sx={{
                    width: "100%",

                    px: { md: 2 },



                    height: {
                        xs: "100%",
                        md: "auto",
                    },

                    overflowY: {
                        xs: "auto",

                        // CRITICAL
                        md: "visible",
                    },

                    overflowX: {
                        xs: "hidden",
                        md: "visible",
                    },

                    pt: {
                        xs: "10px",
                        sm: "90px",


                        md: 0,
                    },

                    scrollbarWidth: "none",

                    "&::-webkit-scrollbar": {
                        display: "none",
                    },
                }}
            >
                <ScrollStackCards
                    items={careerBenefits}

                    stickyTop={{
                        xs: 50,
                        sm: 80,
                        md: 240,
                    }}

                    cardTopOffset={{
                        xs: 0,
                        sm: 0,
                        md: 0,
                    }}

                    scaleStep={0.018}

                    cardViewportHeight={{

                        xs: "100vh",
                        sm: "78vh",


                        md: "71svh",
                    }}

                    renderItem={(item, index) => (
                        <CareerBenefitCard
                            item={item}
                            index={index}
                            cardRef={(element) => {
                                cardRefs.current[index] =
                                    element;
                            }}
                        />
                    )}
                />
            </Box>
        </Box>
    );
}