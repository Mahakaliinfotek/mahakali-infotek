// import {
//     Box,
//     Container,
//     Stack,
//     Typography,
// } from "@mui/material";

// import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
// import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
// import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";

// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import { motion } from "framer-motion";

// const MotionBox = motion.create(Box);

// const contactData = [
//     {
//         label: "ADDRESS",
//         icon: <LocationOnOutlinedIcon />,
//         value: (
//             <>
//                 Door No. 43-4-12/1, 2nd Floor, Vyshnavi
//                 <br />
//                 Magnum Opp. Indian Oil, Dondaparthy,
//                 <br />
//                 Railway New Colony, Visakhapatnam - 530016,
//                 <br />
//                 Andhra Pradesh, India
//             </>
//         ),
//     },

//     {
//         label: "PHONE",
//         icon: <PhoneOutlinedIcon />,
//         value: "0891-2539553, 033 40067940",
//     },

//     {
//         label: "MAIL",
//         icon: <MailOutlineRoundedIcon />,
//         value: "admin@mahakaliinfotek.com",
//     },
// ];

// const FormField = ({
//     label,
//     placeholder,
//     type = "text",
//     multiline = false,
// }) => {
//     return (
//         <Box
//             sx={{
//                 width: "100%",
//             }}
//         >
//             <Typography
//                 sx={{
//                     fontFamily:
//                         '"Roboto Mono", monospace',

//                     fontSize: {
//                         xs: "12px",
//                         md: "14px",
//                     },

//                     color: "#00A878",

//                     textTransform: "uppercase",

//                     mb: {
//                         xs: 1.5,
//                         md: 2,
//                     },
//                 }}
//             >
//                 {label}
//             </Typography>

//             {multiline ? (
//                 <Box
//                     component="textarea"
//                     placeholder={placeholder}
//                     rows={3}
//                     sx={{
//                         width: "100%",

//                         resize: "none",

//                         border: "none",
//                         outline: "none",

//                         borderBottom:
//                             "1px solid rgba(255,255,255,0.12)",

//                         bgcolor: "transparent",

//                         color: "#fff",

//                         fontFamily:
//                             '"Roboto Mono", monospace',

//                         fontSize: {
//                             xs: "14px",
//                             md: "17px",
//                         },

//                         lineHeight: 1.6,

//                         pb: 2,

//                         "&::placeholder": {
//                             color:
//                                 "rgba(255,255,255,0.52)",

//                             opacity: 1,
//                         },
//                     }}
//                 />
//             ) : (
//                 <Box
//                     component="input"
//                     type={type}
//                     placeholder={placeholder}
//                     sx={{
//                         width: "100%",

//                         border: "none",
//                         outline: "none",

//                         borderBottom:
//                             "1px solid rgba(255,255,255,0.12)",

//                         bgcolor: "transparent",

//                         color: "#fff",

//                         fontFamily:
//                             '"Roboto Mono", monospace',

//                         fontSize: {
//                             xs: "14px",
//                             md: "17px",
//                         },

//                         pb: 1.8,

//                         "&::placeholder": {
//                             color:
//                                 "rgba(255,255,255,0.52)",

//                             opacity: 1,
//                         },
//                     }}
//                 />
//             )}
//         </Box>
//     );
// };

// export default function ContactSection() {
//     return (
//         <Box
//             component="section"
//             id="contact-us"
//             sx={{
//                 position: "relative",
//                 width: "100%",
//                 mb: 0,
//                 overflow: "hidden",
//                 "&::before": {
//                     content: '""',
//                     position: "absolute",
//                     width: {
//                         xs: "420px",
//                         md: "960px",
//                     },
//                     height: {
//                         xs: "420px",
//                         md: "260px",
//                     },

//                     borderRadius: "50%",

//                     left: {
//                         xs: "-280px",
//                         md: "-420px",
//                         lg: "-500px",
//                     },

//                     top: {
//                         xs: "80px",
//                         md: "10px",

//                     },

//                     background: `
//                 radial-gradient(
//                     circle,
//                     rgba(0, 128, 96, 0.72) 0%,
//                     rgba(0, 120, 90, 0.48) 28%,
//                     rgba(0, 95, 72, 0.26) 46%,
//                     rgba(0, 70, 54, 0.10) 62%,
//                     transparent 76%
//                 )
//             `,

//                     filter: "blur(40px)",

//                     pointerEvents: "none",

//                     zIndex: 0,
//                 },

//             }}
//         >
//             <Box
//                 maxWidth={false}
//                 sx={{
//                     maxWidth: "1760px",

//                     minHeight: "auto",
//                     px: {
//                         xs: 3,
//                         sm: 5,
//                         md: 7,
//                     },

//                     display: {
//                         xs: "block",
//                         md: "grid",
//                     },

//                     gridTemplateColumns: {
//                         md: "1fr 1fr",
//                     },

//                     gap: {
//                         xs: 8,
//                         md: 10,
//                         lg: 14,
//                     },

//                     alignItems: "center",
//                 }}
//             >

//                 <Box
//                     sx={{


//                         display: "flex",
//                         flexDirection: "column",

//                         justifyContent: "space-between",


//                     }}
//                 >
//                     <Box>
//                         <Typography
//                             sx={{
//                                 fontFamily:
//                                     '"Roboto Mono", monospace',

//                                 fontSize: {
//                                     xs: "17px",
//                                     md: "20px",
//                                 },

//                                 letterSpacing: "0.5px",

//                                 mb: {
//                                     xs: 7,
//                                     md: 5,
//                                 },
//                             }}
//                         >
//                             GET IN TOUCH
//                         </Typography>

//                         <Stack
//                             spacing={{
//                                 xs: 4,
//                                 md: 2,
//                             }}
//                         >
//                             {contactData.map(
//                                 (item) => (
//                                     <Stack
//                                         key={
//                                             item.label
//                                         }
//                                         direction="row"
//                                         spacing={{
//                                             xs: 2,
//                                             md: 3,
//                                         }}
//                                         alignItems="flex-start"
//                                     >
//                                         {/* ICON */}

//                                         <Box
//                                             sx={{
//                                                 width: {
//                                                     xs: 52,
//                                                     md: 44,
//                                                 },

//                                                 height: {
//                                                     xs: 52,
//                                                     md: 44,
//                                                 },

//                                                 borderRadius:
//                                                     "50%",

//                                                 bgcolor:
//                                                     "#007D62",

//                                                 flexShrink: 0,

//                                                 display:
//                                                     "flex",

//                                                 alignItems:
//                                                     "center",

//                                                 justifyContent:
//                                                     "center",

//                                                 "& svg": {
//                                                     fontSize: {
//                                                         xs: 27,
//                                                         md: 34,
//                                                     },

//                                                     color:
//                                                         "#fff",
//                                                 },
//                                             }}
//                                         >
//                                             {
//                                                 item.icon
//                                             }
//                                         </Box>

//                                         {/* TEXT */}

//                                         <Box
//                                             sx={{
//                                                 pt: 0.4,
//                                             }}
//                                         >
//                                             <Typography
//                                                 sx={{
//                                                     fontFamily:
//                                                         '"Roboto Mono", monospace',

//                                                     color:
//                                                         "#00A878",

//                                                     fontSize: {
//                                                         xs: "12px",
//                                                         md: "14px",
//                                                     },

//                                                     mb: 1,
//                                                 }}
//                                             >
//                                                 {
//                                                     item.label
//                                                 }
//                                             </Typography>

//                                             <Typography
//                                                 sx={{
//                                                     fontFamily:
//                                                         '"Roboto Mono", monospace',

//                                                     fontSize: {
//                                                         xs: "14px",
//                                                         sm: "15px",
//                                                         md: "17px",
//                                                     },

//                                                     lineHeight:
//                                                         1.45,

//                                                     color:
//                                                         "rgba(255,255,255,0.95)",
//                                                 }}
//                                             >
//                                                 {
//                                                     item.value
//                                                 }
//                                             </Typography>
//                                         </Box>
//                                     </Stack>
//                                 )
//                             )}
//                         </Stack>

//                         {/* SOCIAL */}

//                         <Box
//                             sx={{
//                                 mt: {
//                                     xs: 7,
//                                     md: 5,
//                                 },
//                             }}
//                         >
//                             <Typography
//                                 sx={{
//                                     fontFamily:
//                                         '"Roboto Mono", monospace',

//                                     fontSize: {
//                                         xs: "16px",
//                                         md: "19px",
//                                     },

//                                     mb: 3,
//                                 }}
//                             >
//                                 FOLLOW US
//                             </Typography>

//                             <Stack
//                                 direction="row"
//                                 spacing={2.5}
//                             >
//                                 <SocialIcon>
//                                     <LinkedInIcon />
//                                 </SocialIcon>

//                                 <SocialIcon>
//                                     <TwitterIcon />
//                                 </SocialIcon>

//                                 <SocialIcon>
//                                     <InstagramIcon />
//                                 </SocialIcon>
//                             </Stack>
//                         </Box>
//                     </Box>

//                     {/* BOTTOM LINKS */}

//                     <Stack
//                         direction={{
//                             xs: "column",
//                             sm: "row",
//                         }}
//                         spacing={{
//                             xs: 2,
//                             sm: 10,
//                             md: 18,
//                         }}
//                         sx={{
//                             mt: {
//                                 xs: 7,
//                                 md: 5,
//                             },
//                         }}
//                     >
//                         <FooterLink href="/privacy-policy">
//                             PRIVACY POLICY
//                         </FooterLink>

//                         <FooterLink>
//                             TERMS & CONDITIONS
//                         </FooterLink>
//                     </Stack>
//                 </Box>

//                 {/* ==================================
//                     RIGHT FORM
//                 ================================== */}

//                 <MotionBox
//                     initial={{
//                         opacity: 0,
//                         y: 120,
//                         scale: 0.97,
//                     }}
//                     whileInView={{
//                         opacity: 1,
//                         y: 0,
//                         scale: 1,
//                     }}
//                     viewport={{
//                         once: true,
//                         amount: 0.2,
//                     }}
//                     transition={{
//                         duration: 1,
//                         ease: [0.22, 1, 0.36, 1],
//                     }}
//                     sx={{
//                         width: "100%",

//                         bgcolor: "#0B110F",

//                         border:
//                             "1px solid rgba(255,255,255,0.14)",

//                         borderRadius: {
//                             xs: "18px",
//                             md: "22px",
//                         },

//                         px: {
//                             xs: 3,
//                             sm: 5,
//                             md: 6,
//                         },

//                         py: {
//                             xs: 5,
//                             md: 6,
//                         },

//                         willChange:
//                             "transform, opacity",
//                     }}
//                 >
//                     <Typography
//                         sx={{
//                             fontFamily:
//                                 '"Anton", sans-serif',

//                             fontSize: {
//                                 xs: "30px",
//                                 md: "32px",
//                             },

//                             lineHeight: 1,

//                             textTransform: "uppercase",

//                             mb: {
//                                 xs: 5,
//                                 md: 2,
//                             },
//                         }}
//                     >
//                         SEND US A QUERY
//                     </Typography>

//                     <Stack
//                         spacing={{
//                             xs: 4,
//                             md: 2.2,
//                         }}
//                     >
//                         <FormField
//                             label="FULL NAME"
//                             placeholder="e.g. Priya Loha"
//                         />

//                         <FormField
//                             label="EMAIL ADDRESS"
//                             placeholder="e.g. Loha@example.com"
//                             type="email"
//                         />

//                         <FormField
//                             label="PHONE NUMBER"
//                             placeholder="e.g. +91 8291 908 290"
//                             type="tel"
//                         />

//                         <FormField
//                             label="YOUR MESSAGE"
//                             placeholder="Describe your project, objectives, or questions..."
//                             multiline
//                         />

//                         {/* BUTTON */}

//                         <Box
//                             component="button"
//                             type="button"
//                             sx={{
//                                 position: "relative",

//                                 width: "100%",

//                                 minHeight: {
//                                     xs: 58,
//                                     md: 50,
//                                 },

//                                 border: "none",

//                                 borderRadius:
//                                     "999px",

//                                 bgcolor:
//                                     "#007D62",

//                                 color: "#fff",

//                                 cursor: "pointer",

//                                 fontFamily:
//                                     '"Roboto Mono", monospace',

//                                 fontSize: {
//                                     xs: "15px",
//                                     md: "18px",
//                                 },

//                                 fontWeight: 600,

//                                 transition:
//                                     "background 0.3s ease, transform 0.3s ease",

//                                 "&:hover": {
//                                     bgcolor:
//                                         "#009474",

//                                     transform:
//                                         "translateY(-2px)",
//                                 },
//                             }}
//                         >
//                             SUBMIT QUERY

//                             <Typography
//                                 component="span"
//                                 sx={{
//                                     position:
//                                         "absolute",

//                                     right: {
//                                         xs: 24,
//                                         md: 32,
//                                     },

//                                     top: "50%",

//                                     transform:
//                                         "translateY(-50%)",

//                                     fontFamily:
//                                         '"Roboto Mono", monospace',

//                                     fontSize:
//                                         "28px",

//                                     fontWeight:
//                                         300,

//                                     lineHeight: 1,
//                                 }}
//                             >
//                                 +
//                             </Typography>
//                         </Box>
//                     </Stack>
//                 </MotionBox>
//             </Box>
//         </Box>
//     );
// }

// function SocialIcon({ children }) {
//     return (
//         <Box
//             component="a"
//             href="#"
//             sx={{
//                 width: {
//                     xs: 58,
//                     md: 50,
//                 },

//                 height: {
//                     xs: 58,
//                     md: 50,
//                 },

//                 borderRadius: "50%",

//                 bgcolor: "#fff",

//                 color: "#003D31",

//                 display: "flex",

//                 alignItems: "center",
//                 justifyContent: "center",

//                 textDecoration: "none",

//                 transition:
//                     "transform 0.3s ease, background 0.3s ease",

//                 "& svg": {
//                     fontSize: {
//                         xs: 28,
//                         md: 34,
//                     },
//                 },

//                 "&:hover": {
//                     transform:
//                         "translateY(-5px)",

//                     bgcolor: "#00A878",
//                     color: "#fff",
//                 },
//             }}
//         >
//             {children}
//         </Box>
//     );
// }

// function FooterLink({ href, children }) {
//     return (
//         <Typography
//             component="a"
//             href={href}
//             sx={{
//                 width: "fit-content",

//                 fontFamily:
//                     '"Roboto Mono", monospace',

//                 fontSize: {
//                     xs: "14px",
//                     md: "17px",
//                 },

//                 color: "#007D62",

//                 textDecoration:
//                     "underline",

//                 textUnderlineOffset:
//                     "4px",

//                 transition:
//                     "color 0.3s ease",

//                 "&:hover": {
//                     color: "#00A878",
//                 },
//             }}
//         >
//             {children}
//         </Typography>
//     );
// }

import {
    Box,
    Container,
    Stack,
    Typography,
} from "@mui/material";

import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

import { motion } from "framer-motion";

import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toast";
import { useState } from "react";
import XIcon from "@mui/icons-material/X";

const MotionBox = motion.create(Box);

const API_URL =
    "https://api-dev.indiazona.in/user-service/public/email-enquiry";

const contactData = [
    {
        label: "ADDRESS",
        icon: <LocationOnOutlinedIcon />,
        value: (
            <>
                Door No. 43-4-12/1, 2nd Floor, Vyshnavi
                <br />
                Magnum Opp. Indian Oil, Dondaparthy,
                <br />
                Railway New Colony, Visakhapatnam - 530016,
                <br />
                Andhra Pradesh, India
            </>
        ),
    },

    {
        label: "PHONE",
        icon: <PhoneOutlinedIcon />,
        value: "0891-2539553, 033 40067940",
    },

    {
        label: "MAIL",
        icon: <MailOutlineRoundedIcon />,
        value: "admin@mahakaliinfotek.com",
    },
];

// const FormField = ({
//     label,
//     placeholder,
//     type = "text",
//     multiline = false,
//     name,
//     value,
//     onChange,
//     onBlur,
//     error,
// }) => {
//     return (
//         <Box
//             sx={{
//                 width: "100%",
//             }}
//         >
//             <Typography
//                 sx={{
//                     fontFamily:
//                         '"Roboto Mono", monospace',

//                     fontSize: {
//                         xs: "12px",
//                         md: "14px",
//                     },

//                     color: "#00A878",

//                     textTransform: "uppercase",

//                     mb: {
//                         xs: 1.5,
//                         md: 2,
//                     },
//                 }}
//             >
//                 {label}
//             </Typography>

//             {multiline ? (
//                 <Box
//                     component="textarea"
//                     name={name}
//                     value={value}
//                     onChange={onChange}
//                     onBlur={onBlur}
//                     placeholder={placeholder}
//                     rows={3}
//                     sx={{
//                         width: "100%",

//                         resize: "none",

//                         border: "none",
//                         outline: "none",

//                         borderBottom:
//                             "1px solid rgba(255,255,255,0.12)",

//                         bgcolor: "transparent",

//                         color: "#fff",

//                         fontFamily:
//                             '"Roboto Mono", monospace',

//                         fontSize: {
//                             xs: "14px",
//                             md: "17px",
//                         },

//                         lineHeight: 1.6,

//                         pb: 2,

//                         "&::placeholder": {
//                             color:
//                                 "rgba(255,255,255,0.52)",

//                             opacity: 1,
//                         },
//                     }}
//                 />
//             ) : (
//                 <Box
//                     component="input"
//                     type={type}
//                     name={name}
//                     value={value}
//                     onChange={onChange}
//                     onBlur={onBlur}
//                     placeholder={placeholder}
//                     sx={{
//                         width: "100%",

//                         border: "none",
//                         outline: "none",

//                         borderBottom:
//                             "1px solid rgba(255,255,255,0.12)",

//                         bgcolor: "transparent",

//                         color: "#fff",

//                         fontFamily:
//                             '"Roboto Mono", monospace',

//                         fontSize: {
//                             xs: "14px",
//                             md: "17px",
//                         },

//                         pb: 1.8,

//                         "&::placeholder": {
//                             color:
//                                 "rgba(255,255,255,0.52)",

//                             opacity: 1,
//                         },
//                     }}
//                 />
//             )}

//             {error && (
//                 <Typography
//                     sx={{
//                         mt: 0.8,
//                         color: "#ff6b6b",
//                         fontFamily:
//                             '"Roboto Mono", monospace',
//                         fontSize: "11px",
//                     }}
//                 >
//                     {error}
//                 </Typography>
//             )}
//         </Box>
//     );
// };

const FormField = ({
    label,
    placeholder,
    type = "text",
    multiline = false,
    name,
    value,
    onChange,
    onBlur,
    error,
}) => {
    const [isFocused, setIsFocused] =
        useState(false);

    const isActive =
        isFocused || Boolean(value);

    const handleBlur = (event) => {
        setIsFocused(false);

        if (onBlur) {
            onBlur(event);
        }
    };

    return (
        <Box
            sx={{
                width: "100%",
            }}
        >
            <Box
                sx={{
                    position: "relative",

                    width: "100%",

                    border: error
                        ? "1px solid #ff6b6b"
                        : isFocused
                            ? "1px solid #00A878"
                            : "1px solid rgba(255,255,255,0.18)",

                    borderRadius: "10px",

                    bgcolor:
                        "rgba(255,255,255,0.02)",

                    transition:
                        "border-color 0.3s ease",
                }}
            >
                {/* FLOATING LABEL */}

                {isActive && (
                    <Typography
                        sx={{
                            position:
                                "absolute",

                            top: "-9px",

                            left: "16px",

                            px: 0.8,

                            bgcolor:
                                "#0B110F",

                            zIndex: 2,

                            fontFamily:
                                '"Roboto Mono", monospace',

                            fontSize: {
                                xs: "10px",
                                md: "11px",
                            },

                            color:
                                "#00A878",

                            textTransform:
                                "uppercase",

                            lineHeight: 1.4,
                        }}
                    >
                        {label}
                    </Typography>
                )}

                {multiline ? (
                    <Box
                        component="textarea"

                        name={name}

                        value={value}

                        onChange={onChange}

                        onFocus={() =>
                            setIsFocused(
                                true
                            )
                        }

                        onBlur={
                            handleBlur
                        }

                        placeholder={
                            isActive
                                ? placeholder
                                : label
                        }

                        rows={3}

                        sx={{
                            display:
                                "block",

                            width: "100%",

                            resize: "none",

                            border: "none",

                            outline:
                                "none",

                            bgcolor:
                                "transparent",

                            color: "#fff",

                            px: {
                                xs: 2,
                                md: 2.2,
                            },

                            pt: {
                                xs: 2,
                                md: 2.1,
                            },

                            pb: {
                                xs: 2,
                                md: 2.1,
                            },

                            fontFamily:
                                '"Roboto Mono", monospace',

                            fontSize: {
                                xs: "14px",
                                md: "16px",
                            },

                            lineHeight:
                                1.6,

                            "&::placeholder":
                            {
                                color:
                                    isActive
                                        ? "rgba(255,255,255,0.45)"
                                        : "#00A878",

                                opacity: 1,

                                textTransform:
                                    isActive
                                        ? "none"
                                        : "uppercase",
                            },
                        }}
                    />
                ) : (
                    <Box
                        component="input"

                        type={type}

                        name={name}

                        value={value}

                        onChange={onChange}

                        onFocus={() =>
                            setIsFocused(
                                true
                            )
                        }

                        onBlur={
                            handleBlur
                        }

                        placeholder={
                            isActive
                                ? placeholder
                                : label
                        }

                        sx={{
                            display:
                                "block",

                            width: "100%",

                            border: "none",

                            outline:
                                "none",

                            bgcolor:
                                "transparent",

                            color: "#fff",

                            px: {
                                xs: 2,
                                md: 2.2,
                            },

                            py: {
                                xs: 2,
                                md: 2.1,
                            },

                            fontFamily:
                                '"Roboto Mono", monospace',

                            fontSize: {
                                xs: "14px",
                                md: "16px",
                            },

                            "&::placeholder":
                            {
                                color:
                                    isActive
                                        ? "rgba(255,255,255,0.45)"
                                        : "#00A878",

                                opacity: 1,

                                textTransform:
                                    isActive
                                        ? "none"
                                        : "uppercase",
                            },
                        }}
                    />
                )}
            </Box>

            {error && (
                <Typography
                    sx={{
                        mt: 0.7,

                        ml: 1,

                        color:
                            "#ff6b6b",

                        fontFamily:
                            '"Roboto Mono", monospace',

                        fontSize:
                            "11px",
                    }}
                >
                    {error}
                </Typography>
            )}
        </Box>
    );
};
export default function ContactSection() {
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            message: "",
        },

        validationSchema: Yup.object({
            name: Yup.string()
                .trim()
                .min(
                    2,
                    "Name must contain at least 2 characters"
                )
                .max(
                    80,
                    "Name cannot exceed 80 characters"
                )
                .required(
                    "Name is required"
                ),

            email: Yup.string()
                .trim()
                .email(
                    "Enter a valid email address"
                )
                .required(
                    "Email is required"
                ),

            phone: Yup.string()
                .transform((value) =>
                    typeof value ===
                        "string"
                        ? value.replace(
                            /[\s-]/g,
                            ""
                        )
                        : value
                )
                .matches(
                    /^[0-9+()]+$/,
                    "Enter a valid phone number"
                )
                .min(
                    7,
                    "Phone number is too short"
                )
                .max(
                    15,
                    "Phone number is too long"
                )
                .required(
                    "Phone number is required"
                ),

            message: Yup.string()
                .trim()
                .min(
                    10,
                    "Message must contain at least 10 characters"
                )
                .max(
                    2000,
                    "Message cannot exceed 2000 characters"
                )
                .required(
                    "Message is required"
                ),
        }),

        onSubmit: async (
            values,
            {
                resetForm,
                setSubmitting,
            }
        ) => {
            try {
                const payload = {
                    form_type:
                        "enquiry",

                    name:
                        values.name.trim(),

                    email:
                        values.email
                            .trim()
                            .toLowerCase(),

                    phone:
                        values.phone.trim(),

                    description:
                        values.message.trim(),

                    enquired_company:
                        "Mahakali Infotek",
                };

                const response =
                    await axios.post(
                        API_URL,
                        payload,
                        {
                            headers: {
                                "Content-Type":
                                    "application/json",
                            },
                        }
                    );

                toast.success(
                    response?.data
                        ?.message ||
                    "Query submitted successfully!"
                );

                resetForm();
            } catch (error) {
                console.error(
                    "Contact form submission failed:",
                    error
                );

                const message =
                    error?.response
                        ?.data
                        ?.message ||
                    "Failed to submit your query. Please try again.";

                toast.error(
                    message
                );
            } finally {
                setSubmitting(
                    false
                );
            }
        },
    });

    return (
        <Box
            component="section"
            id="contact-us"
            sx={{
                position:
                    "relative",
                width: "100%",
                mb: 0,
                overflow:
                    "hidden",

                "&::before": {
                    content: '""',

                    position:
                        "absolute",

                    width: {
                        xs: "420px",
                        md: "960px",
                    },

                    height: {
                        xs: "420px",
                        md: "260px",
                    },

                    borderRadius:
                        "50%",

                    left: {
                        xs: "-280px",
                        md: "-420px",
                        lg: "-500px",
                    },

                    top: {
                        xs: "90px",
                        md: "20px",
                    },

                    background: `
                        radial-gradient(
                            circle,
                            rgba(0, 128, 96, 0.72) 0%,
                            rgba(0, 120, 90, 0.48) 28%,
                            rgba(0, 95, 72, 0.26) 46%,
                            rgba(0, 70, 54, 0.10) 62%,
                            transparent 76%
                        )
                    `,

                    filter:
                        "blur(40px)",

                    pointerEvents:
                        "none",

                    zIndex: 0,
                },
            }}
        >
            <Box
                maxWidth={false}
                sx={{
                    maxWidth:
                        "1760px",

                    minHeight:
                        "auto",

                    px: {
                        xs: 3,
                        sm: 5,
                        md: 7,
                    },

                    display: {
                        xs: "block",
                        md: "grid",
                    },

                    gridTemplateColumns:
                    {
                        md: "1fr 1fr",
                    },

                    gap: {
                        xs: 8,
                        md: 10,
                        lg: 14,
                    },
                    mt: 4,

                    alignItems:
                        "center",
                }}
            >
                <Box
                    sx={{
                        display:
                            "flex",

                        flexDirection:
                            "column",

                        justifyContent:
                            "space-between",
                    }}
                >
                    <Box>
                        <Typography
                            sx={{
                                fontFamily:
                                    '"Roboto Mono", monospace',

                                fontSize: {
                                    xs: "17px",
                                    md: "20px",
                                },

                                letterSpacing:
                                    "0.5px",

                                mb: {
                                    xs: 7,
                                    md: 5,
                                },
                            }}
                        >
                            GET IN TOUCH
                        </Typography>

                        <Stack
                            spacing={{
                                xs: 4,
                                md: 2,
                            }}
                        >
                            {contactData.map(
                                (
                                    item
                                ) => (
                                    <Stack
                                        key={
                                            item.label
                                        }
                                        direction="row"
                                        spacing={{
                                            xs: 2,
                                            md: 3,
                                        }}
                                        alignItems="flex-start"
                                    >
                                        <Box
                                            sx={{
                                                width: {
                                                    xs: 52,
                                                    md: 44,
                                                },

                                                height: {
                                                    xs: 52,
                                                    md: 44,
                                                },

                                                borderRadius:
                                                    "50%",

                                                bgcolor:
                                                    "#007D62",

                                                flexShrink: 0,

                                                display:
                                                    "flex",

                                                alignItems:
                                                    "center",

                                                justifyContent:
                                                    "center",

                                                "& svg":
                                                {
                                                    fontSize:
                                                    {
                                                        xs: 27,
                                                        md: 34,
                                                    },

                                                    color:
                                                        "#fff",
                                                },
                                            }}
                                        >
                                            {
                                                item.icon
                                            }
                                        </Box>

                                        <Box
                                            sx={{
                                                pt: 0.4,
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    fontFamily:
                                                        '"Roboto Mono", monospace',

                                                    color:
                                                        "#00A878",

                                                    fontSize:
                                                    {
                                                        xs: "12px",
                                                        md: "14px",
                                                    },

                                                    mb: 1,
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

                                                    fontSize:
                                                    {
                                                        xs: "14px",
                                                        sm: "15px",
                                                        md: "17px",
                                                    },

                                                    lineHeight:
                                                        1.45,

                                                    color:
                                                        "rgba(255,255,255,0.95)",
                                                }}
                                            >
                                                {
                                                    item.value
                                                }
                                            </Typography>
                                        </Box>
                                    </Stack>
                                )
                            )}
                        </Stack>

                        <Box
                            sx={{
                                mt: {
                                    xs: 7,
                                    md: 5,
                                },
                            }}
                        >
                            <Typography
                                sx={{
                                    fontFamily:
                                        '"Roboto Mono", monospace',

                                    fontSize: {
                                        xs: "16px",
                                        md: "19px",
                                    },

                                    mb: 3,
                                }}
                            >
                                FOLLOW US
                            </Typography>

                            <Stack
                                direction="row"
                                spacing={
                                    2.5
                                }
                            >
                                <SocialIcon>
                                    <LinkedInIcon />
                                </SocialIcon>

                                <SocialIcon>
                                    <XIcon />
                                </SocialIcon>

                                <SocialIcon>
                                    <InstagramIcon />
                                </SocialIcon>
                            </Stack>
                        </Box>
                    </Box>

                    <Stack
                        direction={{
                            xs: "column",
                            sm: "row",
                        }}
                        spacing={{
                            xs: 2,
                            sm: 10,
                            md: 18,
                        }}
                        sx={{
                            mt: {
                                xs: 7,
                                md: 5,
                            },
                        }}
                    >
                        <FooterLink href="/privacy-policy">
                            PRIVACY
                            POLICY
                        </FooterLink>

                        <FooterLink>
                            TERMS &
                            CONDITIONS
                        </FooterLink>
                    </Stack>
                </Box>

                <MotionBox
                    initial={{
                        opacity: 0,
                        y: 120,
                        scale: 0.97,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.2,
                    }}
                    transition={{
                        duration: 1,
                        ease: [
                            0.22,
                            1,
                            0.36,
                            1,
                        ],
                    }}
                    sx={{
                        width: "100%",

                        bgcolor:
                            "#0B110F",

                        border:
                            "1px solid rgba(255,255,255,0.14)",

                        borderRadius:
                        {
                            xs: "18px",
                            md: "22px",
                        },

                        px: {
                            xs: 3,
                            sm: 5,
                            md: 6,
                        },

                        py: {
                            xs: 5,
                            md: 10,
                        },

                        willChange:
                            "transform, opacity",
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily:
                                '"Anton", sans-serif',

                            fontSize: {
                                xs: "30px",
                                md: "32px",
                            },

                            lineHeight: 1,

                            textTransform:
                                "uppercase",

                            mb: {
                                xs: 5,
                                md: 2,
                            },
                        }}
                    >
                        SEND US A QUERY
                    </Typography>

                    <Box
                        component="form"
                        onSubmit={
                            formik.handleSubmit
                        }
                    >
                        <Stack
                            spacing={{
                                xs: 4,
                                md: 4.5,
                            }}
                        >
                            <FormField
                                label="FULL NAME"
                                placeholder=""
                                name="name"
                                value={
                                    formik
                                        .values
                                        .name
                                }
                                onChange={
                                    formik.handleChange
                                }
                                onBlur={
                                    formik.handleBlur
                                }
                                error={
                                    formik
                                        .touched
                                        .name &&
                                    formik
                                        .errors
                                        .name
                                }
                            />

                            <FormField
                                label="EMAIL ADDRESS"
                                placeholder=""
                                type="email"
                                name="email"
                                value={
                                    formik
                                        .values
                                        .email
                                }
                                onChange={
                                    formik.handleChange
                                }
                                onBlur={
                                    formik.handleBlur
                                }
                                error={
                                    formik
                                        .touched
                                        .email &&
                                    formik
                                        .errors
                                        .email
                                }
                            />

                            <FormField
                                label="PHONE NUMBER"
                                placeholder=""
                                type="tel"
                                name="phone"
                                value={
                                    formik
                                        .values
                                        .phone
                                }
                                onChange={
                                    formik.handleChange
                                }
                                onBlur={
                                    formik.handleBlur
                                }
                                error={
                                    formik
                                        .touched
                                        .phone &&
                                    formik
                                        .errors
                                        .phone
                                }
                            />

                            <FormField
                                label="YOUR MESSAGE"
                                placeholder=""
                                multiline
                                name="message"
                                value={
                                    formik
                                        .values
                                        .message
                                }
                                onChange={
                                    formik.handleChange
                                }
                                onBlur={
                                    formik.handleBlur
                                }
                                error={
                                    formik
                                        .touched
                                        .message &&
                                    formik
                                        .errors
                                        .message
                                }
                            />

                            <Box
                                component="button"
                                type="submit"
                                disabled={
                                    formik.isSubmitting
                                }
                                sx={{
                                    position:
                                        "relative",

                                    width:
                                        "100%",

                                    minHeight:
                                    {
                                        xs: 58,
                                        md: 50,
                                    },

                                    border:
                                        "none",

                                    borderRadius:
                                        "999px",

                                    bgcolor:
                                        "#007D62",

                                    color:
                                        "#fff",

                                    cursor:
                                        "pointer",

                                    fontFamily:
                                        '"Roboto Mono", monospace',

                                    fontSize:
                                    {
                                        xs: "15px",
                                        md: "18px",
                                    },

                                    fontWeight: 600,

                                    transition:
                                        "background 0.3s ease, transform 0.3s ease",

                                    "&:hover":
                                    {
                                        bgcolor:
                                            "#009474",

                                        transform:
                                            "translateY(-2px)",
                                    },
                                }}
                            >
                                {formik.isSubmitting
                                    ? "SENDING..."
                                    : "SUBMIT QUERY"}

                                <Typography
                                    component="span"
                                    sx={{
                                        position:
                                            "absolute",

                                        right: {
                                            xs: 24,
                                            md: 32,
                                        },

                                        top: "50%",

                                        transform:
                                            "translateY(-50%)",

                                        fontFamily:
                                            '"Roboto Mono", monospace',

                                        fontSize:
                                            "28px",

                                        fontWeight:
                                            300,

                                        lineHeight: 1,
                                    }}
                                >
                                    +
                                </Typography>
                            </Box>
                        </Stack>
                    </Box>
                </MotionBox>

            </Box>
        </Box>
    );
}

function SocialIcon({
    children,
}) {
    return (
        <Box
            component="a"
            href="#"
            sx={{
                width: {
                    xs: 58,
                    md: 50,
                },

                height: {
                    xs: 58,
                    md: 50,
                },

                borderRadius:
                    "50%",

                bgcolor: "#fff",

                color: "#003D31",

                display: "flex",

                alignItems:
                    "center",

                justifyContent:
                    "center",

                textDecoration:
                    "none",

                transition:
                    "transform 0.3s ease, background 0.3s ease",

                "& svg": {
                    fontSize: {
                        xs: 28,
                        md: 34,
                    },
                },

                "&:hover": {
                    transform:
                        "translateY(-5px)",

                    bgcolor:
                        "#00A878",

                    color: "#fff",
                },
            }}
        >
            {children}
        </Box>
    );
}

function FooterLink({
    href,
    children,
}) {
    return (
        <Typography
            component="a"
            href={href}
            sx={{
                width:
                    "fit-content",

                fontFamily:
                    '"Roboto Mono", monospace',

                fontSize: {
                    xs: "14px",
                    md: "17px",
                },

                color: "#007D62",

                textDecoration:
                    "underline",

                textUnderlineOffset:
                    "4px",

                transition:
                    "color 0.3s ease",

                "&:hover": {
                    color:
                        "#00A878",
                },
            }}
        >
            {children}
        </Typography>
    );
}