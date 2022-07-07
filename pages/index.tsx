import { useContext } from "react";
import type { NextPage } from "next";
import { Card, CardHeader, Grid, IconButton } from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
// MIS COMPONENTES
import { Layout } from "../components/layouts";
import { EntryList, LoadingBackdrop, NewEntry } from "../components/ui";
import { UIContext } from "../context/ui";
// INICIO
const HomePage: NextPage = () => {
  // HOOKS
  const { isAddingEntry, setIsAddingEntry } = useContext(UIContext);
  // RENDER
  return (
    <>
      <Layout title="Home - OpenJira">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Card sx={{ height: "calc(100vh - 100px)" }}>
              <CardHeader
                title="Pendientes"
                action={
                  <IconButton
                    aria-label="settings"
                    onClick={() => setIsAddingEntry(!isAddingEntry)}
                  >
                    {isAddingEntry ? (
                      <RemoveCircleOutlineOutlinedIcon />
                    ) : (
                      <AddCircleOutlineOutlinedIcon />
                    )}
                  </IconButton>
                }
              />
              <NewEntry />
              <EntryList status="pending" />
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card sx={{ height: "calc(100vh - 100px)" }}>
              <CardHeader title="En Progreso" />
              <EntryList status="in-progress" />
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card sx={{ height: "calc(100vh - 100px)" }}>
              <CardHeader title="Completadas" />
              <EntryList status="finished" />
            </Card>
          </Grid>
        </Grid>
      </Layout>
      <LoadingBackdrop />
    </>
  );
};

export default HomePage;
