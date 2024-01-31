import React from "react";
import ReactDOM from "react-dom/client";

// REACT ROUTER
import { BrowserRouter as Router } from "react-router-dom";
import RoutesEnneConfeitaria from "./routes";

// STYLED COMPONENTS
import GlobalStyles from "./styles/global";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <RoutesEnneConfeitaria />
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);
