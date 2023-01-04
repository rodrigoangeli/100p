import { ThemeProvider } from "styled-components";
import { memo, useEffect, useLayoutEffect } from "react";
import theme from "../configs/theme";

function Theme(props) {
  useEffect(() => {
    /*   document.body.classList.add(mode === 'light' ? 'light' : 'dark');
    document.body.classList.remove(mode === 'light' ? 'dark' : 'light'); */
    document.body.classList.add("dark");
  }, []);
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}

export default memo(Theme);
