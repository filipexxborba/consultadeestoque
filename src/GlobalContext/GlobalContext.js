import React from "react";
export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const apiURL = `http://172.17.0.100:9995`;
  const [currentMethod, setCurrentMethod] = React.useState(true);

  return (
    <GlobalContext.Provider
      value={{
        apiURL,
        currentMethod,
        setCurrentMethod,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
