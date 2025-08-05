// src/components/LoaderContext.jsx
import React, { createContext, useState, useContext } from "react";

const LoaderContext = createContext();

export const LoaderProvider = ({ children }) => {
  const [hasLoadedOnce, setHasLoadedOnce] = useState(false);

  return (
    <LoaderContext.Provider value={{ hasLoadedOnce, setHasLoadedOnce }}>
      {children}
    </LoaderContext.Provider>
  );
};

export const useLoaderContext = () => useContext(LoaderContext);
