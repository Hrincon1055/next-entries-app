import { createTheme } from "@mui/material";
import { grey, red } from "@mui/material/colors";

// THEME
export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: grey[300],
    },
    primary: {
      main: "#4a148c",
    },
    secondary: {
      main: "#19874b",
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {},
    },
    MuiCircularProgress: {
      styleOverrides: {
        root: {
          color: "#4a148c",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarColor: "",
          "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
            backgroundColor: "transparent",
            width: 10,
          },
          "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
            borderRadius: 8,
            backgroundColor: "rgba(120, 120, 120, 0.226)",
            border: "2px solid #fff",
          },
          "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus":
            {
              backgroundColor: "#fff",
            },
          "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active":
            {
              backgroundColor: "#fff",
            },
          "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover":
            {
              backgroundColor: "#fff",
            },
          "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
            backgroundColor: "#fff",
          },
        },
      },
    },
  },
});
