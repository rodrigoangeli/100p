import styled from "styled-components";
import SvgIcon from "components/SvgIcon";
import { TextField } from "@mui/material";

export const BoxCard = styled("div")(({ theme }) => ({
  background: theme.palette.background.light,
  boxShadow: theme.shadow.main,
  padding: 15,
  borderRadius: theme.border.radius,
}));

export const Chip = styled("div")(({ theme }) => ({
  color: theme.palette.text.main,
  fontSize: 11,
  textTransform: "uppercase",
  lineHeight: 1,
}));

export const ValuesField = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.main,
  borderRadius: theme.border.radius,
  padding: 3,
  display: "flex",
  flexWrap: "wrap",
  marginTop: 4,
}));

export const Value = styled("div")(({ theme, active }) => ({
  color: theme.palette.common.white,
  borderRadius: theme.border.radius,
  padding: 8,
  fontWeight: 500,
  letterSpacing: "0.5px",
  textAlign: "center",
  flex: "1 0 auto",
  fontSize: 12,
  transition: "background-color 150ms ease",
  textTransform: "uppercase",
  lineHeight: 1,
  margin: 2,
  cursor: "pointer",

  "&.active": {
    backgroundColor: theme.palette.text.primary,
  },

  "&:not(.active):hover": {
    backgroundColor: theme.palette.background.hover.main,
  },
}));

export const AllElements = styled("main")(({ theme, config }) => ({
  backgroundColor: theme.palette.background.main,
  borderRadius: theme.border.radius,
  border: `1px solid ${theme.palette.border.main}`,
  height: "100%",
  padding: 8,
  display: "grid",

  "&.active": {
    borderColor: theme.palette.text.primary,
  },

  ...config,
}));

export const Element = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.light,
  borderRadius: theme.border.radius,
  boxShadow: theme.shadow.main,
  lineHeight: 1,
  color: theme.palette.common.white,
  margin: 5,
  padding: 20,
  /*  height: 70,
  width: 70, */
  position: "relative",
  "& > span": {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translateX(-50%) translateY(-50%)",
  },
}));

export const Button = styled("button")(({ theme, type }) => ({
  border: `1px solid transparent`,
  borderRadius: theme.border.radius,
  height: 32,
  padding: "0 8px",
  color: theme.palette.common.white,
  fontSize: 14,
  fontWeight: 600,
  textTransform: "uppercase",
  transition: "opacity 250ms ease",
  backgroundColor: type
    ? type === "minus"
      ? theme.status.background.error
      : theme.status.background.done
    : "",

  "&:disabled": {
    opacity: 0.4,
    a: {
      cursor: "default",
    },
  },
  "&.element": {
    padding: "0 12px",
    borderColor: theme.palette.text.primary,
    "&.active": {
      backgroundColor: theme.palette.text.primary,
    },
  },
}));

export const Icon = styled(SvgIcon)(({ theme }) => ({
  color: theme.palette.common.white,
}));

export const CodeBox = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.main,
  borderRadius: theme.border.radius,
  padding: "10px 14px",
}));

export const Code = styled("code")(({ theme }) => ({
  backgroundColor: theme.palette.background.main,
  borderRadius: theme.border.radius,
  color: "#E5FA76",
  display: "block",
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  marginTop: "4px!important",
  "& > div": {
    paddingRight: 0,
  },
  "& input, & div[role='button']": {
    paddingTop: "8px",
    paddingBottom: "8px",
  },
}));

export const OptionTextField = styled(TextField)(({ theme }) => ({
  "& > div": {
    "& > div": {
      padding: "6.5px 14px",
      color: theme.palette.text.main,
    },
    "& > fieldset": {
      borderColor: "transparent",
    },
    "&:hover": {
      "& > fieldset": {
        borderColor: "transparent!important",
      },
    },
  },
}));
