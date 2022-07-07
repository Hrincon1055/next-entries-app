import "../styles/globals.css";
import type { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { SnackbarProvider } from "notistack";
// MIS COMPONENTES
import { lightTheme, darkTheme } from "../themes";
import { UIProvider } from "../context/ui";
import { EntriesProvider } from "../context/entries";

// INICIO
function MyApp({ Component, pageProps }: AppProps) {
  // RENDER
  return (
    <SnackbarProvider maxSnack={3}>
      <UIProvider>
        <EntriesProvider>
          <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </EntriesProvider>
      </UIProvider>
    </SnackbarProvider>
  );
}

export default MyApp;
