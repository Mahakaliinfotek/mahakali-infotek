import { Box, Grid, Typography, Link } from "@mui/material";

export default function FooterSection() {
  return (
    <Box sx={{ bgcolor: "#212529", color: "white", py: 8, px: 2 }}>
      <Grid
        container
        spacing={4}
        sx={{ maxWidth: "1200px", mx: "auto" }}
      >
        <Grid item xs={12} md={3}>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            The Mahakali Group
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Building a legacy of excellence, together.
          </Typography>
        </Grid>

        <Grid item xs={6} md={3}>
          <Typography sx={{ fontWeight: 700, mb: 2 }}>Navigation</Typography>
          <Link href="#philosophy" underline="none" color="white">
            Philosophy
          </Link>
          <br />
          <Link href="#culture" underline="none" color="white">
            Culture
          </Link>
          <br />
          <Link href="#join-us" underline="none" color="white">
            Join Us
          </Link>
        </Grid>

        <Grid item xs={6} md={3}>
          <Typography sx={{ fontWeight: 700, mb: 2 }}>Legal</Typography>
          <Link underline="none" color="white">
            Privacy Policy
          </Link>
          <br />
          <Link underline="none" color="white">
            Terms of Service
          </Link>
        </Grid>
      </Grid>

      <Typography sx={{ textAlign: "center", mt: 4, opacity: 0.8 }}>
        © 2024 The Mahakali Group. All rights reserved.
      </Typography>
    </Box>
  );
}
