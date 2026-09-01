import { Box } from "@mui/material";


import { Outlet } from "react-router-dom";
import Footer from "../components/common/Footer";
import HeaderV2 from "./HeaderV2";
import FooterV2 from "./FooterV2";


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

                    py: { xs: 0, sm: "16px", md: 0 },
                }}
            >
                <HeaderV2 />
                <Outlet />
                {/* <FooterV2 /> */}
            </Box>

            {/* Footer – uncomment if needed */}
            {/* <Footer /> */}
        </Box>
    );
};
