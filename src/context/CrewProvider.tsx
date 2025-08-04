import { useState } from "react";
import type { ReactNode } from "react";
import { CrewContext, crewMembers } from "./CrewContext";

export function CrewProvider({ children }: { children: ReactNode }) {
  const [activeCrewMember, setActiveCrewMember] = useState(1);

  return (
    <CrewContext.Provider
      value={{ activeCrewMember, setActiveCrewMember, crewMembers }}
    >
      {children}
    </CrewContext.Provider>
  );
}
