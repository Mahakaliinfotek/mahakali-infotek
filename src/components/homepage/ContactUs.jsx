import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toast";

const ContactUs = () => {

    // ---------------- FORM VALIDATION ----------------
    const formik = useFormik({
        initialValues: {
            name: "",
            company: "",
            email: "",
            phone: "",
            message: "",
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Name is required"),
            email: Yup.string()
                .email("Invalid email address")
                .required("Email is required"),
            message: Yup.string().required("Message is required"),
            phone: Yup.string()
                .transform((value) => value.replace(/[\s-]/g, ""))   // remove spaces & dashes
                .matches(/^[0-9+()]+$/, "Enter a valid phone number")
                .min(7, "Phone number too short")
                .max(15, "Phone number too long")
                .required("Phone number is required"),
            // company is optional → no validation
        }),
        onSubmit: async (values, { resetForm, setSubmitting }) => {
            try {
                await axios.post("https://api-dev.indiazona.in/user-service/public/email-enquiry",
                    // await axios.post("http://localhost:8002/api/public/email-enquiry",
                    {
                        name: values.name,
                        email: values.email,
                        phone: values.phone,
                        description: values.message,
                        company: values.company || "",
                        enquired_company: "Mahakali Infotek"
                    });

                toast.success("Enquiry submitted successfully!");
                resetForm();
            } catch (error) {
                toast.error("Failed to send enquiry. Please try again.");
            } finally {
                setSubmitting(false);
            }
        },
    });

    return (
        <Box
            id="contact-section"
            sx={{
                width: "100%",
                py: { xs: 2, md: 4 },
                px: { xs: 2, md: 0 },
                fontFamily: "Manrope",
                display: "flex",
                justifyContent: "center",
            }}
        >
            <Box
                sx={{
                    width: "100%",
                    borderRadius: "20px",
                    p: { xs: 2, md: 2 },
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    gap: { xs: 2, md: 0 },
                }}
            >

                {/* LEFT SIDE */}
                <Box sx={{ flex: 0.6 }}>
                    <Typography
                        sx={{
                            fontFamily: "Manrope, sans-serif",
                            fontSize: { xs: "22px", md: "30px" },
                            fontWeight: 800,
                            textAlign: "center",
                            color: "#0C311A",
                            mb: { xs: 1, md: 2 },
                        }}
                    >
                        Contact Us
                    </Typography>

                    <Typography
                        sx={{
                            fontFamily: "Manrope, sans-serif",
                            textAlign: "left",
                            color: "#555",
                            fontSize: { xs: "1rem", md: "1.2rem" },
                            maxWidth: 800,
                            mx: "auto",
                            mb: 4,
                            lineHeight: 1.6,
                        }}
                    >
                        Have a question or a project to discuss? We're here to help.
                        Fill out the form or use the details below to reach our team directly.
                    </Typography>

                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 2.5,
                            mt: 4,
                            maxWidth: 660,
                            pl: { xs: 0, md: 8 },
                        }}
                    >
                        {/* Address */}
                        <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                            <LocationOnOutlinedIcon sx={{ color: "#043D4E", fontSize: { xs: "1rem", md: "2rem" } }} />
                            <Typography sx={{ fontFamily: "Manrope", color: "#333", fontSize: { xs: "1rem", md: "1.1rem" } }}>
                                Door No. 43-4-12/1, 2nd Floor, Vyshnavi Magnum Opp. Indian Oil,
                                Dondaparthy, Railway New Colony, Visakhapatnam - 530016,
                                Andhra Pradesh, India
                            </Typography>
                        </Box>

                        {/* Phone */}
                        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                            <PhoneOutlinedIcon sx={{ color: "#043D4E", fontSize: { xs: "1rem", md: "2rem" } }} />
                            <Typography sx={{ fontFamily: "Manrope", color: "#333", fontSize: { xs: "1rem", md: "1.1rem" } }}>
                                0891-2539553, 033 40067940
                            </Typography>
                        </Box>

                        {/* Email */}
                        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                            <MailOutlineOutlinedIcon sx={{ color: "#043D4E", fontSize: { xs: "1rem", md: "2rem" } }} />
                            <Typography sx={{ fontFamily: "Manrope", color: "#333", fontSize: { xs: "1rem", md: "1.1rem" } }}>
                                info@mahakaliudyog.com
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                {/* RIGHT SIDE FORM */}
                <Box sx={{ flex: 0.4 }}>
                    <form onSubmit={formik.handleSubmit}>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                            <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 1.5 }}>
                                {/* Name */}
                                <TextField
                                    fullWidth
                                    name="name"
                                    placeholder="Name"
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    error={formik.touched.name && Boolean(formik.errors.name)}
                                    helperText={formik.touched.name && formik.errors.name}
                                    InputProps={{
                                        sx: {
                                            borderRadius: "12px",
                                            height: 55,
                                            backgroundColor: "#fff",
                                        },
                                    }}
                                />

                                {/* Company – optional */}
                                <TextField
                                    fullWidth
                                    name="company"
                                    placeholder="Company (optional)"
                                    value={formik.values.company}
                                    onChange={formik.handleChange}
                                    InputProps={{
                                        sx: {
                                            borderRadius: "12px",
                                            height: 55,
                                            backgroundColor: "#fff",
                                        },
                                    }}
                                />
                            </Box>
                            {/* Email */}
                            <TextField
                                fullWidth
                                name="email"
                                placeholder="Email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}
                                InputProps={{
                                    sx: {
                                        borderRadius: "12px",
                                        height: 55,
                                        backgroundColor: "#fff",
                                    },
                                }}
                            />
                            {/* Phone */}
                            <TextField
                                fullWidth
                                name="phone"
                                placeholder="Phone"
                                value={formik.values.phone}
                                onChange={formik.handleChange}
                                error={formik.touched.phone && Boolean(formik.errors.phone)}
                                helperText={formik.touched.phone && formik.errors.phone}
                                InputProps={{
                                    sx: {
                                        borderRadius: "12px",
                                        height: 55,
                                        backgroundColor: "#fff",
                                    },
                                }}
                            />

                            {/* Message */}
                            <TextField
                                fullWidth
                                name="message"
                                placeholder="Message"
                                multiline
                                rows={4}
                                value={formik.values.message}
                                onChange={formik.handleChange}
                                error={formik.touched.message && Boolean(formik.errors.message)}
                                helperText={formik.touched.message && formik.errors.message}
                                InputProps={{
                                    sx: {
                                        borderRadius: "12px",
                                        backgroundColor: "#fff",
                                        alignItems: "flex-start",
                                    },
                                }}
                            />

                        </Box>

                        {/* Submit */}
                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            disabled={formik.isSubmitting}
                            sx={{
                                mt: 4,
                                py: 1.8,
                                backgroundColor: "#00445B",
                                textTransform: "none",
                                fontSize: "1.2rem",
                                fontWeight: 700,
                                borderRadius: "12px",
                                "&:hover": { backgroundColor: "#00445B" },
                            }}
                        >
                            {formik.isSubmitting ? "Sending..." : "Submit Enquiry"}
                        </Button>
                    </form>
                </Box>
            </Box>
        </Box>
    );
};

export default ContactUs;
