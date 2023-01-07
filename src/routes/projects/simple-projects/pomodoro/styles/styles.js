import styled from "styled-components";
import { Tabs } from "@mui/material";

export const BoxCard = styled("div")(({ theme }) => ({
  background: theme.palette.background.light,
  boxShadow: theme.shadow.main,
  padding: 15,
  borderRadius: theme.border.radius,
  width: "100%",
  maxWidth: 450,
}));

export const StyledTabs = styled(Tabs)(({ theme }) => ({
  background: theme.palette.background.main,
  padding: 8,
  borderRadius: theme.border.radius,
  position: "relative",
  zIndex: 2,

  "& button": {
    paddingTop: 7,
    paddingBottom: 7,
    minHeight: 38,
    color: theme.palette.background.hover.lighter,

    "&.Mui-selected": {
      color: theme.palette.common.white,
    },
  },

  "& .MuiTabs-indicator": {
    height: "100%",
    zIndex: -1,
    background: theme.palette.background.lighter,
    borderRadius: theme.border.radius,
  },
}));

export const Timer = styled("h1")(({ theme }) => ({
  color: theme.palette.common.white,
  textAlign: "center",
  fontSize: "clamp(86px, 8vw, 112px)",
  fontWeight: 700,
}));
