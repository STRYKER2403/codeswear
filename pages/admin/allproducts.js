import React from 'react'
import FullLayout from "../../src/layouts/FullLayout";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../src/theme/theme";

const allproducts = () => {
  return (
    <ThemeProvider theme={theme}>
    <FullLayout>
    All Products
    </FullLayout>
    </ThemeProvider>
  );
}

export default allproducts
