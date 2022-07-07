import React, { useContext } from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
// MIS COMPONENTES
import { UIContext } from "../../context/ui";
// INICIO
export const LoadingBackdrop = () => {
  // HOOKS
  const { isLoading } = useContext(UIContext);
  // RENDER
  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};
