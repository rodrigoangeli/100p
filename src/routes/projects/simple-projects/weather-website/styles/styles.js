import styled from "styled-components";

export const Temp = styled("h1")(({ theme }) => ({
  fontSize: "clamp(6.25rem, -1.5625rem + 25vw, 12.5rem)",
  lineHeight: 0.8,
  textAlign: "center",
  fontWeight: 700,
  margin: "20px 0",
  color: theme.palette.common.white,
  position: "relative",
  marginLeft: ".25em",

  "& small": {
    fontSize: ".25em",
    verticalAlign: "super",
    fontWeight: 500,
  },
}));

export const Description = styled("h4")(({ theme }) => ({
  fontSize: 22,
  textAlign: "center",
  lineHeight: 1.2,
  color: theme.palette.common.white,

  "& b": {
    display: "block",
    fontSize: 32,
  },
}));

export const Effect = styled("div")(({ theme, color1, color2 }) => ({
  height: 6,
  width: "50%",
  position: "absolute",
  bottom: 0,
  borderRadius: 50,
  left: "50%",
  transform: "translateX(-50%)",
  background: `linear-gradient(to right, ${color1} 0%,${color2} 100%)`,
}));

export const Infos = styled("div")(({ theme }) => ({
  display: "flex",
  marginTop: 15,
  marginBottom: 15,
  "& > span": {
    fontSize: 14,
    margin: "0 13px",
    textAlign: "center",
    letterSpacing: 0.6,
    fontWeight: 600,
    color: theme.palette.common.white,

    "& b": {
      display: "block",
      fontWeight: 400,
      color: theme.palette.background.hover.lighter,
    },
  },
}));

export const Historical = styled("div")(({ theme }) => ({
  marginTop: 20,
  padding: "0 20px",
  borderLeft: `1px solid ${theme.palette.background.hover.light}`,

  "&:first-child": {
    borderLeft: 0,
  },
}));

export const HistoricalTemp = styled("div")(({ theme }) => ({
  color: theme.palette.common.white,
  fontSize: 23,
  "& > span": {
    color: theme.palette.background.hover.lighter,
    fontSize: ".7em",
    marginLeft: 3,
  },
}));

export const HistoricalDate = styled("div")(({ theme }) => ({
  color: theme.palette.background.hover.lighter,
  fontSize: 15,
  textTransform: "uppercase",
  textAlign: "center",
  marginTop: 5,
  "& > span": {
    display: "block",
    color: theme.palette.common.white,
    fontSize: "1.1em",
  },
}));
