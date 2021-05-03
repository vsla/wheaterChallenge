import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "./theme";
import Homepage from "views/Homepage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Homepage />
    </ThemeProvider>
  );
}

export default App;
