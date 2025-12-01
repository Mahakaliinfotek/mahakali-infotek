import { Box } from "@mui/material";


import { Outlet } from "react-router-dom";
import Footer from "../components/common/Footer";


export const HomePageLayout = () => {
    return (
        <Box
            sx={{
                width: "100%",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
            }}
        >
            {/* Header */}


            {/* Main Content */}
            <Box
                sx={{
                    flexGrow: 1,
                    width: "100%",
                    maxWidth: "1600px",
                    mx: "auto",
                    // px: { xs: "12px", sm: "16px", md: "20px" },
                    py: { xs: 0, sm: "16px", md: 0 },
                }}
            >
                {/* <Header /> */}
                <Outlet />
                <Footer />
            </Box>

            {/* Footer – uncomment if needed */}
            {/* <Footer /> */}
        </Box>
    );
};
