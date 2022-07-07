import { FC, ReactNode } from "react";
import { Box } from "@mui/material";
import Head from "next/head";
import { Navbar, Sidebar } from "../ui";
// INTERFACE
interface Props {
  title?: string;
  children: ReactNode;
}
// INICIO
export const Layout: FC<Props> = ({ title = "OpenJira", children }) => {
  // RENDER
  return (
    <Box sx={{ flexFlow: 1 }}>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <Sidebar />
      <Box sx={{ padding: "10px 20px" }}>{children}</Box>
    </Box>
  );
};
