import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import { UserProvider } from "./context/userContext.js";
import ThemeProvider from "./components/MuiTheme/MuiTheme";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <UserProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </UserProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
