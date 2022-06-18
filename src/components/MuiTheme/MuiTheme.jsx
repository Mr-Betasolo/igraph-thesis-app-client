import React from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Quicksand",
    button: {
      textTransform: "none",
    },
  },
  palette: {
    primary: {
      main: "#293241",
    },
    secondary: {
      main: "#EE6C4D",
    },
  },
});

const MuiTheme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MuiTheme;
