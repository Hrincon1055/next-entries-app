/* eslint-disable react-hooks/exhaustive-deps */
import { FC, ReactNode, useEffect, useReducer, useContext } from "react";
import { useSnackbar } from "notistack";
// MIS COMPONENTES
import { EntriesContext, entriesReducer } from "./";
import { Entry } from "../../interfaces";
import { entriesApi } from "../../apis";
import { UIContext } from "../ui";

// INTERFACE
export interface EntriesState {
  entries: Entry[];
}
interface Props {
  children: ReactNode;
}
// STATE INITIAL
const Entries_INITIAL_STATE: EntriesState = {
  entries: [],
};
// INICIO
export const EntriesProvider: FC<Props> = ({ children }) => {
  // HOOKS
  const { setIsLoading } = useContext(UIContext);
  const { enqueueSnackbar } = useSnackbar();
  // REDUCER
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);
  // EFFECTS
  useEffect(() => {
    refreshEntries();
  }, []);
  // FUNCIONES
  const refreshEntries = async (): Promise<void> => {
    try {
      setIsLoading(true);
      const { data } = await entriesApi.get<Entry[]>("/entries");
      dispatch({ type: "[Entry] Refresh-Entry", payload: data });
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };
  const addNewEntry = async (description: string): Promise<void> => {
    const { data } = await entriesApi.post<Entry>("/entries", { description });
    dispatch({
      type: "[Entry] Add-Entry",
      payload: data,
    });
  };
  const updateEntry = async (
    { _id, description, status }: Entry,
    showSnackbar: boolean = false
  ): Promise<void> => {
    try {
      const { data } = await entriesApi.put<Entry>(`/entries/${_id}`, {
        description,
        status,
      });
      dispatch({ type: "[Entry] Update-Entry", payload: data });
      if (showSnackbar) {
        enqueueSnackbar("Entrada Actualizad", {
          variant: "success",
          autoHideDuration: 1500,
          anchorOrigin: {
            vertical: "top",
            horizontal: "right",
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const deleteEntry = async (entry: Entry): Promise<void> => {
    try {
      const { data } = await entriesApi.delete<Entry>(`/entries/${entry._id}`);
      dispatch({ type: "[Entry] Delete-Entry", payload: data });
    } catch (error) {
      console.log(error);
    }
  };
  // RENDER
  return (
    <EntriesContext.Provider
      value={{ ...state, addNewEntry, updateEntry, deleteEntry }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
