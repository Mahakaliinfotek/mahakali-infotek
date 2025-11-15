import { Box, Typography } from "@mui/material";

export default function CultureSection() {
  const team = [
    {
      name: "Priya Sharma",
      years: "12 Years",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-Bvc3vlMG5IqZJHpeWu9glTNE5-xZXLAzmnk7_iSDqxxEJHbqryed86iSGi_6ryWAlWgJBd17YK_EQSw_0lqdxRsTtRFAKyrJxiMEQj00XGFlx6mZ8p7u9fb_G5ue1SrM_MFMDN5-dIkJxek9XCMbd4ID2knQXk_haj0M5rH_XItctcM6qjv0XZDqYTo9lZb0Md6_fgagelUV54BV9Ie4iK1CsX5yjER_myU2488t8d6cmgwgBECtDpTl-K_ukZe1cKDz-vbu2jqH",
    },
    {
      name: "Vikram Singh",
      years: "10 Years",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCkhWdikZob76Dr--t0XijjrIPmmK1QC8cFOy68st4DH1YjyV0ct9x0PMmEfe-UsEAYyO_iR_xHQfoueYxt6Q_Syj-tTrZMkGrxihj7Y56DPNXAWa1Cm6SKQowIFsxPBzLyu4ECVEMhCq-47vU2pQe4S7MmZeKbo0h3UbiMTfiSWld98TVZwxN6pKaxpq2PM5UMZ7BSXbhpQs7QvIQ9dIrt5HdlhPXqzXEYKZPp_g4U92ORAbXHjengLCJCYFHt-k6K6SRelF6U1g9q",
    },
    {
      name: "Aisha Khan",
      years: "8 Years",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCMPnIBK8mRh-xKVA2KwUgN9MkcoKX7CJBEuFoRczcLavGkcsQtT5qHagvaa8BDaQ5HNY1e92KX0Ui1At68QFehOmuLOwwO8tC1c425EfhD3_Aih-d2Cnp80sNCEUu0ZJRcfzK5sw5tbIswn75Pk9q6mNGfUkiPRbS42EKllShIg0MyjtYBCRP78nFy1fbSrTWcIRjRDmbOA4kZqw2KNO0uR7F7dPlH_ODDyVs1CLFn5oNEqlK41YspDHTZyv3KEJSQKKqImMznVdWa",
    },
    {
      name: "Arjun Reddy",
      years: "7 Years",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvn_fZbrIpWYcM9cVLSn4jnQCA_mytnWYfLRA9y1UJsgUNhaEt11ZFjrFYnkGh9HtH1RGmgxB2bu3JZW5VF_5Bm7wYs7kjZccheJvdTldII0Sf02-pwIe437QwRIYJgHvo9-55FqlND27ymMW6RCsNmbIQhdznTfYU1VcSycF0KeKy5EkG9zJEighvEnbahD7eGBVqMobdDU16lNo1a7iAnzlvURXlb8EGy5m9bNeSkD6i0BpPmM80VFXv7hWU-vb5TxHQJilDSKMZ",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        px: { xs: 2, md: 6 },
        py: { xs: 2, md: 2 },
        bgcolor: "white",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: { xs: 6, md: 8 },
        alignItems: { xs: "flex-start", md: "center" },
      }}
    >
      {/* ---------------- LEFT TEXT ---------------- */}
      <Box sx={{ flex: 1, minWidth: 0 }}>
        <Typography
          sx={{
            fontSize: { xs: "32px", md: "42px" },
            fontWeight: 800,
            lineHeight: 1.1,
            mb: 2,
            color: "#1B1B1B",
          }}
        >
          A Culture of<br />Hands–On<br />Excellence
        </Typography>

        <Typography sx={{ fontSize: "16px", color: "#4B4B4B", maxWidth: "500px" }}>
          We believe in learning by doing. Our approach to professional development centers on hands-on experience where theories meet reality and skills are forged through practice. This is where experience meets fresh perspective. Some of our colleagues have been with us for over two decades, carrying institutional wisdom and technical mastery. Alongside them, we continuously welcome new talented individuals who bring contemporary thinking and unbridled energy. This generational blend creates a dynamic learning ecosystem where industry veterans mentor rising talent, ensuring that excellence is both preserved and reimagined for tomorrow.
        </Typography>
      </Box>

      {/* ---------------- RIGHT MEMBERS ---------------- */}
      <Box
        sx={{
          flex: 1.2,
          display: "flex",
          flexWrap: "wrap",
          rowGap: 4,
          columnGap: 3,
          justifyContent: { xs: "center", md: "flex-end" },
        }}
      >
        {team.map((p, index) => (
          <Box
            key={index}
            sx={{
              width: "150px",
              textAlign: "center",
            }}
          >
            <Box
              component="img"
              src={p.img}
              alt={p.name}
              sx={{
                width: "110px",
                height: "110px",
                borderRadius: "50%",
                objectFit: "cover",
                mx: "auto",
                mb: 1.5,
              }}
            />
            <Typography sx={{ fontWeight: 700 }}>{p.name}</Typography>
            <Typography sx={{ color: "#008037", fontWeight: 700, fontSize: "15px" }}>
              {p.years}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
