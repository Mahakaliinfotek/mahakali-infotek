import { Box } from '@mui/material'
import React from 'react'
import Header from './layouts/Header'
import SustainabilityHero from './components/sustainability/SustainabilityHero'
import PrinciplesSection from './components/sustainability/PrinciplesSection'
import WhatWeDo from './components/sustainability/WhatWeDo'
import PartnerWithUs from './components/sustainability/PartnerWithUs'


export const Sustainability = () => {
    return (
        <Box sx={{ width: "100%", bgcolor: "background.light" }}>
            <Header isDark={false} />
            <SustainabilityHero />
            <PrinciplesSection />
            <WhatWeDo />
           
            <PartnerWithUs />
        </Box>
    )
}
