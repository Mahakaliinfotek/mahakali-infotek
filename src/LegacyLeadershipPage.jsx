import { Box } from "@mui/material";
import Header from "./layouts/Header";
import HeroSection from "./components/legacyLeadership/HeroSection";
import PhilosophySection from "./components/legacyLeadership/PhilosophySection";
import CultureSection from "./components/legacyLeadership/CultureSection";
import FamilyCommitmentSection from "./components/legacyLeadership/FamilyCommitmentSection";
import JoinLegacySection from "./components/legacyLeadership/JoinUsSection";
import FooterSection from "./components/legacyLeadership/FooterSection";


export default function LegacyLeadershipPage() {
  return (
    <Box sx={{ width: "100%", bgcolor: "background.light" }}>
      <Header isDark={false} />
      <HeroSection />
      <PhilosophySection />
      <CultureSection />
      <FamilyCommitmentSection />
      <JoinLegacySection />
      <FooterSection />
    </Box>
  );
}
