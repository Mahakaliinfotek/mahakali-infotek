import { useState } from "react";
import {
    AppBar,
    Toolbar,
    IconButton,
    Button,
    Box,
    Drawer,
    List,
    ListItemButton,
    ListItemText,
    Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import logo from "../assets/mg-logo.png"

// Centralized Menu With Links
const menuItems = [
    { label: "Our Story", path: "/about-us" },
    { label: "Businesses", path: "/businesses" },
    { label: "Sustainability", path: "/sustainability" },
];

export default function Header({ isDark = true }) {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const handleNavigate = (path) => {
    if (path === "/businesses") {
        if (window.location.pathname === "/") {
            // Already on homepage → scroll only
            document.getElementById("businesses-section")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        } else {
            // Navigate to homepage → then scroll after load
            navigate("/", { state: { scrollTo: "businesses-section" } });
        }
        return;
    }

    // Default navigation
    navigate(path);
    setOpen(false);
};


    // Dynamic color based on input prop
    const textColor = isDark ? "white" : "#121212";
    const iconColor = isDark ? "white" : "#121212";
    const ctaBg = isDark ? "#0A2E3E" : "#004a63";

    return (
        <>
            {/* Desktop Navbar */}
            <AppBar
                position="absolute"
                sx={{
                    backgroundColor: "transparent",
                    boxShadow: "none",
                    px: { xs: 1, md: 6 },
                    // maxWidth:"1600px"
                }}
            >
                <Box
                    sx={{
                        maxWidth: "1600px",
                        mx: "auto",
                        width: "100%",
                        px: { xs: 2, md: 6 }, // inner padding
                    }}
                >
                    <Toolbar sx={{ justifyContent: "space-between" }}>
                        {/* Logo */}
                        <Box
                          component="img"
                          src={logo}
                          sx={{
                            width:"120px",
                            cursor: "pointer"
                          }}
                          onClick={() => navigate("/")}
                        />

                        {/* Desktop Menu */}
                        <Box
                            sx={{
                                display: { xs: "none", md: "flex" },
                                gap: 4,
                                alignItems: "center",
                            }}
                        >
                            {menuItems.map((item) => (
                                <Typography
                                    key={item.label}
                                    onClick={() => handleNavigate(item.path)}
                                    sx={{
                                        color: textColor,
                                        fontSize: 16,
                                        cursor: "pointer",
                                        "&:hover": { opacity: 0.8 },
                                    }}
                                >
                                    {item.label}
                                </Typography>
                            ))}

                            {/* CTA Button */}
                            <Button
                                variant="contained"
                                component="a"
                                href={`mailto:info@mahakaliudyog.com`}
                                sx={{
                                    background: ctaBg,
                                    textTransform: "none",
                                    fontWeight: 600,
                                    "&:hover": { background: ctaBg },
                                }}
                            >
                                Contact Us
                            </Button>
                        </Box>

                        {/* Mobile Menu Icon */}
                        <IconButton
                            sx={{ display: { xs: "flex", md: "none" }, color: iconColor }}
                            onClick={() => setOpen(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </Box>
            </AppBar>

            {/* Mobile Drawer */}
            <Drawer
                anchor="right"
                open={open}
                onClose={() => setOpen(false)}
                PaperProps={{
                    sx: {
                        width: "85%",
                        background: "#0c3c52",
                        color: "white",
                    },
                }}
            >
                <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
                    <IconButton onClick={() => setOpen(false)} sx={{ color: "white" }}>
                        <CloseIcon />
                    </IconButton>
                </Box>

                <List>
                    {menuItems.map((item) => (
                        <ListItemButton
                            key={item.label}
                            onClick={() => handleNavigate(item.path)}
                            sx={{
                                borderBottom: "1px solid rgba(255,255,255,0.2)",
                            }}
                        >
                            <ListItemText
                                primary={item.label}
                                primaryTypographyProps={{
                                    fontSize: 18,
                                    fontWeight: 500,
                                }}
                            />
                        </ListItemButton>
                    ))}

                    {/* Contact Us Inside Drawer */}
                    <ListItemButton component="a"
                                href={`mailto:info@mahakaliudyog.com`} sx={{ mt: 2 }}>
                        <ListItemText
                            primary="Contact Us"
                            primaryTypographyProps={{
                                fontSize: 18,
                                fontWeight: 600,
                            }}
                        />
                    </ListItemButton>
                </List>
            </Drawer>
        </>
    );
}
