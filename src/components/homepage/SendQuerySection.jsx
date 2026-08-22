import { Box, Button, Container, TextField, Typography } from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { motion } from "framer-motion";

const MotionBox = motion.create(Box);

const fields = [
    {
        id: "name",
        label: "FULL NAME",
        placeholder: "e.g. Priya Loha",
        type: "text",
    },
    {
        id: "email",
        label: "EMAIL ADDRESS",
        placeholder: "e.g. Loha@example.com",
        type: "email",
    },
    {
        id: "phone",
        label: "PHONE NUMBER",
        placeholder: "e.g. +91 8291 908 290",
        type: "tel",
    },
];

export default function SendQuerySection() {
    return (
        <Box
            component="section"
            sx={{
                position: "relative",
                width: "100%",
                minHeight: "100svh",
                overflow: "hidden",
                color: "#fff",
                background: `
                    radial-gradient(
                        circle at 0% 12%,
                        rgba(0, 92, 72, 0.28) 0%,
                        rgba(0, 60, 47, 0.12) 28%,
                        transparent 52%
                    ),
                    linear-gradient(
                        180deg,
                        #000000 0%,
                        #00110D 52%,
                        #002219 100%
                    )
                `,
            }}
        >
            <Container
                maxWidth={false}
                sx={{
                    maxWidth: "1440px",
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
                        xs: 1,
                        sm: 4,
                    },
                    minHeight: "100svh",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                {/* HEADING */}

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
                            fontFamily: '"Anton", sans-serif',
                            fontSize: {
                                xs: "28px",
                                sm: "36px",
                                md: "44px",
                            },
                            lineHeight: 1,
                            fontWeight: 400,
                            textTransform: "uppercase",
                        }}
                    >
                        SEND US A QUERY
                    </Typography>
                </MotionBox>

                {/* FORM */}

                <Box
                    component="form"
                    sx={{
                        mt: {
                            xs: 6,
                            sm: 7,
                        },
                    }}
                >
                    {fields.map((field, index) => (
                        <MotionBox
                            key={field.id}
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
                                duration: 0.6,
                                delay: index * 0.08,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            sx={{
                                mb: {
                                    xs: 4.8,
                                    sm: 5,
                                },
                            }}
                        >
                            <Typography
                                sx={{
                                    fontFamily: '"Roboto Mono", monospace',
                                    fontSize: {
                                        xs: "12px",
                                        sm: "13px",
                                    },
                                    fontWeight: 500,
                                    color: "#008E73",
                                    textTransform: "uppercase",
                                    mb: 1.2,
                                }}
                            >
                                {field.label}
                            </Typography>

                            <TextField
                                fullWidth
                                variant="standard"
                                placeholder={field.placeholder}
                                type={field.type}
                                InputProps={{
                                    disableUnderline: false,
                                }}
                                sx={{
                                    "& .MuiInput-root": {
                                        color: "#fff",
                                        fontFamily:
                                            '"Roboto Mono", monospace',
                                        fontSize: {
                                            xs: "13px",
                                            sm: "15px",
                                        },

                                        "&:before": {
                                            borderBottom:
                                                "1px solid rgba(0,142,115,0.7)",
                                        },

                                        "&:hover:not(.Mui-disabled):before": {
                                            borderBottom:
                                                "1px solid #008E73",
                                        },

                                        "&:after": {
                                            borderBottom:
                                                "1px solid #008E73",
                                        },
                                    },

                                    "& input": {
                                        py: 1.2,
                                    },

                                    "& input::placeholder": {
                                        color: "rgba(255,255,255,0.55)",
                                        opacity: 1,
                                    },
                                }}
                            />
                        </MotionBox>
                    ))}

                    {/* MESSAGE */}

                    <MotionBox
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
                            duration: 0.6,
                            delay: 0.24,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        <Typography
                            sx={{
                                fontFamily: '"Roboto Mono", monospace',
                                fontSize: {
                                    xs: "12px",
                                    sm: "13px",
                                },
                                fontWeight: 500,
                                color: "#008E73",
                                textTransform: "uppercase",
                                mb: 1.2,
                            }}
                        >
                            YOUR MESSAGE
                        </Typography>

                        <TextField
                            fullWidth
                            multiline
                            minRows={2}
                            variant="standard"
                            placeholder="Describe your project, objectives, or questions..."
                            sx={{
                                "& .MuiInput-root": {
                                    color: "#fff",
                                    fontFamily:
                                        '"Roboto Mono", monospace',
                                    fontSize: {
                                        xs: "13px",
                                        sm: "15px",
                                    },
                                    lineHeight: 1.45,

                                    "&:before": {
                                        borderBottom:
                                            "1px solid rgba(0,142,115,0.7)",
                                    },

                                    "&:hover:not(.Mui-disabled):before": {
                                        borderBottom:
                                            "1px solid #008E73",
                                    },

                                    "&:after": {
                                        borderBottom:
                                            "1px solid #008E73",
                                    },
                                },

                                "& textarea::placeholder": {
                                    color: "rgba(255,255,255,0.55)",
                                    opacity: 1,
                                },
                            }}
                        />
                    </MotionBox>

                    {/* SUBMIT */}

                    <Button
                        type="submit"
                        endIcon={
                            <AddRoundedIcon
                                sx={{
                                    fontSize: "18px !important",
                                }}
                            />
                        }
                        sx={{
                            mt: {
                                xs: 6,
                                sm: 7,
                            },
                            width: "100%",
                            minHeight: 46,
                            borderRadius: "999px",
                            bgcolor: "#008E73",
                            color: "#fff",
                            fontFamily: '"Roboto Mono", monospace',
                            fontSize: {
                                xs: "12px",
                                sm: "14px",
                            },
                            fontWeight: 600,
                            textTransform: "uppercase",
                            letterSpacing: "0.3px",

                            "&:hover": {
                                bgcolor: "#00A083",
                            },
                        }}
                    >
                        SUBMIT QUERY
                    </Button>
                </Box>

                {/* PUSH LINKS TO BOTTOM */}

                <Box
                    sx={{
                        flexGrow: 1,
                        minHeight: {
                            xs: 80,
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
                        pb: 1,
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
            </Container>
        </Box>
    );
}