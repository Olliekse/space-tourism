import { useState } from "react";
import type { ReactNode } from "react";
import { DestinationContext, destinationData } from "./DestinationContext";

export function DestinationProvider({ children }: { children: ReactNode }) {
  const [activeDestination, setActiveDestination] = useState(1);

  return (
    <DestinationContext.Provider
      value={{
        activeDestination,
        setActiveDestination,
        destinations: destinationData,
      }}
    >
      {children}
    </DestinationContext.Provider>
  );
}
