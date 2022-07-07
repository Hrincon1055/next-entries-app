import { useContext } from "react";
import NextLink from "next/link";
import { AppBar, IconButton, Toolbar, Typography, Link } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
// MIS COMPONENTES
import { UIContext } from "../../context/ui";

// INICIO
export const Navbar = () => {
  // HOOKS
  const { openSideMenu } = useContext(UIContext);

  // RENDER
  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton size="large" edge="start" onClick={openSideMenu}>
          <MenuOutlinedIcon />
        </IconButton>
        <NextLink href="/" passHref>
          <Link underline="none" color="white">
            <Typography variant="h6">OpenJira</Typography>
          </Link>
        </NextLink>
      </Toolbar>
    </AppBar>
  );
};
