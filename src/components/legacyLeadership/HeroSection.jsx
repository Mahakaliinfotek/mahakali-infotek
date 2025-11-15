import { Box, Button, Typography } from "@mui/material";

export default function HeroSection() {
  return (
    <Box
      sx={{
        width: "100%",
        px: { xs: 2, md: 6 },
        py: { xs: 8, md: 12 },
        bgcolor: "#F9F9F7",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {/* Outer container */}
      <Box
        sx={{
          maxWidth: "1400px",
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: { xs: 6, md: 10 },
        }}
      >
        {/* -------------------------------- LEFT CONTENT -------------------------------- */}
        <Box
          sx={{
            flex: 1,
            minWidth: 0,
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "38px", md: "56px" },
              fontWeight: 800,
              lineHeight: 1.1,
              mb: 2,
              color: "#1B1B1B",
            }}
          >
            Our People. Our Asset.
          </Typography>

          <Typography
            sx={{
              fontSize: "17px",
              color: "#555",
              maxWidth: "500px",
              mb: 4,
            }}
          >
            At the Mahakali Group, our greatest asset isn't found in our facilities or our technology - it's in our people
          </Typography>

          <Button
            variant="contained"
            sx={{
              bgcolor: "#007A3D",
              px: 3,
              py: 1.2,
              fontWeight: 700,
              textTransform: "none",
              borderRadius: "8px",
              ":hover": { bgcolor: "#006533" },
            }}
          >
            Join Our Legacy
          </Button>
        </Box>

        {/* -------------------------------- RIGHT IMAGE MOSAIC -------------------------------- */}
        <Box
          sx={{
            flex: 1,
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gridTemplateRows: "repeat(3, 140px)",
              gap: 2,
              width: "100%",
            }}
          >
            {/* Big Main Image */}
            <Box
              sx={{
                gridColumn: "span 2",
                gridRow: "span 2",
                borderRadius: "12px",
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD0_3_5XYG2mhgNABFquIgY38XXqDQfzIU5lN2faOEfmPOBWqz1XkAJ6Jqm8HMV7TZvl6JNGWjbOCuRwuq3brtnLPE-TCq0RmiVRNz1g3JtTYWxJgYBeKlS6ebFXFHlJcL67GWWYwkz5GfO57AgtOaKGXggkDpl3qrTPfrvG_AHjJinbXftTBsa1ffw3pYIMz-yLcbB5JIouSmbsNsvwHRsAx1J-gLhCJjMmZnA2DXvOlWmOcj-ijxk9FNsDHutOP67qNCZyZUQB24W')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            {/* Top Right 2 */}
            <Box
              sx={{
                borderRadius: "12px",
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD6nh99j5YMJhOJpL_XkJPHocrpRyCuLyssDokoZIfHiQFwl8sY4kJDVE6P8WHFJtQQPKE8fMOFTdlddicjdZVblrz7TJnUYisM633cy8P1QUmGpnYLGthwysQ4Khlrub8OojKyRpMKso17pgjLJLq_LSByXHD8kDPFdOsrf-pnntdTDZUxmA2ym84QT1LbEoMuRkHEhK_TXgV6yRkiatBBaXhu-16ddjwK4IuDK1coRuz80HjyjEF0IyiFH4Tq52d_X7yCy3HLeiaX')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            <Box
              sx={{
                borderRadius: "12px",
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBUgezJbUPzqD4Djrt1UFnl7FwQBw0wNxclgreayIlJ-xCFb5Q3flh18SZWlyt8zq4QmGKN-QeIJ41z-jPlPNWeegbSloMGf-bK6WJdQjzZPBBdHfmpb_DutOEg_8kyqDsT1Da6DAl244zJZnjhgQrMoinuxWdKsrL7Vv_rRJiy8p2fz0nfouGHOBCtFZzrREG96_FRRtoxKMJI7LpVN5IOe__WXt9Z-3tBJZiWFU0NafEF2OYDIX9DGm67gAq5gLR2H80oygnEiwsg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            {/* Bottom Left */}
            <Box
              sx={{
                gridColumn: "span 1",
                borderRadius: "12px",
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBWc56EFR7TcnTjC5tlo05INMnRdo6SYtNjimKzpjBZrdjFFQFgzuj-wc9eXhxBigOB5MbgAjpa8QRozR0GmtZeNTGB4DiTZWLjIqKngMlNgXG39VCWmkhTHmVRTiiAeApFzqKjipNCe7xQMEFFue3aukVXM0oSyGtAXYsxJaUlHA3X6yl7ReRoyvq97NKUTqkLNdbs0Yp_xE_wb69-x5fCFHgzcUjhmKJNPgZqUy6eXFPTRP8PGfY9eWshlNnAEdqFIEmh0BxMZHwR')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            {/* Big Bottom Right */}
            <Box
              sx={{
                gridColumn: "span 2",
                borderRadius: "12px",
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCZL5KmHzu32lVXGvFWNfIBiLebqr-oy8U_DVyd9GZFqCkbP8VnN4KgZwI6C278HOTKDaN154mZSPNvIbEyUHiK6f9xEDK-Jh-ZdI7JBjYh_0NhV5ZAYTdrImMzB3NCrvou7wurMO9ZZZVfd183ksUX-XLeD_LQJ0jd3Pi9D3PVs8MYdrU1bg8yEozHpRME-czhgI114wDl2lzU7BIsdfeiMa9AF14Ic6QRt1sLVb5P8TKWNHQ0LjZAsNNDcGq0z6L-K0DsTx9owTIv')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
