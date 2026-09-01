

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

//                 // IMPORTANT:
//                 // no fake bottom runway
//                 pb: 0,
//                 mb: 0,
//             }}
//         >
//             {items.map((item, index) => {
//                 const isLast =
//                     index === items.length - 1;

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
//                         isLast={isLast}
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
//         </Box>
//     );
// }

// function StackCard({
//     item,
//     index,
//     isLast,
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

//     /*
//      * Only last card:
//      *
//      * During the final part of scroll,
//      * move SUPPORT upward toward its
//      * final position without requiring
//      * another 85vh spacer.
//      */
//     const lastCardY = useTransform(
//         progress,
//         [
//             Math.max(
//                 0,
//                 (index - 0.75) /
//                 Math.max(
//                     1,
//                     index + 1
//                 )
//             ),
//             1,
//         ],
//         isLast
//             ? ["35vh", "0vh"]
//             : ["0vh", "0vh"]
//     );

//     const smoothLastCardY =
//         useSpring(lastCardY, {
//             stiffness: 90,
//             damping: 28,
//             mass: 0.9,
//         });

//     return (
//         <Box
//             sx={{
//                 position: "sticky",

//                 top: stickyTop,

//                 /*
//                  * Normal cards create
//                  * the stack runway.
//                  *
//                  * Last card doesn't create
//                  * another 100vh / 85vh area.
//                  */
//                 height: isLast
//                     ? {
//                         xs: "55vh",
//                         sm: "50vh",
//                         md: "45vh",
//                     }
//                     : cardViewportHeight,

//                 display: "flex",

//                 alignItems:
//                     "flex-start",

//                 justifyContent:
//                     "center",

//                 overflow:
//                     "visible",

//                 /*
//                  * Gap between cards.
//                  */
//                 mb: isLast
//                     ? 0
//                     : {
//                         xs: 5,
//                         sm: 6,
//                         md: 7,
//                     },

//                 zIndex:
//                     index + 1,
//             }}
//         >
//             <MotionBox
//                 style={{
//                     scale:
//                         smoothScale,

//                     y: isLast
//                         ? smoothLastCardY
//                         : 0,

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

                // No extra bottom runway
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
     * LAST CARD ONLY
     *
     * Start the last card lower so there
     * is more space between the previous
     * card content and SUPPORT.
     *
     * Increase 48vh if you want even
     * more space.
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
            ? ["8vh", "0vh"]
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
                 * LAST CARD ONLY
                 *
                 * Give it a bigger vertical runway
                 * so it can sit lower and still
                 * animate upward smoothly.
                 */
                height: isLast
                    ? {
                        xs: "70vh",
                        sm: "62vh",
                        md: "58vh",
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
                 * Normal card gap.
                 *
                 * Last card does not need
                 * an additional margin-bottom.
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

                    /*
                     * Apply vertical movement
                     * only to the last card.
                     */
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