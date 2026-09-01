



import { Box } from "@mui/material";
import CoreOfferings from "../components/CoreOfferings";
import HeroCard from "../components/HeroCard";
import BusinessFocus from "../components/BusinessFocus";
import WhatMakesUsDifferent from "../components/WhatMakesUsDifferent";
import WhyTeamsChooseUs from "../components/WhyTeamsChooseUs";
import AchievementsTimeline from "../components/AchievementsTimeline";
import ClientsComponent from "../components/ClientsComponent";
import TechnologiesWeWorkWith from "../components/TechnologiesWeWorkWith";
import Header from "../layouts/Header";
import HeroSlider from "../components/HeroSlider";
import CompanyStrip from "../components/CompanyStrip";
import PeopleCultureSlider from "../components/homepage/PeopleCultureSlider";
import VisionSection from "../components/homepage/VisionSection";
import BusinessesSection from "../components/homepage/BusinessesSection";
import HistorySection from "../components/homepage/HistorySection";
import SustainabilitySection from "../components/homepage/SustainabilitySection";
import MediaCSRSection from "../components/homepage/MediaCSRSection";

import ContactUs from "../components/homepage/ContactUs";
import ModernBusinessSection from "../components/homepage/ModernBusinessSection";
import CareerBenefitsSection from "../components/homepage/CareerBenefitsSection";
import HowWeWorkSection from "../components/homepage/HowWeWorkSection";
import GetInTouchSection from "../components/homepage/GetInTouchSection";
import SendQuerySection from "../components/homepage/SendQuerySection";

export default function HomeV1() {
    return (
        <Box
            sx={{
                // background:   "linear-gradient(180deg, #000000 0%, #001510 45%, #002C22 100%)",
                minHeight: "100vh",
                // background:
                //     "linear-gradient(107deg, #000 34.3%, #002219 100%)",
                // background:
                //     "linear-gradient(90deg, #000 0%, #000 50%, #002219 50%, #002219 100%)",

                background:
                    "linear-gradient(90deg, #000 0%,  #002219 100%)",
                color: "#fff",
            }}
        >


            <ModernBusinessSection />
            {/* <GetInTouchSection /> */}

        </Box>
    );
}
