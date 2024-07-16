import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme.js";
import GlobalState from "./context/GlobalContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalState>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </GlobalState>
  </React.StrictMode>
);
