import { ThemeProvider } from "styled-components";
import { memo, useEffect, useLayoutEffect } from "react";
import { theme, mui } from "configs/theme";
import * as Provider from "@mui/material/styles";

function Theme(props) {
  useEffect(() => {
    /*   document.body.classList.add(mode === 'light' ? 'light' : 'dark');
    document.body.classList.remove(mode === 'light' ? 'dark' : 'light'); */
    document.body.classList.add("dark");
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Provider.ThemeProvider theme={mui}>
        {props.children}
      </Provider.ThemeProvider>
    </ThemeProvider>
  );
}

export default memo(Theme);
