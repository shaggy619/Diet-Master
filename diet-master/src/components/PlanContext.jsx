import React, { createContext, useState } from "react";

export const PlanContext = createContext();

export const PlanProvider = ({ children }) => {
  const [selectedPlan, setSelectedPlan] = useState("One Time Plan");

  return (
    <PlanContext.Provider value={{ selectedPlan, setSelectedPlan }}>
      {children}
    </PlanContext.Provider>
  );
};
