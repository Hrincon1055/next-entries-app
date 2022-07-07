import { ChangeEvent, useState, useMemo, FC, useContext } from "react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  capitalize,
  IconButton,
} from "@mui/material";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
// MIS COMPONENTES
import { Layout } from "../../components/layouts";
import { Entry, EntryStatus } from "../../interfaces";
import { dbEntries } from "../../database";
import { EntriesContext } from "../../context/entries";
import { dateFunctions } from "../../utils";
// CONSTANTES GLOBALES
const validStatus: EntryStatus[] = ["pending", "in-progress", "finished"];
// INTERFACES
interface Props {
  entry: Entry;
}
// INICIO
const EntryPage: FC<Props> = ({ entry }) => {
  // HOOKS
  const { updateEntry, deleteEntry } = useContext(EntriesContext);
  const router = useRouter();
  // STATE
  const [inputValue, setInputValue] = useState(entry.description);
  const [status, setStatus] = useState<EntryStatus>(entry.status);
  const [touched, setTouched] = useState(false);

  // USEMEMO
  const inNotValid = useMemo(
    () => inputValue.length <= 0 && touched,
    [inputValue, touched]
  );
  // FUNCIONES
  const onInputValueChanged = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const onStatusChanged = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.target.value as EntryStatus);
  };
  const onSave = () => {
    if (inputValue.trim().length === 0) {
      return;
    }
    const newEntry: Entry = {
      ...entry,
      status: status,
      description: inputValue,
    };

    updateEntry(newEntry, true);
  };
  const onDelete = () => {
    deleteEntry(entry);
    router.push("/");
  };
  // RENDER
  return (
    <Layout title={inputValue.substring(0, 20) + "..."}>
      <Grid container justifyContent="center" sx={{ marginTop: 2 }}>
        <Grid item xs={12} sm={8} md={6}>
          <Card>
            <CardHeader
              title={`Entrada:`}
              subheader={`Creada ${dateFunctions.getFormatDistanceToNow(
                entry.createdAt
              )} `}
            />
            <CardContent>
              <TextField
                sx={{ marginTop: 2, marginBottom: 1 }}
                fullWidth
                placeholder="Nueva Entrada"
                autoFocus
                multiline
                label="Nueva Entrada"
                value={inputValue}
                onBlur={() => setTouched(true)}
                onChange={onInputValueChanged}
                helperText={inNotValid && "Ingrese un valor"}
                error={inNotValid}
              />
              <FormControl>
                <FormLabel>Satus:</FormLabel>
                <RadioGroup row value={status} onChange={onStatusChanged}>
                  {validStatus.map((option) => (
                    <FormControlLabel
                      key={option}
                      value={option}
                      control={<Radio />}
                      label={capitalize(option)}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </CardContent>
            <CardActions>
              <Button
                startIcon={<SaveOutlinedIcon />}
                variant="contained"
                fullWidth
                onClick={onSave}
                disabled={inputValue.length <= 0}
              >
                Save
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <IconButton
        sx={{
          position: "fixed",
          bottom: 30,
          right: 30,
          backgroundColor: "text.secondary",
        }}
        onClick={onDelete}
      >
        <DeleteOutlinedIcon />
      </IconButton>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params as { id: string };

  const entry = await dbEntries.getEntryById(id);
  if (!entry) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: { entry },
  };
};
export default EntryPage;
