

"use client";

import {
    useLayoutEffect,
    useRef,
    useState,
} from "react";

import {
    Box,
    Container,
    Typography,
} from "@mui/material";

import {
    motion,
    useScroll,
    useTransform,
    useSpring,
} from "framer-motion";

const MotionBox = motion.create(Box);

const steps = [
    {
        title: "DISCOVER",
        description:
            "WE UNDERSTAND YOUR VISION, OBJECTIVES, CHALLENGES AND REQUIREMENTS THROUGH DETAILED DISCOVERY CONVERSATIONS AND THE RIGHT QUESTIONS.",
    },
    {
        title: "SCOPE & PLAN",
        description:
            "WE DEFINE THE REQUIREMENTS, APPROACH, DELIVERABLES AND RESOURCES IN DETAIL, FORMING THE BASIS FOR CLEAR COMMERCIALS AND COMMITTED TIMELINES.",
    },
    {
        title: "EXECUTE",
        description:
            "WE PUT THE CUSTOMISED PLAN INTO ACTION WITH THE RIGHT EXPERTISE, CAPABILITIES AND RESOURCES.",
    },
    {
        title: "REVIEW",
        description:
            "WE MAINTAIN REGULAR INTERACTIONS TO SHARE PROGRESS, GATHER FEEDBACK AND MAKE COURSE CORRECTIONS WHEREVER REQUIRED.",
    },
    {
        title: "VALIDATE",
        description:
            "WE REVIEW THE WORK AGAINST THE AGREED REQUIREMENTS, QUALITY STANDARDS AND INTENDED OUTCOMES BEFORE MOVING TO IMPLEMENTATION.",
    },
    {
        title: "IMPLEMENT",
        description:
            "WE TAKE THE SOLUTION INTO IMPLEMENTATION, WHETHER THAT MEANS LAUNCHING, DEPLOYING, INTEGRATING OR PUTTING THE PLAN INTO ACTION.",
    },
    {
        title: "SUPPORT",
        description:
            "WE STAY INVOLVED BEYOND IMPLEMENTATION WHERE REQUIRED, PROVIDING ONGOING SUPPORT, OPTIMISATION AND THE CAPABILITIES NEEDED AS YOUR BUSINESS EVOLVES.",
    },
];

const clamp = (value, min, max) =>
    Math.min(
        Math.max(value, min),
        max
    );

const lerp = (
    from,
    to,
    amount
) =>
    from +
    (to - from) * amount;

const easeOutQuint = (value) => {
    const t = clamp(
        value,
        0,
        1
    );

    return (
        1 -
        Math.pow(
            1 - t,
            5
        )
    );
};

export default function HowWeWorkSection() {
    const sectionRef =
        useRef(null);

    const [layout, setLayout] =
        useState({
            sectionStart: 0,

            viewportHeight: 900,

            stepDistance: 620,

            animationDistance: 4300,

            totalDistance: 4650,

            animationTop: 275,

            settleY: 300,

            enterY: 850,

            gap: 210,
        });

    const { scrollY } =
        useScroll();


    useLayoutEffect(() => {
        const measure = () => {
            if (!sectionRef.current) {
                return;
            }

            const viewportHeight =
                window.innerHeight;

            const rect =
                sectionRef.current.getBoundingClientRect();

            const sectionStart =
                rect.top +
                window.scrollY;

            const stepDistance =
                viewportHeight * 0.9;

            /*
             * 7 items = only 6 transitions.
             */
            const animationDistance =
                stepDistance *
                (steps.length - 1);

            const endingHold =
                viewportHeight * 0.38;

            const animationTop =
                viewportHeight >= 850
                    ? 275
                    : 230;

            const availableHeight =
                viewportHeight -
                animationTop;

            const settleY =
                availableHeight * 0.48;

            const enterY =
                availableHeight + 130;

            const gap = clamp(
                viewportHeight * 0.235,
                190,
                235
            );

            setLayout({
                sectionStart,

                viewportHeight,

                stepDistance,

                animationDistance,

                totalDistance:
                    animationDistance +
                    endingHold,

                animationTop,

                settleY,

                enterY,

                gap,
            });
        };

        const frame =
            requestAnimationFrame(
                measure
            );

        window.addEventListener(
            "resize",
            measure
        );

        return () => {
            cancelAnimationFrame(
                frame
            );

            window.removeEventListener(
                "resize",
                measure
            );
        };
    }, []);


    const rawStage =
        useTransform(
            scrollY,

            [
                layout.sectionStart,

                layout.sectionStart +
                layout.animationDistance,
            ],

            [
                0,

                steps.length - 1,
            ],

            {
                clamp: true,
            }
        );



    const stage =
        useSpring(
            rawStage,
            {
                stiffness: 190,
                damping: 30,
                mass: 0.25,
            }
        );

    return (
        <Box
            ref={sectionRef}
            component="section"
            sx={{

                position:
                    "relative",

                width: "100%",

                height: {
                    xs: "auto",
                    md: `calc(100svh + ${layout.totalDistance}px)`,
                },

                // background: "#000",

                overflow:
                    "visible",
            }}
        >

            <Box
                sx={{

                    display: {
                        xs: "none",
                        md: "block",
                    },

                    position:
                        "sticky",

                    top: 0,

                    width: "100%",

                    height:
                        "100svh",

                    overflow:
                        "hidden",
                    // background:
                    //     "linear-gradient(107deg, #000 34.3%, #002219 100%)",


                }}
            >


                <Box
                    maxWidth={false}
                    sx={{
                        maxWidth:
                            "1600px",

                        position:
                            "absolute",

                        top: {
                            md: "180px",

                        },

                        left: "50%",

                        transform:
                            "translateX(-50%)",

                        width:
                            "100%",

                        px: {
                            md: 6,

                        },

                        zIndex: 20,
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily:
                                '"Roboto Mono", monospace',

                            fontSize: {
                                md: "14px",
                                lg: "16px",
                            },

                            lineHeight:
                                1,

                            fontWeight:
                                400,

                            textTransform:
                                "uppercase",

                            letterSpacing:
                                "0.5px",
                        }}
                    >
                        HOW WE WORK
                    </Typography>
                </Box>



                <Box
                    sx={{
                        position:
                            "absolute",


                        top:
                            `${layout.animationTop}px`,

                        left: 0,

                        right: 0,

                        bottom: 10,

                        width:
                            "100%",

                        overflow:
                            "hidden",

                        display:
                            "flex",

                        justifyContent:
                            "center",
                    }}
                >
                    <Box
                        sx={{
                            position:
                                "relative",

                            width:
                                "70%",

                            maxWidth:
                                "1400px",

                            height:
                                "150%",

                            mx: "auto",
                        }}
                    >
                        {steps.map(
                            (
                                step,
                                index
                            ) => (
                                <AnimatedStep
                                    // key={
                                    //     step.title
                                    // }
                                    // step={
                                    //     step
                                    // }
                                    // index={
                                    //     index
                                    // }
                                    // stage={
                                    //     stage
                                    // }
                                    // settleY={
                                    //     layout.settleY
                                    // }
                                    // enterY={
                                    //     layout.enterY
                                    // }
                                    // gap={
                                    //     layout.gap
                                    // }

                                    key={step.title}
                                    step={step}
                                    index={index}
                                    stage={stage}

                                    // FIRST ITEM near top
                                    // OTHER ITEMS center
                                    settleY={
                                        index === 0
                                            ? 250
                                            : layout.settleY
                                    }

                                    enterY={layout.enterY}
                                    gap={layout.gap}
                                />
                            )
                        )}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

/* =======================================================
   INDIVIDUAL ANIMATED STEP
======================================================= */

function AnimatedStep({
    step,

    index,

    stage,

    settleY,

    enterY,

    gap,
}) {

    const local =
        useTransform(
            stage,

            (value) =>
                value -
                index
        );


    const y =
        useTransform(
            local,

            (value) => {
                /*
                 * Waiting below.
                 */
                if (
                    value <= -1
                ) {
                    return enterY;
                }

                /*
                 * NEW ITEM ENTERS.
                 */
                if (
                    value > -1 &&
                    value < 0
                ) {
                    const progress =
                        easeOutQuint(
                            value +
                            1
                        );

                    return lerp(
                        enterY,

                        settleY,

                        progress
                    );
                }

                /*
                 * Existing item moves
                 * upward as new items arrive.
                 */
                return (
                    settleY -
                    value *
                    gap
                );
            }
        );



    const scale = useTransform(
        local,
        (value) => {
            /*
             * FUTURE ITEM
             * waiting below viewport
             *
             * Keep it BIG.
             */
            if (value <= -1) {
                return 1.9;
            }

            /*
             * ENTERING FROM BOTTOM
             *
             * BIG 1.9
             *      ↓
             * NORMAL 1
             */
            if (
                value > -1 &&
                value < 0
            ) {
                const progress =
                    easeOutQuint(
                        value + 1
                    );

                return lerp(
                    1.9,
                    1,
                    progress
                );
            }

            /*
             * Item is now moving
             * from CENTER -> TOP.
             */
            const currentY =
                settleY -
                value * gap;

            /*
             * CENTER / LOWER AREA
             *
             * Keep normal size.
             */
            if (currentY >= 180) {
                return 1;
            }

            /*
             * TOP AREA
             *
             * Start shrinking smoothly.
             *
             * currentY:
             *
             * 180px -> scale 1
             *   0px -> scale ~0.78
             * -80px -> scale ~0.70
             */
            const shrinkProgress =
                clamp(
                    (180 - currentY) /
                    260,
                    0,
                    1
                );

            return lerp(
                1,
                0.7,
                shrinkProgress
            );
        }
    );
    /* ==========================================
       MAIN OPACITY

       Fade in from bottom
       +
       fade out at top
    ========================================== */

    const opacity =
        useTransform(
            local,

            (value) => {
                /*
                 * Waiting below.
                 */
                if (
                    value <= -1
                ) {
                    return 0;
                }

                /*
                 * Incoming fade.
                 */
                if (
                    value > -1 &&
                    value <
                    -0.62
                ) {
                    return clamp(
                        (
                            value +
                            1
                        ) /
                        0.38,

                        0,

                        1
                    );
                }

                /*
                 * Still entering.
                 */
                if (
                    value < 0
                ) {
                    return 1;
                }

                const currentY =
                    settleY -
                    value *
                    gap;

                /*
                 * Fully visible.
                 */
                if (
                    currentY >=
                    80
                ) {
                    return 1;
                }

                /*
                 * =================================
                 * BYE-BYE FADE AT TOP
                 * =================================
                 */
                return clamp(
                    (
                        currentY +
                        100
                    ) /
                    180,

                    0,

                    1
                );
            }
        );


    const descriptionOpacity =
        useTransform(
            local,

            (value) => {
                /*
                 * Hidden initially.
                 */
                if (
                    value <=
                    -0.72
                ) {
                    return 0;
                }

                /*
                 * Fade in.
                 */
                if (
                    value >
                    -0.72 &&
                    value <
                    -0.25
                ) {
                    return clamp(
                        (
                            value +
                            0.72
                        ) /
                        0.47,

                        0,

                        1
                    );
                }

                /*
                 * Entering.
                 */
                if (
                    value < 0
                ) {
                    return 1;
                }

                const currentY =
                    settleY -
                    value *
                    gap;

                /*
                 * Normal.
                 */
                if (
                    currentY >=
                    90
                ) {
                    return 1;
                }

                /*
                 * Fade description
                 * while leaving top.
                 */
                return clamp(
                    (
                        currentY +
                        80
                    ) /
                    170,

                    0,

                    1
                );
            }
        );


    const descriptionY =
        useTransform(
            local,

            (value) => {
                if (
                    value <=
                    -0.7
                ) {
                    return 30;
                }

                if (
                    value >= 0
                ) {
                    return 0;
                }

                const progress =
                    clamp(
                        (
                            value +
                            0.7
                        ) /
                        0.7,

                        0,

                        1
                    );

                return lerp(
                    30,

                    0,

                    easeOutQuint(
                        progress
                    )
                );
            }
        );

    return (
        <MotionBox
            style={{
                y,

                scale,

                opacity,
            }}
            sx={{

                position:
                    "absolute",

                top: 0,

                left: 0,

                width:
                    "100%",

                display:
                    "flex",

                flexDirection:
                    "column",

                alignItems:
                    "center",

                justifyContent:
                    "center",

                textAlign:
                    "center",

                px: {
                    md: 5,
                    lg: 8,
                },

                transformOrigin:
                    "center center",

                willChange:
                    "transform, opacity",

                pointerEvents:
                    "none",
            }}
        >
            {/* TITLE */}

            <Typography
                sx={{
                    width:
                        "100%",

                    fontFamily:
                        '"Anton", "Arial Narrow", sans-serif',

                    fontSize: {
                        md: "43px",
                        lg: "48px",
                        xl: "52px",
                    },

                    lineHeight:
                        1,

                    fontWeight:
                        400,

                    color:
                        "#fff",

                    textAlign:
                        "center",

                    textTransform:
                        "uppercase",

                    whiteSpace:
                        "nowrap",

                    /*
                     * TITLE -> DESCRIPTION SPACE
                     */
                    mb: {
                        md: 2.8,
                        lg: 3,
                    },
                }}
            >
                {step.title}
            </Typography>

            {/* DESCRIPTION */}

            <motion.div
                style={{
                    opacity:
                        descriptionOpacity,

                    y:
                        descriptionY,

                    width:
                        "100%",
                }}
            >
                <Typography
                    sx={{
                        width:
                            "100%",

                        maxWidth: {
                            md: "980px",
                            lg: "1100px",
                            xl: "1150px",
                        },

                        mx: "auto",

                        fontFamily:
                            '"Roboto Mono", monospace',

                        fontSize: {
                            md: "15px",
                            lg: "17px",
                            xl: "18px",
                        },

                        lineHeight: {
                            md: 1.6,
                            lg: 1.65,
                        },

                        fontWeight:
                            400,

                        color:
                            "rgba(255,255,255,0.94)",

                        textTransform:
                            "uppercase",

                        textAlign:
                            "center",

                        letterSpacing:
                            "0.1px",
                    }}
                >
                    {
                        step.description
                    }
                </Typography>
            </motion.div>
        </MotionBox>
    );
}