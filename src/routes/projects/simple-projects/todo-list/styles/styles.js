import styled from "styled-components";
import SvgIcon from "components/SvgIcon";

export const BoxCard = styled("div")(({ theme }) => ({
  background: theme.palette.background.light,
  boxShadow: theme.shadow.main,
  padding: 15,
  borderRadius: theme.border.radius,
  width: "100%",
  maxWidth: 550,
}));

export const TodoItem = styled("li")(({ theme, completed }) => ({
  padding: "5px 9px 5px 0",
  border: `1px solid ${theme.palette.background.lighter}`,
  display: "flex",
  alignItems: "center",

  "& > p": {
    lineHeight: 1.1,
    fontWeight: 300,
    color: completed ? theme.palette.text.main : theme.palette.common.white,
    textDecoration: completed ? "line-through" : "none",
    wordBreak: "break-word",
  },
}));

export const Icon = styled(SvgIcon)(({ theme }) => ({
  color: theme.status.color.tbd,
  transition: "color 250ms ease",
  marginLeft: "5px",
  "&:hover": {
    color: "#e36049",
  },
}));
