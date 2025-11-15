import { Box, Typography } from "@mui/material";

export default function JoinLegacySection() {
  return (
    <Box
      sx={{
        width: "100%",
        px: { xs: 2, md: 6 },
        // py: { xs: 8, md: 12 },
        mb: 5,
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "center",
        gap: { xs: 6, md: 10 },
        bgcolor: "white",
      }}
    >
      {/* ---------------- LEFT CONTENT ---------------- */}
      <Box sx={{ minWidth: 0 }} >
        <Typography
          sx={{
            fontSize: { xs: "32px", md: "42px" },
            fontWeight: 800,
            color: "#1B1B1B",
            mb: 2,
          }}
        >
          Join Our Legacy
        </Typography>

        <Typography
          sx={{
            fontSize: "16px",
            color: "#4B4B4B",
            lineHeight: 1.6,
            maxWidth: "520px",
            mb: 3,
          }}
        >
          If you're looking for a workplace where your ideas matter, where
          experience guides you, and where commitment is reciprocated with care,
          we invite you to be part of our story.
        </Typography>

        <Typography
          sx={{
            fontSize: "16px",
            color: "#1B1B1B",
            fontWeight: 600,
          }}
        >
          Drop your resume to:{" "}
          <span style={{ color: "#007a3d" }}>hr@mahakaliudhyog.com</span>
        </Typography>
      </Box>

      {/* ---------------- RIGHT IMAGE / ICON ---------------- */}
      <Box
        sx={{
          //   flex: 1,
          display: "flex",
          justifyContent: "center",

        }}
      >
        <Box
          component="img"
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="Career Illustration"
          sx={{
            width: { xs: "200px", md: "280px" },
            height: "auto",
            objectFit: "contain",
          }}
        />
      </Box>
    </Box>
  );
}
