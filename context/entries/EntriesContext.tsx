import { createContext } from "react";
// MIS COMPONENTES
import { Entry } from "../../interfaces";
// INTERFACE
interface ContextProps {
  entries: Entry[];
  addNewEntry: (description: string) => Promise<void>;
  updateEntry: (entry: Entry, showSnackbar?: boolean) => Promise<void>;
  deleteEntry: (entry: Entry) => Promise<void>;
}
// INICIO
export const EntriesContext = createContext({} as ContextProps);
