import { useContext } from "react";
import { TechnologyContext } from "../context/TechnologyContext";

export function useTechnologyContext() {
  const context = useContext(TechnologyContext);
  if (!context) {
    throw new Error(
      "useTechnologyContext must be used within TechnologyProvider"
    );
  }
  return context;
}
