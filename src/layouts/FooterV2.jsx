import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import { useLocation, useNavigate } from "react-router-dom";

const socialLinks = [
  { id: "email", label: "Email Mahakali Group", href: "mailto:info@mahakaliudyog.com", Icon: EmailOutlinedIcon },
  { id: "linkedin", label: "Mahakali Group on LinkedIn", href: "#", Icon: LinkedInIcon },
  { id: "instagram", label: "Mahakali Group on Instagram", href: "#", Icon: InstagramIcon },
  { id: "facebook", label: "Mahakali Group on Facebook", href: "#", Icon: FacebookOutlinedIcon },
  { id: "x", label: "Mahakali Group on X", href: "#", Icon: XIcon },
];

function SocialLinks() {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: { xs: 1, md: 1 } }}>
      {socialLinks.map(({ id, label, href, Icon }) => (
        <IconButton
          key={id}
          component="a"
          href={href}
          aria-label={label}
          target={href === "#" ? undefined : "_blank"}
          rel={href === "#" ? undefined : "noreferrer"}
          sx={{
            width: { xs: 40, md: 48 },
            height: { xs: 40, md: 48 },
            // ml: id === "email" ? 0 : "-2px",
            // mx:0.2,
            bgcolor: "#F7F7F7",
            color: "#202024",
            borderRadius: "50%",
            "&:hover": { bgcolor: "#ECEFF8", color: "#0647FF", zIndex: 1 },
          }}
        >
          <Icon sx={{ fontSize: { xs: 18, md: 22 } }} />
        </IconButton>
      ))}
    </Box>
  );
}

function LegalLink({ href, children }) {
  return (
    <Typography
      component="a"
      href={href}
      sx={{
        color: "#006A4E",
        fontFamily: '"Roboto Mono", monospace',
        fontSize: { xs: 13, md: 17 },
        fontWeight: 600,
        lineHeight: 1.4,
        textDecoration: "underline",
        textUnderlineOffset: "2px",
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </Typography>
  );
}

export default function FooterV2() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleContactClick = () => {
    if (location.pathname === "/") {
      document.getElementById("contact-us")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      return;
    }

    navigate("/", { state: { scrollTo: "contact-us" } });
  };

  return (
    <Box
      component="footer"
      sx={{
        position: "relative",
        width: "100%",
        // minHeight: { xs: 400, md: 402 },
        px: { xs: 1, sm: 5, md: 4 },
        pt: { xs: 0, md: 5 },
        pb: { xs: 3.5, md: 4 },
        display: "flex",
        flexDirection: "column",
        gap: { xs: 2, md: 0 },
        bgcolor: "#002219",

        ///background:
        // "linear-gradient(180deg, #000000 0%, #001510 45%, #002C22 100%)",
        overflow: "hidden",
      }}
    >
      {/* <Typography
        component="p"
        sx={{
          m: 0,
          color: "#1D1B20",
          fontFamily: 'Georgia, "Times New Roman", serif',
          fontSize: { xs: "60px", md: "155px" },
          fontWeight: 600,
          lineHeight: { xs: 0.94, md: 0.9 },
          letterSpacing: "-0.065em",
          whiteSpace: { xs: "normal", md: "nowrap" },
          textAlign: { xs: "left", md: "center" },
        }}
      >
        The Mahakali Group
      </Typography> */}

      <Box
        sx={{
          mt: { xs: 7.5, md: "auto" },
          display: "flex",
          alignItems: "center",
          justifyContent: { xs: "flex-start", md: "center" },
          // border:"1px solid red"
        }}
      >
        <SocialLinks />
        <Button
          onClick={handleContactClick}
          sx={{
            ml: 0.5,
            minHeight: { xs: 40, md: 42 },
            px: { xs: 1.5, md: 2 },
            borderRadius: "999px",
            bgcolor: "#006A4E",
            color: "#FFFFFF",
            fontFamily: '"Roboto Mono", monospace',
            fontSize: { xs: 12, md: 16 },
            fontWeight: 500,
            whiteSpace: "nowrap",
            "&:hover": { bgcolor: "#003BD5" },
          }}
        >
          CONTACT US&nbsp; +
        </Button>
      </Box>

      <Box
        sx={{
          mt: { xs: "auto", md: -4.2 },

          //  alignItems: "center",
          // justifyContent: { xs: "flex-start", md: "space-between" },

          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: { xs: 5, md: 2 },
          pointerEvents: "none",
          "& > a": { pointerEvents: "auto" },
        }}
      >
        <LegalLink href="/privacy-policy">PRIVACY POLICY</LegalLink>
        <LegalLink href="/terms-and-conditions">TERMS &amp; CONDITIONS</LegalLink>
      </Box>
    </Box>
  );
}
