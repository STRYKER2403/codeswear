import React from 'react'
import FullLayout from "../../src/layouts/FullLayout";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../src/theme/theme";


const add = () => {
  return (
    <ThemeProvider theme={theme}>
    <FullLayout>
    Add Products
    </FullLayout>
    </ThemeProvider>
  );
}

export default add
