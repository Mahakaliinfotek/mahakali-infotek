export const animatedUnderline = (underlineColor = "white") => ({
  position: "relative",
  display: "inline-block",
  cursor: "pointer",

  "&::after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "0%",
    height: "1px",
    backgroundColor: underlineColor,
    transition: "width 0.3s ease",
  },

  "&:hover::after": {
    width: "100%",
  },
});
