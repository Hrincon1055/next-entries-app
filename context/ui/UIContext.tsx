import { createContext } from "react";
// INTERFACE
interface ContextProps {
  sidemenuOpen: boolean;
  isAddingEntry: boolean;
  isDragging: boolean;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  openSideMenu: () => void;
  closeSideMenu: () => void;
  setIsAddingEntry: (status: boolean) => void;
  startDragging: () => void;
  endDragging: () => void;
}
// INICIO
export const UIContext = createContext({} as ContextProps);
