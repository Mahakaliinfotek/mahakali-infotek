// import { Box, Container, Typography } from "@mui/material";
// import { motion } from "framer-motion";

// import ScrollStackCards from "./ScrollStackCards";

// const MotionBox = motion.create(Box);

// const howWeWorkItems = [
//     {
//         id: "discover",
//         title: "Discover",
//         description:
//             "We understand your vision, objectives, challenges and requirements through detailed discovery conversations and the right questions.",
//     },
//     {
//         id: "scope-plan",
//         title: "Scope & Plan",
//         description:
//             "We define the requirements, approach, deliverables and resources in detail, forming the basis for clear commercials and committed timelines.",
//     },
//     {
//         id: "execute",
//         title: "Execute",
//         description:
//             "We put the customised plan into action with the right expertise, capabilities and execution for your specific requirements.",
//     },
//     {
//         id: "review",
//         title: "Review",
//         description:
//             "We maintain regular interactions to share progress, gather feedback and make course corrections wherever required.",
//     },
//     {
//         id: "validate",
//         title: "Validate",
//         description:
//             "We review and validate the solution against your objectives, requirements and expectations before moving forward.",
//     },
//     {
//         id: "implement",
//         title: "Implement",
//         description:
//             "We implement the final solution with a clear rollout approach, defined responsibilities and committed timelines.",
//     },
//     {
//         id: "support",
//         title: "Support",
//         description:
//             "We stay involved beyond implementation where required, providing ongoing support, optimisation and the capabilities needed as your business evolves.",
//     },
// ];

// function HowWeWorkCard({
//     item,
//     isCovered = false,
// }) {
//     return (
//         <MotionBox
//             animate={{
//                 opacity: isCovered ? 0 : 1,
//                 scale: isCovered ? 0.98 : 1,
//             }}
//             transition={{
//                 duration: 0.4,
//                 ease: [0.22, 1, 0.36, 1],
//             }}
//             sx={{
//                 position: "relative",
//                 width: "100%",

//                 minHeight: {
//                     xs: "310px",
//                     sm: "380px",
//                     md: "420px",
//                 },

//                 overflow: "hidden",

//                 // NO BACKGROUND
//                 // main section gradient remains visible
//             }}
//         >
//             <Container
//                 maxWidth={false}
//                 sx={{
//                     position: "relative",

//                     maxWidth: "1440px",

//                     px: {
//                         xs: 3,
//                         sm: 5,
//                         md: 8,
//                     },

//                     py: {
//                         xs: 6,
//                         sm: 7,
//                         md: 8,
//                     },
//                 }}
//             >
//                 <MotionBox
//                     initial={{
//                         opacity: 0,
//                         x: -70,
//                     }}
//                     whileInView={{
//                         opacity: 1,
//                         x: 0,
//                     }}
//                     viewport={{
//                         once: true,
//                         amount: 0.3,
//                     }}
//                     transition={{
//                         duration: 0.75,
//                         ease: [0.22, 1, 0.36, 1],
//                     }}
//                 >
//                     <Typography
//                         component="h3"
//                         sx={{
//                             color: "#fff",

//                             fontFamily:
//                                 '"Anton", sans-serif',

//                             fontSize: {
//                                 xs: "30px",
//                                 sm: "38px",
//                                 md: "48px",
//                             },

//                             lineHeight: 1,
//                             fontWeight: 400,
//                             textTransform: "uppercase",

//                             mb: {
//                                 xs: 2.5,
//                                 md: 3,
//                             },
//                         }}
//                     >
//                         {item.title}
//                     </Typography>

//                     <Typography
//                         sx={{
//                             maxWidth: {
//                                 xs: "100%",
//                                 sm: "650px",
//                                 md: "760px",
//                             },

//                             color:
//                                 "rgba(255,255,255,0.92)",

//                             fontFamily:
//                                 '"Roboto Mono", monospace',

//                             fontSize: {
//                                 xs: "12px",
//                                 sm: "15px",
//                                 md: "17px",
//                             },

//                             lineHeight: {
//                                 xs: 1.55,
//                                 md: 1.6,
//                             },

//                             fontWeight: 400,
//                             textTransform: "uppercase",
//                         }}
//                     >
//                         {item.description}
//                     </Typography>
//                 </MotionBox>
//             </Container>
//         </MotionBox>
//     );
// }

// export default function HowWeWorkSection() {
//     return (
//         <Box
//             component="section"
//             id="how-we-work"
//             sx={{
//                 position: "relative",

//                 width: "100%",
//                 height: "100%",

//                 background:
//                     "linear-gradient(180deg, #000000 0%, #001510 45%, #002C22 100%)",

//                 color: "#fff",

//                 overflow: "hidden",
//             }}
//         >
//             {/* ================= FIXED LABEL ================= */}

//             <Container
//                 maxWidth={false}
//                 sx={{
//                     maxWidth: "1440px",

//                     px: {
//                         xs: 3,
//                         sm: 5,
//                         md: 8,
//                     },

//                     position: "absolute",

//                     top: {
//                         xs: 35,
//                         sm: 40,
//                         md: 45,
//                     },

//                     left: "50%",
//                     transform: "translateX(-50%)",

//                     width: "100%",

//                     zIndex: 30,

//                     pointerEvents: "none",
//                 }}
//             >
//                 <MotionBox
//                     initial={{
//                         opacity: 0,
//                         x: -50,
//                     }}
//                     animate={{
//                         opacity: 1,
//                         x: 0,
//                     }}
//                     transition={{
//                         duration: 0.7,
//                         ease: [0.22, 1, 0.36, 1],
//                     }}
//                 >
//                     <Typography
//                         sx={{
//                             fontFamily:
//                                 '"Roboto Mono", monospace',

//                             fontSize: {
//                                 xs: "12px",
//                                 sm: "14px",
//                                 md: "14px",
//                             },

//                             lineHeight: 1.2,

//                             fontWeight: 400,

//                             color: "#fff",

//                             textTransform:
//                                 "uppercase",

//                             letterSpacing:
//                                 "0.5px",
//                         }}
//                     >
//                         HOW WE WORK
//                     </Typography>
//                 </MotionBox>
//             </Container>

//             {/* ================= SCROLL CARDS ================= */}

//             <Box
//                 sx={{
//                     width: "100%",
//                     height: "100%",

//                     overflowY: "auto",

//                     pt: {
//                         xs: "0px",
//                         sm: "100px",
//                         md: "110px",
//                     },

//                     scrollbarWidth: "none",

//                     "&::-webkit-scrollbar": {
//                         display: "none",
//                     },
//                 }}
//             >
//                 <ScrollStackCards
//                     items={howWeWorkItems}

//                     stickyTop={{
//                         xs: 20,
//                         sm: 85,
//                         md: 95,
//                     }}

//                     cardTopOffset={{
//                         xs: 0,
//                         sm: 0,
//                         md: 0,
//                     }}

//                     scaleStep={0.018}

//                     cardViewportHeight={{
//                         xs: "20vh",
//                         sm: "50vh",
//                         md: "55vh",
//                     }}

//                     renderItem={(item, index) => (
//                         <HowWeWorkCard
//                             item={item}
//                             index={index}
//                         />
//                     )}
//                 />
//             </Box>
//         </Box>
//     );
// }

import { useEffect, useRef, useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";

import ScrollStackCards from "./ScrollStackCards";
import ScrollStackCards2 from "./ScrollStackCards2";
import GetInTouchSection from "./GetInTouchSection";

const MotionBox = motion.create(Box);

const howWeWorkItems = [
    {
        id: "discover",
        title: "Discover",
        description:
            "We understand your vision, objectives, challenges and requirements through detailed discovery conversations and the right questions.",
    },
    {
        id: "scope-plan",
        title: "Scope & Plan",
        description:
            "We define the requirements, approach, deliverables and resources in detail, forming the basis for clear commercials and committed timelines.",
    },
    {
        id: "execute",
        title: "Execute",
        description:
            "We put the customised plan into action with the right expertise, capabilities and execution for your specific requirements.",
    },
    {
        id: "review",
        title: "Review",
        description:
            "We maintain regular interactions to share progress, gather feedback and make course corrections wherever required.",
    },
    {
        id: "validate",
        title: "Validate",
        description:
            "We review and validate the solution against your objectives, requirements and expectations before moving forward.",
    },
    {
        id: "implement",
        title: "Implement",
        description:
            "We implement the final solution with a clear rollout approach, defined responsibilities and committed timelines.",
    },
    {
        id: "support",
        title: "Support",
        description:
            "We stay involved beyond implementation where required, providing ongoing support, optimisation and the capabilities needed as your business evolves.",
    },
];

function HowWeWorkCard({
    item,
    isCovered = false,
    cardRef,
}) {
    return (
        <MotionBox
            ref={cardRef}
            animate={{
                opacity: isCovered ? 0 : 1,
                y: isCovered ? -10 : 0,
                filter: isCovered
                    ? "blur(4px)"
                    : "blur(0px)",
            }}
            transition={{
                opacity: {
                    duration: 0.45,
                    ease: "easeOut",
                },
                y: {
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                },
                filter: {
                    duration: 0.4,
                },
            }}
            sx={{
                position: "relative",
                width: "100%",

                minHeight: {
                    xs: "310px",
                    sm: "380px",
                    md: "420px",
                },

                overflow: "hidden",

                pointerEvents: isCovered
                    ? "none"
                    : "auto",
            }}
        >
            <Container
                maxWidth={false}
                sx={{
                    position: "relative",

                    maxWidth: "1440px",

                    px: {
                        xs: 3,
                        sm: 5,
                        md: 8,
                    },

                    py: {
                        xs: 6,
                        sm: 7,
                        md: 8,
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
                        component="h3"
                        sx={{
                            color: "#fff",

                            fontFamily:
                                '"Anton", sans-serif',

                            fontSize: {
                                xs: "30px",
                                sm: "38px",
                                md: "48px",
                            },

                            lineHeight: 1,
                            fontWeight: 400,
                            textTransform: "uppercase",

                            mb: {
                                xs: 2.5,
                                md: 3,
                            },
                        }}
                    >
                        {item.title}
                    </Typography>

                    <Typography
                        sx={{
                            maxWidth: {
                                xs: "100%",
                                sm: "650px",
                                md: "760px",
                            },

                            color:
                                "rgba(255,255,255,0.92)",

                            fontFamily:
                                '"Roboto Mono", monospace',

                            fontSize: {
                                xs: "12px",
                                sm: "15px",
                                md: "17px",
                            },

                            lineHeight: {
                                xs: 1.55,
                                md: 1.6,
                            },

                            fontWeight: 400,
                            textTransform: "uppercase",
                        }}
                    >
                        {item.description}
                    </Typography>
                </MotionBox>
            </Container>
        </MotionBox>
    );
}

export default function HowWeWorkSection() {
    const scrollRef = useRef(null);
    const cardRefs = useRef([]);




    const [activeIndex, setActiveIndex] = useState(0);

    const isCompleteRef = useRef(false);



    useEffect(() => {
        const scrollContainer =
            scrollRef.current;

        if (!scrollContainer) return;

        const getStickyTop = () => {
            const width =
                window.innerWidth;

            if (width >= 900) {
                return 95;
            }

            if (width >= 600) {
                return 85;
            }

            return 20;
        };

        const handleScroll = () => {
            const containerRect =
                scrollContainer.getBoundingClientRect();

            const stickyTop =
                getStickyTop();

            const triggerY =
                containerRect.top +
                stickyTop;

            let reachedIndex = 0;

            cardRefs.current.forEach(
                (card, index) => {
                    if (!card) return;

                    const rect =
                        card.getBoundingClientRect();

                    if (
                        rect.top <=
                        triggerY + 5
                    ) {
                        reachedIndex =
                            index;
                    }
                }
            );

            setActiveIndex(
                reachedIndex
            );

            // =====================================
            // LAST CARD = SUPPORT
            // =====================================

            const lastIndex =
                howWeWorkItems.length - 1;

            const lastCard =
                cardRefs.current[
                lastIndex
                ];

            if (!lastCard) return;

            const lastRect =
                lastCard.getBoundingClientRect();

            const supportReachedTop =
                lastRect.top <=
                triggerY + 5;

            if (
                supportReachedTop &&
                !isCompleteRef.current
            ) {
                isCompleteRef.current =
                    true;

                /*
                 * Force inner container directly
                 * to its real end.
                 *
                 * Therefore no remaining
                 * invisible internal scroll.
                 */
                scrollContainer.scrollTop =
                    scrollContainer.scrollHeight -
                    scrollContainer.clientHeight;

                /*
                 * Stop inner container consuming
                 * downward scrolling.
                 */
                scrollContainer.style.overflowY =
                    "hidden";
            }
        };

        const handleWheel = (event) => {
            /*
             * SUPPORT has reached its position.
             *
             * DOWN:
             * don't consume scroll here.
             * Let outer page receive it.
             */
            if (
                isCompleteRef.current &&
                event.deltaY > 0
            ) {
                return;
            }

            /*
             * User scrolls UP:
             * unlock How We Work again.
             */
            if (
                isCompleteRef.current &&
                event.deltaY < 0
            ) {
                isCompleteRef.current =
                    false;

                scrollContainer.style.overflowY =
                    "auto";

                /*
                 * Slightly move inside the
                 * scroll container so native
                 * upward scrolling can continue.
                 */
                scrollContainer.scrollTop =
                    Math.max(
                        0,
                        scrollContainer.scrollTop -
                        2
                    );
            }
        };

        scrollContainer.addEventListener(
            "scroll",
            handleScroll,
            {
                passive: true,
            }
        );

        scrollContainer.addEventListener(
            "wheel",
            handleWheel,
            {
                passive: true,
            }
        );

        window.addEventListener(
            "resize",
            handleScroll
        );

        handleScroll();

        return () => {
            scrollContainer.removeEventListener(
                "scroll",
                handleScroll
            );

            scrollContainer.removeEventListener(
                "wheel",
                handleWheel
            );

            window.removeEventListener(
                "resize",
                handleScroll
            );
        };
    }, []);

    return (
        <Box
            component="section"
            id="how-we-work"
            sx={{


                position: "relative",
                width: "100%",
                height: "100%",

                overflow: "hidden",
            }}
        >
            {/* ================= FIXED LABEL ================= */}

            <Container
                maxWidth={false}
                sx={{
                    //  maxWidth: "1440px",

                    px: {
                        xs: 3,
                        sm: 5,
                        md: 8,
                    },

                    position: "absolute",

                    top: {
                        xs: 35,
                        sm: 40,
                        md: 45,
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
                <MotionBox
                    initial={{
                        opacity: 0,
                        x: -50,
                    }}
                    animate={{
                        opacity: 1,
                        x: 0,
                    }}
                    transition={{
                        duration: 0.7,
                        ease: [
                            0.22,
                            1,
                            0.36,
                            1,
                        ],
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

                            textTransform:
                                "uppercase",

                            letterSpacing:
                                "0.5px",
                        }}
                    >
                        HOW WE WORK
                    </Typography>
                </MotionBox>
            </Container>

            {/* ================= SCROLL CARDS ================= */}

            <Box
                ref={scrollRef}
                sx={{
                    width: "100%",
                    height: "100%",

                    overflowY: "auto",

                    pt: {
                        xs: "0px",
                        sm: "100px",
                        md: "110px",
                    },

                    scrollbarWidth:
                        "none",

                    "&::-webkit-scrollbar":
                    {
                        display:
                            "none",
                    },
                }}
            >
                <ScrollStackCards2
                    items={
                        howWeWorkItems
                    }

                    stickyTop={{
                        xs: 20,
                        sm: 85,
                        md: 95,
                    }}

                    cardTopOffset={{
                        xs: 0,
                        sm: 0,
                        md: 0,
                    }}

                    scaleStep={
                        0.018
                    }

                    cardViewportHeight={{
                        xs: "20vh",
                        sm: "50vh",
                        md: "55vh",
                    }}

                    renderItem={(
                        item,
                        index
                    ) => (
                        <HowWeWorkCard
                            item={
                                item
                            }

                            index={
                                index
                            }

                            cardRef={(
                                element
                            ) => {
                                cardRefs.current[
                                    index
                                ] =
                                    element;
                            }}

                            isCovered={
                                index <
                                activeIndex
                            }
                        />
                    )}
                />
            </Box>
        </Box>
    );
}