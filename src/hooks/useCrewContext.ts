import { useContext } from "react";
import { CrewContext } from "../context/CrewContext";

export function useCrewContext() {
  const context = useContext(CrewContext);
  if (!context) {
    throw new Error("useCrewContext must be used within CrewProvider");
  }
  return context;
}
