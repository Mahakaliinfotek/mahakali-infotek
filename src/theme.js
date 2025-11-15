import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#2a0458",
    },
    background: {
      default: "#f7f5f8",
      dark: "#181022",
    },
    text: {
      primary: "#1e293b",
      secondary: "#64748b",
    },
  },
  typography: {
    fontFamily: "Manrope, sans-serif",
    heading: {
      fontFamily: "Montserrat, sans-serif",
    },
  },
  shape: {
    borderRadius: 8,
  },
});
