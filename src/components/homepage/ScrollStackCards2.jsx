// import { useRef } from "react";
// import Box from "@mui/material/Box";

// import {
//     motion,
//     useScroll,
//     useSpring,
//     useTransform,
// } from "framer-motion";

// const MotionBox = motion.create(Box);

// export default function ScrollStackCards2({
//     items = [],
//     renderItem,

//     stickyTop = {
//         xs: 70,
//         sm: 80,
//         md: 90,
//     },

//     cardTopOffset = {
//         xs: 0,
//         sm: 0,
//         md: 0,
//     },

//     scaleStep = 0.025,

//     cardViewportHeight = {
//         xs: "75vh",
//         sm: "70vh",
//         md: "70vh",
//     },

//     /*
//      * Gives final cards enough runway
//      * to reach the sticky position.
//      *
//      * It DOES NOT appear as blank space
//      * because final card remains sticky.
//      */
//     endHoldHeight = {
//         xs: "85vh",
//         sm: "70vh",
//         md: "65vh",
//     },
// }) {
//     const containerRef = useRef(null);

//     const { scrollYProgress } = useScroll({
//         target: containerRef,
//         offset: [
//             "start start",
//             "end end",
//         ],
//     });

//     if (
//         !items.length ||
//         typeof renderItem !== "function"
//     ) {
//         return null;
//     }

//     return (
//         <Box
//             ref={containerRef}
//             sx={{
//                 position: "relative",
//                 width: "100%",
//             }}
//         >
//             {items.map((item, index) => {
//                 const targetScale = Math.max(
//                     0.85,
//                     1 -
//                     (items.length -
//                         index -
//                         1) *
//                     scaleStep
//                 );

//                 return (
//                     <StackCard
//                         key={`${item.id ||
//                             item.type ||
//                             "card"
//                             }-${index}`}
//                         item={item}
//                         index={index}
//                         progress={
//                             scrollYProgress
//                         }
//                         range={[
//                             index /
//                             items.length,
//                             1,
//                         ]}
//                         targetScale={
//                             targetScale
//                         }
//                         stickyTop={
//                             stickyTop
//                         }
//                         cardTopOffset={
//                             cardTopOffset
//                         }
//                         cardViewportHeight={
//                             cardViewportHeight
//                         }
//                         renderItem={
//                             renderItem
//                         }
//                     />
//                 );
//             })}

//             {/* ================================= */}
//             {/* FINAL STICKY RUNWAY */}
//             {/* ================================= */}

//             <Box
//                 aria-hidden="true"
//                 sx={{
//                     height:
//                         endHoldHeight,

//                     width: "100%",

//                     pointerEvents:
//                         "none",
//                 }}
//             />
//         </Box>
//     );
// }

// function StackCard({
//     item,
//     index,
//     progress,
//     range,
//     targetScale,
//     stickyTop,
//     cardTopOffset,
//     cardViewportHeight,
//     renderItem,
// }) {
//     const scale = useTransform(
//         progress,
//         range,
//         [1, targetScale]
//     );

//     const smoothScale = useSpring(
//         scale,
//         {
//             stiffness: 120,
//             damping: 30,
//         }
//     );

//     return (
//         <Box
//             sx={{
//                 /*
//                  * Every card stays sticky,
//                  * including IMPLEMENT + SUPPORT.
//                  */
//                 position: "sticky",

//                 top: stickyTop,

//                 height:
//                     cardViewportHeight,

//                 display: "flex",

//                 alignItems:
//                     "flex-start",

//                 justifyContent:
//                     "center",

//                 /*
//                  * Don't clip cards.
//                  */
//                 contain: "layout",

//                 overflow:
//                     "visible",

//                 mb: 0,
//                 // GAP BETWEEN CARDS
//                 mb: {
//                     xs: 5,
//                     sm: 6,
//                     md: 7,
//                 },

//                 zIndex:
//                     index + 1,
//             }}
//         >
//             <MotionBox
//                 style={{
//                     scale:
//                         smoothScale,

//                     transformOrigin:
//                         "top center",

//                     willChange:
//                         "transform",
//                 }}
//                 sx={{
//                     position:
//                         "relative",

//                     top: {
//                         xs: `${index *
//                             (cardTopOffset.xs ||
//                                 0)
//                             }px`,

//                         sm: `${index *
//                             (cardTopOffset.sm ||
//                                 0)
//                             }px`,

//                         md: `${index *
//                             (cardTopOffset.md ||
//                                 0)
//                             }px`,
//                     },

//                     width: "100%",

//                     zIndex:
//                         index + 1,
//                 }}
//             >
//                 {renderItem(
//                     item,
//                     index
//                 )}
//             </MotionBox>
//         </Box>
//     );
// }

import { useRef } from "react";
import Box from "@mui/material/Box";

import {
    motion,
    useScroll,
    useSpring,
    useTransform,
} from "framer-motion";

const MotionBox = motion.create(Box);

export default function ScrollStackCards2({
    items = [],
    renderItem,

    stickyTop = {
        xs: 70,
        sm: 80,
        md: 90,
    },

    cardTopOffset = {
        xs: 0,
        sm: 0,
        md: 0,
    },

    scaleStep = 0.025,

    cardViewportHeight = {
        xs: "75vh",
        sm: "70vh",
        md: "70vh",
    },
}) {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: [
            "start start",
            "end end",
        ],
    });

    if (
        !items.length ||
        typeof renderItem !== "function"
    ) {
        return null;
    }

    return (
        <Box
            ref={containerRef}
            sx={{
                position: "relative",
                width: "100%",

                // IMPORTANT:
                // no fake bottom runway
                pb: 0,
                mb: 0,
            }}
        >
            {items.map((item, index) => {
                const isLast =
                    index === items.length - 1;

                const targetScale = Math.max(
                    0.85,
                    1 -
                    (items.length -
                        index -
                        1) *
                    scaleStep
                );

                return (
                    <StackCard
                        key={`${item.id ||
                            item.type ||
                            "card"
                            }-${index}`}
                        item={item}
                        index={index}
                        isLast={isLast}
                        progress={
                            scrollYProgress
                        }
                        range={[
                            index /
                            items.length,
                            1,
                        ]}
                        targetScale={
                            targetScale
                        }
                        stickyTop={
                            stickyTop
                        }
                        cardTopOffset={
                            cardTopOffset
                        }
                        cardViewportHeight={
                            cardViewportHeight
                        }
                        renderItem={
                            renderItem
                        }
                    />
                );
            })}
        </Box>
    );
}

function StackCard({
    item,
    index,
    isLast,
    progress,
    range,
    targetScale,
    stickyTop,
    cardTopOffset,
    cardViewportHeight,
    renderItem,
}) {
    const scale = useTransform(
        progress,
        range,
        [1, targetScale]
    );

    const smoothScale = useSpring(
        scale,
        {
            stiffness: 120,
            damping: 30,
        }
    );

    /*
     * Only last card:
     *
     * During the final part of scroll,
     * move SUPPORT upward toward its
     * final position without requiring
     * another 85vh spacer.
     */
    const lastCardY = useTransform(
        progress,
        [
            Math.max(
                0,
                (index - 0.75) /
                Math.max(
                    1,
                    index + 1
                )
            ),
            1,
        ],
        isLast
            ? ["35vh", "0vh"]
            : ["0vh", "0vh"]
    );

    const smoothLastCardY =
        useSpring(lastCardY, {
            stiffness: 90,
            damping: 28,
            mass: 0.9,
        });

    return (
        <Box
            sx={{
                position: "sticky",

                top: stickyTop,

                /*
                 * Normal cards create
                 * the stack runway.
                 *
                 * Last card doesn't create
                 * another 100vh / 85vh area.
                 */
                height: isLast
                    ? {
                        xs: "55vh",
                        sm: "50vh",
                        md: "45vh",
                    }
                    : cardViewportHeight,

                display: "flex",

                alignItems:
                    "flex-start",

                justifyContent:
                    "center",

                overflow:
                    "visible",

                /*
                 * Gap between cards.
                 */
                mb: isLast
                    ? 0
                    : {
                        xs: 5,
                        sm: 6,
                        md: 7,
                    },

                zIndex:
                    index + 1,
            }}
        >
            <MotionBox
                style={{
                    scale:
                        smoothScale,

                    y: isLast
                        ? smoothLastCardY
                        : 0,

                    transformOrigin:
                        "top center",

                    willChange:
                        "transform",
                }}
                sx={{
                    position:
                        "relative",

                    top: {
                        xs: `${index *
                            (cardTopOffset.xs ||
                                0)
                            }px`,

                        sm: `${index *
                            (cardTopOffset.sm ||
                                0)
                            }px`,

                        md: `${index *
                            (cardTopOffset.md ||
                                0)
                            }px`,
                    },

                    width: "100%",

                    zIndex:
                        index + 1,
                }}
            >
                {renderItem(
                    item,
                    index
                )}
            </MotionBox>
        </Box>
    );
}