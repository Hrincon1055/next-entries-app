import React, { ChangeEvent, useContext, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
// import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
// MIS COMPONENTES
import { EntriesContext } from "../../context/entries/";
import { UIContext } from "../../context/ui";
// INICIO
export const NewEntry = () => {
  // HOOKS
  const { addNewEntry } = useContext(EntriesContext);
  const { isAddingEntry, setIsAddingEntry } = useContext(UIContext);

  // STATE
  const [inputValue, setInputValue] = useState("");
  const [touched, setTouched] = useState(false);
  // FUNCIONES
  const onTextFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const onSave = (): void => {
    if (inputValue.length === 0) {
      setTouched(true);
      return;
    }
    addNewEntry(inputValue);
    setIsAddingEntry(false);
    setTouched(false);
    setInputValue("");
  };
  // RENDER
  return (
    <Box sx={{ paddingX: 2 }}>
      {isAddingEntry && (
        <>
          <TextField
            fullWidth
            sx={{ marginTop: 2, marginBottom: 1 }}
            placeholder="Nueva Entrada"
            autoFocus={true}
            multiline
            label="Nueva Entrada"
            helperText={inputValue.length <= 0 && touched && "Ingrese un valor"}
            value={inputValue}
            onChange={onTextFieldChange}
            error={inputValue.length <= 0 && touched}
            onBlur={() => setTouched(true)}
          />
          <Box
            display="flex"
            justifyContent="space-between"
            sx={{ marginBottom: 1 }}
          >
            <Button
              variant="text"
              onClick={() => {
                setIsAddingEntry(false);
                setTouched(false);
              }}
            >
              Cancelar
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              endIcon={<SaveOutlinedIcon />}
              onClick={onSave}
            >
              Guardar
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};
