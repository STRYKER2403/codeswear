import React from 'react'
import FullLayout from "../../src/layouts/FullLayout";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../src/theme/theme";

const imageuploader = () => {
  return (
    <ThemeProvider theme={theme}>
    <FullLayout>
    Image Uploader
    </FullLayout>
    </ThemeProvider>
  );
}

export default imageuploader
