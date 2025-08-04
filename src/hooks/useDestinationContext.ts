import { useContext } from "react";
import { DestinationContext } from "../context/DestinationContext";

export function useDestinationContext() {
  const context = useContext(DestinationContext);
  if (!context) {
    throw new Error("useDestinationContext must be used within DestinationProvider");
  }
  return context;
}
