import { createContext, useContext, useState } from "react";

const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [activeMode, setActiveMode] = useState("practice");

  return (
    <DashboardContext.Provider value={{ activeMode, setActiveMode }}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => useContext(DashboardContext);
