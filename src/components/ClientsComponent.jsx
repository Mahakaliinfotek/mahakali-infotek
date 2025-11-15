import { Box, Typography, Paper } from "@mui/material";

import Oto from "../assets/images/oto.png";

import Indiazona from "../assets/images/indiazona.png";
import Mahakali from "../assets/images/mahakali.png";



const clientsList = 
[
    {
        name: "",
        logo: Indiazona,

    },
    {
        name: "",
        logo: Mahakali,
    },
    {
        name: "",
        logo: Oto,
    },

];

export default function ClientsComponent() {

    return (
        <Box sx={{
            background: "#fff",
        }}>
            <Box
                sx={{


                    width: "100%",
                    maxWidth: "1400px",
                    mx: "auto",
                    px: { xs: 2, md: 12 },
                    py: { xs: 2, md: 0 },
                }}
            >

                <Typography
                    sx={{
                        fontSize: { xs: "28px", md: "40px" },
                        fontWeight: 700,
                        textAlign: "center",
                        mb: 5,
                        fontFamily: "Manrope",
                        color: "#0A0F1C",
                    }}
                >
                    Our Clients
                </Typography>


                <Box
                    sx={{
                        textAlign: "center",
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "repeat(2, 1fr)",
                            sm: "repeat(3, 1fr)",
                            md: "repeat(3, 1fr)",
                        },
                        gap: { xs: 2, md: 3 },
                    }}
                >
                    {clientsList.map((client, index) => {
                        const showLogo = !client.name;
                        return (
                            <Paper
                                key={index}
                                elevation={0}
                                sx={{
                                    p: 1,
                                    borderRadius: "14px",
                                    border: "1px solid #E6E8EC",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    textAlign: "center",
                                }}
                            >
                                {/* If name is empty → show logo */}
                                {showLogo && (
                                    <Box
                                        component="img"
                                        src={client.logo}
                                        alt={client.name}
                                        sx={{
                                            width: "150px",
                                            height: "150px",
                                            objectFit: "contain",
                                         
                                        }}
                                    />
                                )}


                            </Paper>
                        );
                    })}




                </Box>


            </Box>

        </Box>

    );
}
