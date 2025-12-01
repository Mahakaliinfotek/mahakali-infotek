



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
import Footer from "../layouts/Footer";
import ContactUs from "../components/homepage/ContactUs";

export default function HomePage() {
    return (
        <>
            <Header />
            <HeroSlider />
            <CompanyStrip />

            <BusinessFocus />

            <CoreOfferings />
            {/* <WhatMakesUsDifferent /> */}
            <WhyTeamsChooseUs />
            <AchievementsTimeline />
            {/* <ClientsComponent /> */}
            <TechnologiesWeWorkWith />

            <PeopleCultureSlider />
            <VisionSection />
            <BusinessesSection />
            <HistorySection />
            <SustainabilitySection />
            <MediaCSRSection />
            <CompanyStrip />
            <ContactUs />
         





        </>
    );
}
