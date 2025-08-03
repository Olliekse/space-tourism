import { useState } from "react";
import type { ReactNode } from "react";
import { TabContext, destinationData } from "./TabContext";

export function TabProvider({ children }: { children: ReactNode }) {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <TabContext.Provider
      value={{ activeTab, setActiveTab, destinations: destinationData }}
    >
      {children}
    </TabContext.Provider>
  );
}
