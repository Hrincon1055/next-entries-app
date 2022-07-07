import { FC, ReactNode, useReducer } from "react";
import { UIContext, uiReducer } from "./";
// INTERFACE
export interface UIState {
  sidemenuOpen: boolean;
  isAddingEntry: boolean;
  isDragging: boolean;
  isLoading: boolean;
}
interface Props {
  children: ReactNode;
}
// STATE INITIAL
const UI_INITIAL_STATE: UIState = {
  sidemenuOpen: false,
  isAddingEntry: false,
  isDragging: false,
  isLoading: false,
};
// INICIO
export const UIProvider: FC<Props> = ({ children }) => {
  // REDUCER
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);
  // FUNCIONES
  const openSideMenu = (): void => {
    dispatch({ type: "UI - Open Sidebar" });
  };
  const closeSideMenu = (): void => {
    dispatch({ type: "UI - Close Sidebar" });
  };
  const setIsAddingEntry = (isAdding: boolean): void => {
    dispatch({ type: "UI - Set isAddingEntry", payload: isAdding });
  };
  const startDragging = (): void => {
    dispatch({ type: "UI - Start Dragging" });
  };
  const endDragging = (): void => {
    dispatch({ type: "UI - End Dragging" });
  };
  const setIsLoading = (isLoading: boolean): void => {
    dispatch({ type: "UI - Set isLoading", payload: isLoading });
  };
  // RENDER
  return (
    <UIContext.Provider
      value={{
        ...state,
        openSideMenu,
        closeSideMenu,
        setIsAddingEntry,
        startDragging,
        endDragging,
        setIsLoading,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
