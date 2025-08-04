import { useState } from "react";
import type { ReactNode } from "react";
import { TechnologyContext, technologyData } from "./TechnologyContext";

export function TechnologyProvider({ children }: { children: ReactNode }) {
  const [activeTech, setActiveTech] = useState(1);

  return (
    <TechnologyContext.Provider
      value={{ activeTech, setActiveTech, technologies: technologyData }}
    >
      {children}
    </TechnologyContext.Provider>
  );
}
