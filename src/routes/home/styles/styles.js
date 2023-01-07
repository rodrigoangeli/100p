import styled from "styled-components";
import SvgIcon from "components/SvgIcon";
import { Tabs, Box } from "@mui/material";
import { Link } from "react-router-dom";

export const Card = styled(Link)(({ theme, status }) => ({
  backgroundColor: theme.status.background.tbd,
  borderRadius: theme.border.radius,
  pointerEvents: status === "tbd" ? "none" : "auto",
}));

export const IconBorder = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.light,
}));

export const IconWrapper = styled("div")(({ theme, status }) => ({
  backgroundColor: theme.status.background[status],
}));

export const Icon = styled(SvgIcon)(({ theme, status }) => ({
  color: theme.status.color[status],
}));

export const Title = styled("p")(({ theme, status }) => ({
  color: theme.status.color[status],
  lineHeight: 1.1,
}));

export const CategoryWrapper = styled("div")(({ theme }) => ({
  position: "absolute",
  height: "100%",
  width: "20px",
  left: "-30px",
  textAlign: "center",
}));
export const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  margin: "38px 0",
  borderBottom: `1px solid ${theme.palette.background.lighter}`,

  "& svg": {
    color: theme.palette.text.main,
  },
}));

export const StyledTabs = styled(Tabs)(({ theme }) => ({
  background: theme.palette.background.main,
  borderRadius: 0,
  position: "relative",
  zIndex: 2,
  alignItems: "end",
  width: "100%",

  "& button": {
    padding: "15px 20px",
    minHeight: 38,
    color: theme.palette.background.hover.lighter,
    fontSize: 19,
    textTransform: "none",

    "&.Mui-selected": {
      color: theme.palette.common.white,
    },
  },
}));

export const Category = styled("div")(({ theme, status, color }) => ({
  textTransform: "uppercase",
  fontSize: 10,
  letterSpacing: 0.7,
  top: "50%",
  right: "calc(-50% - -20px)",
  transform: "translateY(-50%) translateX(50%) rotate(-90deg)",
  position: "absolute",
  whiteSpace: "nowrap",
  color: color,
}));

export const CategoryLine = styled("span")(({ theme, color }) => ({
  position: "absolute",
  height: "calc(100% + 20px)",
  width: "1px",
  top: -10,
  right: -2,
  boxShadow: `-0.25px 0  0 ${color}`,
}));

export const CategoryLineBorder = styled("span")(({ theme, color }) => ({
  position: "absolute",
  height: "1px",
  width: "10px",
  right: -10,
  boxShadow: `0 -0.25px 0 ${color}`,
}));

export const CategoryLineTop = styled(CategoryLineBorder)(
  ({ theme, color }) => ({
    top: -10,
  })
);

export const CategoryLineBottom = styled(CategoryLineBorder)(
  ({ theme, color }) => ({
    bottom: -11,
  })
);
