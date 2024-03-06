import React, { createContext, useState } from "react";

export const TodoContext = createContext({});

export const Provider = ({ children }) => {
  const [value, setValue] = useState("");

  return (
    <TodoContext.Provider value={[value, setValue]}>
      {children}
    </TodoContext.Provider>
  );
};
