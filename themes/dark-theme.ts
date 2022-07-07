import { createTheme } from "@mui/material";
import { grey, red } from "@mui/material/colors";

// THEME
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
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
      styleOverrides: {
        root: {
          backgroundColor: "#4a148c",
        },
      },
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
            backgroundColor: "rgba(181, 181, 181, 0.719)",
            border: "2px solid #292929",
          },
          "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus":
            {
              backgroundColor: "#292929",
            },
          "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active":
            {
              backgroundColor: "#292929",
            },
          "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover":
            {
              backgroundColor: "#292929",
            },
          "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
            backgroundColor: "#292929",
          },
        },
      },
    },
  },
});
