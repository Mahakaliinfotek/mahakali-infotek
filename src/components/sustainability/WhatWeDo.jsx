import { Box, Typography, Paper, List, ListItem, ListItemText } from "@mui/material";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import OpacityIcon from "@mui/icons-material/Opacity";
import DevicesIcon from "@mui/icons-material/Devices";
import RecyclingIcon from "@mui/icons-material/Recycling";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export default function WhatWeDo() {
    const items = [
        {
            icon: <DirectionsBusIcon sx={{ fontSize: 32, color: "#0B6D3A" }} />,
            title: "Clean air at source",
            points: [
                "Covered coal stacks and covered conveyors to cut dust lift off",
                "Water spraying on yards, transfer points, and roads using fixed and mobile systems",
                "Full tarpaulin cover in transit and wheel washing at exit gates",
                "Real time particulate checks at high risk points with visible boards for supervisors",
            ],
        },
        {
            icon: <LocalShippingIcon sx={{ fontSize: 32, color: "#0B6D3A" }} />,
            title: "Greener movement and operations",
            points: [
                "Living facilities close to worksites to reduce commute emissions and improve rest",
                "Route planning and consolidation to cut empty runs and idling",
                "Shift to rail and coastal movement wherever viable",
                "Electric or low-emission equipment where operations allow; preventive maintenance for fuel efficiency",
            ],
        },
        {
            icon: <OpacityIcon sx={{ fontSize: 32, color: "#0B6D3A" }} />,
            title: "Land, water, and biodiversity",
            points: [
                "Native tree and sapling plantations with survival tracking and seasonal care",
                "Stormwater diversion, silt traps, and oil interceptors to keep runoff clean",
                "Rainwater harvesting and reuse loops for dust suppression",
            ],
        },
        {
            icon: <DevicesIcon sx={{ fontSize: 32, color: "#0B6D3A" }} />,
            title: "Digital first",
            points: [
                "E-invoicing, digital logs, and e-signatures across procurement, logistics, and HR",
                "Remote coordination and digital trainings to reduce travel and paper consumption",
            ],
        },
        {
            icon: <RecyclingIcon sx={{ fontSize: 32, color: "#0B6D3A" }} />,
            title: "Waste and materials",
            points: [
                "Segregation at source and tie-ups with authorized recyclers for scrap, used oil, tires, and e-waste",
                "Spill prevention kits and trained responders at material handling zones",
                "Efficient lighting and motors; solar for offices where feasible",
            ],
        },
    ];

    return (
        <Box
            sx={{
                width: "100%",
                maxWidth: "1400px",
                mx: "auto",
                px: { xs: 2, md: 4 },
                py: { xs: 6, md: 6 },
                textAlign: "center",
            }}
        >
            {/* Heading */}
            <Typography
                sx={{
                    fontSize: { xs: "28px", md: "36px" },
                    fontWeight: 700,
                    mb: 1,
                }}
            >
                What we do every day
            </Typography>

            {/* Subtitle */}
            <Typography
                sx={{
                    fontSize: { xs: "15px", md: "17px" },
                    color: "#555",
                    maxWidth: "700px",
                    mx: "auto",
                    lineHeight: 1.6,
                    mb: { xs: 4, md: 6 },
                }}
            >
                Our commitment is reflected in the daily actions we take across every aspect of our
                operations to minimize our footprint and restore natural balance.
            </Typography>

            {/* Tiles */}
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 3,
                    justifyContent: "center",
                }}
            >
                {/* Bullet point tiles */}
                {items.map((item, i) => (
                    <Paper
                        key={i}
                        elevation={0}
                        sx={{
                            width: { xs: "100%", sm: "47%", md: "31%" },
                            p: 3,
                            borderRadius: "12px",
                            border: "1px solid #e6e6e6",
                            textAlign: "left",
                        }}
                    >
                        <Box sx={{ mb: 1 }}>{item.icon}</Box>

                        <Typography
                            sx={{
                                fontWeight: 700,
                                fontSize: "17px",
                                mb: 1,
                                lineHeight: 1.4,
                            }}
                        >
                            {item.title}
                        </Typography>

                        {/* Bullet List */}
                        <List dense sx={{ pl: 2 }}>
                            {item.points.map((p, idx) => (
                                <ListItem
                                    key={idx}
                                    sx={{ py: 0.5, display: "list-item", listStyleType: "disc" }}
                                >
                                    <ListItemText
                                        primary={p}
                                        primaryTypographyProps={{
                                            fontSize: "14px",
                                            color: "#555",
                                            lineHeight: 1.5,
                                        }}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Paper>
                ))}

                {/* Last Highlight Tile */}
                <Paper
                    elevation={0}
                    sx={{
                        width: { xs: "100%", sm: "47%", md: "31%" },
                        p: 3,
                        borderRadius: "12px",
                        backgroundColor: "#E6F3EC",
                        border: "1px solid #d2e8dd",
                        textAlign: "left",
                    }}
                >
                    <Box sx={{ mb: 1 }}>
                        <MoreHorizIcon sx={{ fontSize: 32, color: "#0B6D3A" }} />
                    </Box>

                    <Typography
                        sx={{
                            fontWeight: 700,
                            fontSize: "17px",
                            mb: 1,
                        }}
                    >
                        And much more…
                    </Typography>

                    <Typography
                        sx={{
                            color: "#555",
                            fontSize: "14px",
                            lineHeight: 1.5,
                        }}
                    >
                        Our efforts are always expanding. Download our full policy for more details.
                    </Typography>
                </Paper>
            </Box>
        </Box>
    );
}
