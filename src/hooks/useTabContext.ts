import { useContext } from "react";
import { TabContext } from "../context/HomeMenuContext";

export function useTabContext() {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error("useTabContext must be used within TabProvider");
  }
  return context;
}
