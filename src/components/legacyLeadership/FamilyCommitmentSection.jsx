import { Box, Typography } from "@mui/material";
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import SchoolIcon from '@mui/icons-material/School';
import CelebrationIcon from '@mui/icons-material/Celebration';

export default function FamilyCommitmentSection() {
  const items = [
    {
      icon: HealthAndSafetyIcon,
      title: "Comprehensive Wellness",
      text: "Full health coverage, mental wellness programs, and family support initiatives to ensure peace of mind.",
    },
    {
      icon: SchoolIcon,
      title: "Lifelong Learning",
      text: "Generous educational stipends and skill development programs for you and your dependents.",
    },
    {
      icon: CelebrationIcon,
      title: "Community & Events",
      text: "Regular company-sponsored family events, celebrations, and community outreach programs.",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        px: { xs: 2, md: 6 },
        py: { xs: 8, md: 8 },
        bgcolor: "white",
        textAlign: "center",
      }}
    >
      {/* ------------------ Title ------------------ */}
      <Typography
        sx={{
          fontSize: { xs: "32px", md: "42px" },
          fontWeight: 800,
          lineHeight: 1.2,
          color: "#1B1B1B",
        }}
      >
        Beyond Employment: A Family<br />Commitment
      </Typography>

      {/* ------------------ Subtitle ------------------ */}
      <Typography
        sx={{
          fontSize: "16px",
          maxWidth: "800px",
          mx: "auto",
          mt: 2,
          mb: 8,
          lineHeight: 1.6,
          color: "#4B4B4B",
        }}
      >
        To us, our employees are family. This isn't corporate rhetoric - it's reflected in how we care for every individual who walks through our doors. We provide quality accommodation and nutrition, understanding that wellbeing at home translates to excellence at work. When you join Mahakali, you're not just accepting a job; you're becoming part of a community that looks after its own.
        Our retention speaks volumes. Colleagues who've stayed with us for decades haven't remained out of obligation - they've stayed because they've found a workplace that respects their contribution, nurtures their growth, and values them as people first.

      </Typography>

      {/* ------------------ 3 Cards ------------------ */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
          justifyContent: "center",
          alignItems: "stretch",
        }}
      >
        {items.map((item, index) => (
          <Box
            key={index}
            sx={{
              flex: 1,
              background: "#F1F7F3",
              borderRadius: "12px",
              p: { xs: 4, md: 5 },
              textAlign: "center",
              minWidth: 0,
            }}
          >
            {/* Icon */}
            <Box
              className="material-symbols-outlined"
              sx={{
                // fontSize: "60px",
                color: "#008037",
                // mb: 2,
              }}
            >
              <item.icon sx={{ fontSize: "50px" }} />
            </Box>

            {/* Title */}
            <Typography sx={{ fontWeight: 700, fontSize: "18px", mb: 1 }}>
              {item.title}
            </Typography>

            {/* Description */}
            <Typography sx={{ fontSize: "15px", color: "#444", lineHeight: 1.6 }}>
              {item.text}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
