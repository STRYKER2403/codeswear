import React from 'react'
import FullLayout from "../../src/layouts/FullLayout";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../src/theme/theme";

const allorders = () => {
  return (
    <ThemeProvider theme={theme}>
    <FullLayout>
    All Orders
    </FullLayout>
    </ThemeProvider>
  );
}

export default allorders
