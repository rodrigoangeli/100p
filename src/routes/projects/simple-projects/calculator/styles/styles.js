import styled from "styled-components";

export const Grid = styled("div")(({ theme }) => ({
  maxWidth: "300px",
  minWidth: "200px",
}));

export const Box = styled("div")(({ theme }) => ({
  background: theme.palette.background.light,
  boxShadow: theme.shadow.main,
  padding: 15,
  borderRadius: theme.border.radius,
}));

export const Piece = styled("div")(({ theme }) => ({
  height: "5vw",
  width: "5vw",
  minWidth: "55px",
  minHeight: "55px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  backgroundColor: theme.palette.background.lighter,
  transition: "background-color 250ms ease",
  borderRadius: theme.border.radius,
  color: theme.palette.common.white,
  fontSize: 20,

  "&:hover": {
    backgroundColor: theme.palette.background.hover.main,
  },
  "&:active,&.active": {
    backgroundColor: theme.palette.background.hover.light,
  },
}));

export const Result = styled("div")(({ theme }) => ({
  display: "flex",
  fontSize: 35,
  fontWeight: 700,
  justifyContent: "end",
  alignItems: "center",
  lineHeight: 1,
  padding: "15px 8px",
  marginBottom: "15px",
  borderRadius: theme.border.radius,
  backgroundColor: "#252834",
  color: theme.palette.common.white,
  maxWidth: "300px",
  minHeight: 65,
  width: "100%",
  overflow: "auto",
}));
