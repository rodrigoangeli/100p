import { createTheme } from "@mui/material/styles";

export const theme = {
  border: {
    radius: 6,
  },
  shadow: {
    main: "rgba(0, 0, 0, 0.15) 0px 25px 50px -12px;",
  },
  font: {
    family: `"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif`,
  },
  palette: {
    background: {
      main: "#181a20",
      light: "#1e212c",
      lighter: "#252834",
      hover: {
        main: "#282b38",
        light: "#31353e",
        lighter: "#70737e",
      },
    },
    text: {
      main: "#646879",
    },
    border: {
      main: "#414652",
    },
    common: {
      white: "white",
      black: "black",
    },
  },
  status: {
    background: {
      tbd: "#262a34",
      progress: "#6a93bd",
      done: "#7fbd6a",
      error: "#e36049",
    },
    color: {
      tbd: "#646879",
      progress: "white",
      done: "white",
      error: "white",
    },
  },
};

export const mui = createTheme({
  typography: {
    fontFamily: theme.font.family,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiCheckbox: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          color: theme.palette.background.hover.light,
        },
      },
    },
    MuiButton: {
      defaultProps: {
        variant: "text",
        color: "inherit",
      },
      styleOverrides: {
        root: {
          borderRadius: theme.border.radius,
        },
        sizeMedium: {
          height: 40,
          minHeight: 40,
          maxHeight: 40,
        },
        contained: {
          boxShadow: "none",
          "&:hover, &:focus": {
            boxShadow: "none",
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: theme.border.radius,
          backgroundColor: theme.palette.background.light,
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          color: theme.palette.common.white,
        },
      },
    },
    MuiDialogContentText: {
      styleOverrides: {
        root: {
          color: theme.palette.background.hover.light,
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.background.main,
          color: theme.palette.common.white,
          "&:hover": {
            backgroundColor: theme.palette.background.main,
          },
          "&.Mui-focused": {
            backgroundColor: theme.palette.background.main,
          },
          "&:before, &:after": {
            display: "none",
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: theme.palette.text.main,
        },
      },
    },
    MuiInputLabel: {
      defaultProps: {
        color: "primary",
      },
      styleOverrides: {
        filled: {
          color: theme.palette.text.main,
          "&.Mui-focused": {
            color: theme.palette.text.main,
          },
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#8500ff",
    },
  },
});
