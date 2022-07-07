/* eslint-disable react-hooks/exhaustive-deps */
import React, { DragEvent, FC, useContext, useMemo } from "react";
import { List, Paper } from "@mui/material";
// MIS COMPONENTES
import { EntriesContext } from "../../context/entries";
import { EntryStatus } from "../../interfaces";
import { EntryCard } from "./";
import { UIContext } from "../../context/ui";
import styles from "./entryList.module.css";

// INTERFACE
interface Props {
  status: EntryStatus;
}
// INICIO
export const EntryList: FC<Props> = ({ status }) => {
  // HOOKS
  const { entries, updateEntry } = useContext(EntriesContext);
  const { isDragging, endDragging } = useContext(UIContext);
  // CONSTANTES
  const entriesByStatus = useMemo(
    () => entries.filter((entry) => entry.status === status),
    [entries]
  );
  const allowDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };
  const onDropEntry = (e: DragEvent<HTMLDivElement>) => {
    const id = e.dataTransfer.getData("text");
    const entry = entries.find((entry) => entry._id === id)!;
    entry.status = status;
    updateEntry(entry);
    endDragging();
  };
  // RENDER
  return (
    <div
      onDrop={onDropEntry}
      onDragOver={allowDrop}
      className={isDragging ? styles.dragging : ""}
    >
      <Paper
        sx={{
          height: "calc(100vh - 165px)",
          overflowY: "scroll",
          backgroundColor: "transparent",
          padding: "1px 5px",
        }}
      >
        <List sx={{ opacity: isDragging ? 0.2 : 1, transition: "all .3s" }}>
          {entriesByStatus.map((entry) => (
            <EntryCard key={entry._id} entry={entry} />
          ))}
        </List>
      </Paper>
    </div>
  );
};
