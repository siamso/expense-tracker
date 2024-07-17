import React, { createContext, useState } from "react";

export const GlobalContext = createContext(null);
function GlobalState({ children }) {
  const [ds, setDs] = useState("");
  return <GlobalContext.Provider value={ds}>{children}</GlobalContext.Provider>;
}

export default GlobalState;
