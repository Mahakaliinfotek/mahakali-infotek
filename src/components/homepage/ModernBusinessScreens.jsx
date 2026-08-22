// // import { Box, Container, Typography } from "@mui/material";
// // import { motion } from "framer-motion";

// // import bannerImge from "../../assets/home/bannerImge.png";
// // import ServicesSection from "./ServicesSection";
// // import CareerBenefitsSection from "./CareerBenefitsSection";
// // import HowWeWorkSection from "./HowWeWorkSection";

// // const MotionTypography = motion.create(Typography);

// // export default function ModernBusinessScreens({ activeIndex }) {
// //     return (
// //         <>


// //             <Screen
// //                 isActive={activeIndex === 0}
// //                 direction="up"
// //             >
// //                 <Box
// //                     sx={{
// //                         width: "100%",
// //                         height: "100%",
// //                         display: "flex",
// //                         flexDirection: "column",
// //                         background:
// //                             "linear-gradient(180deg, #000000 0%, #000000 70%, #003B2D 100%)",
// //                         overflow: "hidden",
// //                     }}
// //                 >
// //                     {/* TEXT AREA */}

// //                     <Container
// //                         maxWidth={false}
// //                         sx={{
// //                             maxWidth: "1440px",
// //                             width: "100%",

// //                             px: {
// //                                 xs: 3,
// //                                 sm: 5,
// //                                 md: 8,
// //                             },

// //                             pt: {
// //                                 xs: "120px",
// //                                 sm: "200px",
// //                                 md: "230px",
// //                             },

// //                             pb: {
// //                                 xs: 4,
// //                                 sm: 5,
// //                                 md: 6,
// //                             },

// //                             flexShrink: 0,
// //                         }}
// //                     >
// //                         <MotionTypography
// //                             initial={{
// //                                 opacity: 0,
// //                                 x: -80,
// //                             }}
// //                             animate={{
// //                                 opacity: 1,
// //                                 x: 0,
// //                             }}
// //                             transition={{
// //                                 duration: 0.98,
// //                                 ease: [
// //                                     0.22,
// //                                     1,
// //                                     0.36,
// //                                     1,
// //                                 ],
// //                             }}

// //                             sx={{
// //                                 maxWidth: {
// //                                     xs: "100%",
// //                                     md: "1050px",
// //                                 },

// //                                 fontFamily:
// //                                     '"Roboto Mono", monospace',

// //                                 fontSize: {
// //                                     xs: "12px",
// //                                     sm: "18px",
// //                                     md: "22px",
// //                                     lg: "25px",
// //                                 },

// //                                 lineHeight: {
// //                                     xs: 1.6,
// //                                     md: 1.55,
// //                                 },

// //                                 fontWeight: 400,
// //                                 textTransform: "uppercase",
// //                                 color: "#fff",
// //                             }}
// //                         >
// //                             MAHAKALI INFOTEK IS A PARTNER TO MODERN
// //                             BUSINESSES, BRINGING TOGETHER BUSINESS
// //                             EXPERTISE, TECHNOLOGY AND EXECUTION. FROM
// //                             SOLVING TODAY&apos;S CHALLENGES TO BUILDING
// //                             WHAT&apos;S NEXT, WE WORK ALONGSIDE YOU AT
// //                             EVERY STAGE OF THE JOURNEY.
// //                         </MotionTypography>
// //                     </Container>

// //                     {/* IMAGE AREA */}

// //                     <Box
// //                         sx={{
// //                             flex: 1,
// //                             width: "100%",
// //                             minHeight: 0,
// //                             overflow: "hidden",
// //                         }}
// //                     >
// //                         <motion.div
// //                             initial={false}
// //                             animate={{
// //                                 opacity:
// //                                     activeIndex === 0
// //                                         ? 1
// //                                         : 0,
// //                                 y:
// //                                     activeIndex === 0
// //                                         ? 0
// //                                         : 160,
// //                             }}
// //                             transition={{
// //                                 duration: 0.95,
// //                                 delay:
// //                                     activeIndex === 0
// //                                         ? 0.25
// //                                         : 0,
// //                                 ease: [0.22, 1, 0.36, 1],
// //                             }}
// //                             style={{
// //                                 width: "100%",
// //                                 height: "100%",
// //                             }}
// //                         >
// //                             <motion.img
// //                                 src={bannerImge}
// //                                 alt="Mahakali Infotek modern business office"
// //                                 initial={false}
// //                                 animate={{
// //                                     scale:
// //                                         activeIndex === 0
// //                                             ? 1
// //                                             : 1.06,
// //                                 }}
// //                                 transition={{
// //                                     duration: 1.1,
// //                                     ease: [0.22, 1, 0.36, 1],
// //                                 }}
// //                                 style={{
// //                                     display: "block",
// //                                     width: "100%",
// //                                     height: "100%",
// //                                     objectFit: "cover",
// //                                     objectPosition: "center",
// //                                 }}
// //                             />
// //                         </motion.div>
// //                     </Box>
// //                 </Box>
// //             </Screen>

// //             {/* ================= SCREEN 2 ================= */}
// //             {/* SERVICES */}

// //             <Screen
// //                 isActive={activeIndex === 1}
// //                 direction="down"
// //             >
// //                 <Box
// //                     sx={{
// //                         width: "100%",
// //                         height: "100%",

// //                         pt: {
// //                             xs: "150px",
// //                             sm: "210px",
// //                             md: "250px",
// //                         },

// //                         background:
// //                             "linear-gradient(180deg, #000000 0%, #001A14 50%, #003B2D 100%)",

// //                         overflow: "hidden",
// //                     }}
// //                 >
// //                     <ServicesSection
// //                         isActive={activeIndex === 1}
// //                     />
// //                 </Box>




// //             </Screen>

// //             {/* ================= SCREEN 3 ================= */}
// //             {/* CAREER BENEFITS / WHY CHOOSE US */}

// //             <Screen
// //                 isActive={activeIndex === 2}
// //                 direction="down"
// //             >
// //                 <Box
// //                     sx={{
// //                         pt: {
// //                             xs: "80px",
// //                             sm: "210px",
// //                             md: "250px",
// //                         },
// //                         width: "100%",
// //                         height: "100%",
// //                         overflowY: "auto",
// //                         background:
// //                             "linear-gradient(180deg, #000000 0%, #001A14 50%, #003B2D 100%)",


// //                         scrollbarWidth: "none",

// //                         "&::-webkit-scrollbar": {
// //                             display: "none",
// //                         },
// //                     }}
// //                 >
// //                     <CareerBenefitsSection />
// //                 </Box>
// //             </Screen>

// //             <Screen
// //                 isActive={activeIndex === 3}
// //                 direction="down"
// //             >
// //                 <Box
// //                     // sx={{
// //                     //     pt: {
// //                     //         xs: "80px",
// //                     //         sm: "210px",
// //                     //         md: "250px",
// //                     //     },

// //                     //     width: "100%",
// //                     //     height: "100%",
// //                     //     overflowY: "auto",
// //                     //     background: "linear-gradient(180deg, #000000 0%, #001A14 50%, #003B2D 100%)",


// //                     //     scrollbarWidth: "none",

// //                     //     "&::-webkit-scrollbar": {
// //                     //         display: "none",
// //                     //     },
// //                     // }}


// //                     sx={{
// //                         pt: {
// //                             xs: "80px",
// //                             sm: "210px",
// //                             md: "250px",
// //                         },
// //                         width: "100%",
// //                         height: "100%",
// //                         overflowY: "auto",


// //                         background:
// //                             "linear-gradient(180deg, #000000 0%, #001510 45%, #002C22 100%)",


// //                         scrollbarWidth: "none",

// //                         "&::-webkit-scrollbar": {
// //                             display: "none",
// //                         },
// //                     }}
// //                 >
// //                     <HowWeWorkSection />
// //                 </Box>
// //             </Screen>






// //         </>
// //     );
// // }

// // // function Screen({
// // //     children,
// // //     isActive,
// // //     direction = "down",
// // // }) {
// // //     return (
// // //         <motion.div
// // //             initial={false}
// // //             animate={{
// // //                 opacity: isActive ? 1 : 0,

// // //                 y: isActive
// // //                     ? 0
// // //                     : direction === "up"
// // //                         ? -80
// // //                         : 80,

// // //                 scale: isActive
// // //                     ? 1
// // //                     : 0.98,
// // //             }}
// // //             transition={{
// // //                 duration: 0.65,
// // //                 ease: [0.22, 1, 0.36, 1],
// // //             }}
// // //             style={{
// // //                 position: "absolute",
// // //                 inset: 0,
// // //                 width: "100%",
// // //                 height: "100%",

// // //                 pointerEvents:
// // //                     isActive
// // //                         ? "auto"
// // //                         : "none",

// // //                 zIndex:
// // //                     isActive
// // //                         ? 2
// // //                         : 1,
// // //             }}
// // //         >
// // //             {children}
// // //         </motion.div>
// // //     );
// // // }

// // function Screen({
// //     children,
// //     isActive,
// //     direction = "down",
// // }) {
// //     return (
// //         <motion.div
// //             initial={false}
// //             animate={{
// //                 opacity: isActive ? 1 : 0,

// //                 y: isActive
// //                     ? 0
// //                     : direction === "up"
// //                         ? "-18%"
// //                         : "18%",

// //                 scale: isActive
// //                     ? 1
// //                     : 0.96,

// //                 filter: isActive
// //                     ? "blur(0px)"
// //                     : "blur(4px)",
// //             }}
// //             transition={{
// //                 opacity: {
// //                     duration: 0.7,
// //                     ease: "easeInOut",
// //                 },

// //                 y: {
// //                     duration: 0.9,
// //                     ease: [0.22, 1, 0.36, 1],
// //                 },

// //                 scale: {
// //                     duration: 0.9,
// //                     ease: [0.22, 1, 0.36, 1],
// //                 },

// //                 filter: {
// //                     duration: 0.65,
// //                     ease: "easeOut",
// //                 },
// //             }}
// //             style={{
// //                 position: "absolute",
// //                 inset: 0,

// //                 width: "100%",
// //                 height: "100%",

// //                 pointerEvents:
// //                     isActive
// //                         ? "auto"
// //                         : "none",

// //                 zIndex:
// //                     isActive
// //                         ? 2
// //                         : 1,

// //                 willChange:
// //                     "transform, opacity, filter",
// //             }}
// //         >
// //             {children}
// //         </motion.div>
// //     );
// // }


// import { Box, Container, Typography } from "@mui/material";
// import { motion } from "framer-motion";

// import bannerImge from "../../assets/home/bannerImge.png";
// import ServicesSection from "./ServicesSection";
// import CareerBenefitsSection from "./CareerBenefitsSection";
// import HowWeWorkSection from "./HowWeWorkSection";
// import GetInTouchSection from "./GetInTouchSection";

// const MotionTypography = motion.create(Typography);

// export default function ModernBusinessScreens({ activeIndex }) {
//     return (
//         <>
//             {/* ================= SCREEN 1 ================= */}
//             {/* TEXT + IMAGE */}

//             <Screen
//                 index={0}
//                 activeIndex={activeIndex}
//             >
//                 <Box
//                     sx={{
//                         width: "100%",
//                         height: "100%",
//                         display: "flex",
//                         flexDirection: "column",

//                         // background:
//                         //     "linear-gradient(180deg, #000000 0%, #000000 70%, #003B2D 100%)",

//                         overflow: "hidden",
//                     }}
//                 >
//                     {/* TEXT AREA */}

//                     <Container
//                         maxWidth={false}
//                         sx={{
//                             maxWidth: "1440px",
//                             width: "100%",

//                             px: {
//                                 xs: 3,
//                                 sm: 5,
//                                 md: 8,
//                             },

//                             pt: {
//                                 xs: "120px",
//                                 sm: "200px",
//                                 md: "230px",
//                             },

//                             pb: {
//                                 xs: 4,
//                                 sm: 5,
//                                 md: 6,
//                             },

//                             flexShrink: 0,
//                         }}
//                     >
//                         <MotionTypography
//                             initial={{
//                                 opacity: 0,
//                                 x: -80,
//                             }}
//                             animate={{
//                                 opacity: 1,
//                                 x: 0,
//                             }}
//                             transition={{
//                                 duration: 1.1,
//                                 ease: [0.22, 1, 0.36, 1],
//                             }}
//                             sx={{
//                                 maxWidth: {
//                                     xs: "100%",
//                                     md: "1050px",
//                                 },

//                                 fontFamily:
//                                     '"Roboto Mono", monospace',

//                                 fontSize: {
//                                     xs: "12px",
//                                     sm: "18px",
//                                     md: "22px",
//                                     lg: "25px",
//                                 },

//                                 lineHeight: {
//                                     xs: 1.6,
//                                     md: 1.55,
//                                 },

//                                 fontWeight: 400,

//                                 textTransform:
//                                     "uppercase",

//                                 color: "#fff",
//                             }}
//                         >
//                             MAHAKALI INFOTEK IS A PARTNER TO MODERN
//                             BUSINESSES, BRINGING TOGETHER BUSINESS
//                             EXPERTISE, TECHNOLOGY AND EXECUTION. FROM
//                             SOLVING TODAY&apos;S CHALLENGES TO BUILDING
//                             WHAT&apos;S NEXT, WE WORK ALONGSIDE YOU AT
//                             EVERY STAGE OF THE JOURNEY.
//                         </MotionTypography>
//                     </Container>

//                     {/* IMAGE AREA */}

//                     <Box
//                         sx={{
//                             flex: 1,
//                             width: "100%",
//                             minHeight: 0,
//                             overflow: "hidden",
//                         }}
//                     >
//                         <motion.div
//                             initial={false}
//                             animate={{
//                                 y:
//                                     activeIndex === 0
//                                         ? 0
//                                         : -40,

//                                 scale:
//                                     activeIndex === 0
//                                         ? 1
//                                         : 1.03,
//                             }}
//                             transition={{
//                                 duration: 1.25,
//                                 ease: [0.22, 1, 0.36, 1],
//                             }}
//                             style={{
//                                 width: "100%",
//                                 height: "100%",
//                             }}
//                         >
//                             <motion.img
//                                 src={bannerImge}
//                                 alt="Mahakali Infotek modern business office"
//                                 initial={false}
//                                 animate={{
//                                     scale:
//                                         activeIndex === 0
//                                             ? 1
//                                             : 1.06,
//                                 }}
//                                 transition={{
//                                     duration: 1.4,
//                                     ease: [0.22, 1, 0.36, 1],
//                                 }}
//                                 style={{
//                                     display: "block",
//                                     width: "100%",
//                                     height: "100%",
//                                     objectFit: "cover",
//                                     objectPosition: "center",
//                                 }}
//                             />
//                         </motion.div>
//                     </Box>
//                 </Box>
//             </Screen>

//             {/* ================= SCREEN 2 ================= */}
//             {/* SERVICES */}

//             <Screen
//                 index={1}
//                 activeIndex={activeIndex}
//             >
//                 <Box
//                     sx={{
//                         width: "100%",
//                         height: "100%",

//                         pt: {
//                             xs: "150px",
//                             sm: "210px",
//                             md: "250px",
//                         },

//                         background:
//                             "linear-gradient(180deg, #000000 0%, #001A14 50%, #003B2D 100%)",

//                         overflow: "hidden",
//                     }}
//                 >
//                     <ServicesSection
//                         isActive={activeIndex === 1}
//                     />
//                 </Box>
//             </Screen>

//             {/* ================= SCREEN 3 ================= */}
//             {/* CAREER BENEFITS */}

//             <Screen
//                 index={2}
//                 activeIndex={activeIndex}
//             >
//                 <Box
//                     sx={{
//                         pt: {
//                             xs: "80px",
//                             sm: "210px",
//                             md: "250px",
//                         },

//                         width: "100%",
//                         height: "100%",

//                         overflowY: "auto",

//                         background:
//                             "linear-gradient(180deg, #000000 0%, #001A14 50%, #003B2D 100%)",

//                         scrollbarWidth: "none",

//                         "&::-webkit-scrollbar": {
//                             display: "none",
//                         },
//                     }}
//                 >
//                     <CareerBenefitsSection />
//                 </Box>
//             </Screen>

//             {/* ================= SCREEN 4 ================= */}
//             {/* HOW WE WORK */}

//             <Screen
//                 index={3}
//                 activeIndex={activeIndex}
//             >
//                 <Box
//                     sx={{
//                         pt: {
//                             xs: "100px",
//                             sm: "210px",
//                             md: "250px",
//                         },

//                         width: "100%",
//                         height: "100%",

//                         overflowY: "auto",


//                         // background:
//                         //     "linear-gradient(180deg, #000000 0%, #001510 45%, #002C22 100%)",

//                         scrollbarWidth: "none",

//                         "&::-webkit-scrollbar": {
//                             display: "none",
//                         },
//                     }}
//                 >
//                     <HowWeWorkSection />
//                 </Box>
//             </Screen>

//             <Screen
//                 index={4}
//                 activeIndex={activeIndex}
//             >
//                 <Box
//                     sx={{
//                         pt: {
//                             xs: "100px",
//                             sm: "210px",
//                             md: "250px",
//                         },

//                         width: "100%",
//                         height: "100%",

//                         overflowY: "auto",


//                         // background:
//                         //     "linear-gradient(180deg, #000000 0%, #001510 45%, #002C22 100%)",

//                         scrollbarWidth: "none",

//                         "&::-webkit-scrollbar": {
//                             display: "none",
//                         },
//                     }}
//                 >
//                     <GetInTouchSection />
//                 </Box>
//             </Screen>
//         </>
//     );
// }

// /* ===================================================== */
// /* PARALLAX SCREEN TRANSITION */
// /* ===================================================== */

// function Screen({
//     children,
//     index,
//     activeIndex,
// }) {
//     const isActive =
//         index === activeIndex;

//     const isPast =
//         index < activeIndex;

//     const isFuture =
//         index > activeIndex;

//     return (
//         <motion.div
//             initial={false}
//             animate={{
//                 /*
//                  * ACTIVE:
//                  * center
//                  *
//                  * PAST:
//                  * slowly move upward
//                  *
//                  * FUTURE:
//                  * wait below viewport
//                  */
//                 y: isActive
//                     ? "0%"
//                     : isPast
//                         ? "-28%"
//                         : "100%",

//                 /*
//                  * Previous screen fades slowly.
//                  * Future screen remains visible
//                  * while waiting below.
//                  */
//                 opacity: isActive
//                     ? 1
//                     : isPast
//                         ? 0
//                         : 1,

//                 /*
//                  * Slight depth / parallax feel.
//                  */
//                 scale: isActive
//                     ? 1
//                     : isPast
//                         ? 0.94
//                         : 1,

//                 /*
//                  * Very subtle blur while
//                  * previous screen leaves.
//                  */
//                 filter: isPast
//                     ? "blur(5px)"
//                     : "blur(0px)",
//             }}
//             transition={{
//                 y: {
//                     duration: 1.35,
//                     ease: [0.22, 1, 0.36, 1],
//                 },

//                 opacity: {
//                     duration: 1.05,
//                     ease: "easeInOut",
//                 },

//                 scale: {
//                     duration: 1.35,
//                     ease: [0.22, 1, 0.36, 1],
//                 },

//                 filter: {
//                     duration: 1,
//                     ease: "easeOut",
//                 },
//             }}
//             style={{
//                 position: "absolute",
//                 inset: 0,

//                 width: "100%",
//                 height: "100%",

//                 pointerEvents:
//                     isActive
//                         ? "auto"
//                         : "none",

//                 /*
//                  * Later screens sit above
//                  * previous screens.
//                  */
//                 zIndex: index + 1,

//                 willChange:
//                     "transform, opacity, filter",
//             }}
//         >
//             {children}
//         </motion.div>
//     );
// }

import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";

import bannerImge from "../../assets/home/bannerImge.png";
import ServicesSection from "./ServicesSection";
import CareerBenefitsSection from "./CareerBenefitsSection";
import HowWeWorkSection from "./HowWeWorkSection";
import GetInTouchSection from "./GetInTouchSection";

const MotionTypography = motion.create(Typography);

export default function ModernBusinessScreens({ activeIndex }) {
    return (
        <Box
            sx={{
                position: "relative",
                width: "100%",
                height: "100%",
                overflow: "hidden",

                // background:
                //     "linear-gradient(180deg, #000000 0%, #001510 45%, #002C22 100%)",


            }}
        >


            <Screen
                index={0}
                activeIndex={activeIndex}
            >
                <Box
                    sx={{
                        width: "100%",
                        height: "100%",

                        display: "flex",
                        flexDirection: "column",

                        overflow: "hidden",

                        background: "transparent",
                    }}
                >
                    {/* TEXT AREA */}

                    <Container
                        maxWidth={false}
                        sx={{
                            maxWidth: "1440px",
                            width: "100%",

                            px: {
                                xs: 3,
                                sm: 5,
                                md: 8,
                            },

                            pt: {
                                xs: "120px",
                                sm: "200px",
                                md: "230px",
                            },

                            pb: {
                                xs: 4,
                                sm: 5,
                                md: 6,
                            },

                            flexShrink: 0,
                        }}
                    >
                        <MotionTypography
                            initial={{
                                opacity: 0,
                                x: -80,
                            }}
                            animate={{
                                opacity: activeIndex === 0 ? 1 : 0,
                                x: activeIndex === 0 ? 0 : -40,
                            }}
                            transition={{
                                duration: 1.1,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            sx={{
                                maxWidth: {
                                    xs: "100%",
                                    md: "1050px",
                                },

                                fontFamily:
                                    '"Roboto Mono", monospace',

                                fontSize: {
                                    xs: "12px",
                                    sm: "18px",
                                    md: "22px",
                                    lg: "25px",
                                },

                                lineHeight: {
                                    xs: 1.6,
                                    md: 1.55,
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



                    <Box
                        sx={{
                            flex: 1,
                            width: "100%",
                            minHeight: 0,
                            overflow: "hidden",
                        }}
                    >
                        <motion.div
                            key={activeIndex} // replay animation every screen change
                            initial={{
                                y: "100%",
                                scale: 1.05,
                                opacity: 0,
                            }}
                            animate={{
                                y: "0%",
                                scale: 1,
                                opacity: 1,
                            }}
                            transition={{
                                duration: 1.2,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            style={{
                                width: "100%",
                                height: "100%",
                            }}
                        >
                            <motion.img
                                src={bannerImge}
                                alt="Mahakali Infotek modern business office"
                                initial={{
                                    scale: 1.08,
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
                        </motion.div>
                    </Box>
                </Box>
            </Screen>

            {/* ================= SCREEN 2 ================= */}
            {/* SERVICES */}

            <Screen
                index={1}
                activeIndex={activeIndex}
            >
                <Box
                    sx={{
                        width: "100%",
                        height: "100%",

                        pt: {
                            xs: "150px",
                            sm: "210px",
                            md: "250px",
                        },

                        overflow: "hidden",

                        background: "transparent",



                    }}
                >
                    <ServicesSection
                        isActive={activeIndex === 1}
                    />
                </Box>
            </Screen>

            {/* ================= SCREEN 3 ================= */}
            {/* CAREER BENEFITS */}

            <Screen
                index={2}
                activeIndex={activeIndex}
            >
                <Box
                    sx={{
                        pt: {
                            xs: "80px",
                            sm: "210px",
                            md: "250px",
                        },

                        width: "100%",
                        height: "100%",

                        overflowY: "auto",

                        background: "transparent",
                        //   background:
                        //     "linear-gradient(180deg, #000000 0%, #001510 45%, #002C22 100%)",


                        scrollbarWidth: "none",

                        "&::-webkit-scrollbar": {
                            display: "none",
                        },
                    }}
                >
                    <CareerBenefitsSection />
                </Box>
            </Screen>

            {/* ================= SCREEN 4 ================= */}
            {/* HOW WE WORK */}

            <Screen
                index={3}
                activeIndex={activeIndex}
            >
                <Box
                    sx={{
                        pt: {
                            xs: "100px",
                            sm: "210px",
                            md: "250px",
                        },

                        width: "100%",
                        height: "100%",

                        overflowY: "auto",

                        background: "transparent",

                        scrollbarWidth: "none",

                        "&::-webkit-scrollbar": {
                            display: "none",
                        },
                    }}
                >
                    <HowWeWorkSection />
                </Box>
            </Screen>

            {/* ================= SCREEN 5 ================= */}
            {/* GET IN TOUCH */}

            <Screen
                index={4}
                activeIndex={activeIndex}
            >
                <Box
                    sx={{
                        width: "100%",
                        height: "100%",

                        overflowY: "auto",

                        background: "transparent",

                        scrollbarWidth: "none",

                        "&::-webkit-scrollbar": {
                            display: "none",
                        },
                    }}
                >
                    <GetInTouchSection />
                </Box>
            </Screen>
        </Box>
    );
}

/* ===================================================== */
/* PARALLAX SCREEN TRANSITION */
/* ===================================================== */

function Screen({
    children,
    index,
    activeIndex,
}) {
    const isActive = index === activeIndex;
    const isPast = index < activeIndex;

    return (
        <motion.div
            initial={false}
            animate={{
                y: isActive
                    ? "0%"
                    : isPast
                        ? "-28%"
                        : "100%",

                opacity: isActive
                    ? 1
                    : isPast
                        ? 0
                        : 1,

                scale: isActive
                    ? 1
                    : isPast
                        ? 0.94
                        : 1,

                filter: isPast
                    ? "blur(5px)"
                    : "blur(0px)",
            }}
            transition={{
                y: {
                    duration: 1.35,
                    ease: [0.22, 1, 0.36, 1],
                },

                opacity: {
                    duration: 1.05,
                    ease: "easeInOut",
                },

                scale: {
                    duration: 1.35,
                    ease: [0.22, 1, 0.36, 1],
                },

                filter: {
                    duration: 1,
                    ease: "easeOut",
                },
            }}
            style={{
                position: "absolute",
                inset: 0,

                width: "100%",
                height: "100%",

                pointerEvents:
                    isActive
                        ? "auto"
                        : "none",

                zIndex: index + 1,

                willChange:
                    "transform, opacity, filter",
            }}
        >
            {children}
        </motion.div>
    );
}