import styled from "styled-components";

export const BoxCard = styled("div")(({ theme }) => ({
  background: theme.palette.background.light,
  boxShadow: theme.shadow.main,
  padding: 15,
  borderRadius: theme.border.radius,
}));

export const Info = styled("div")(({ theme }) => ({
  color: theme.palette.common.white,
  lineHeight: 1.45,

  "& > span": {
    fontSize: ".7em",
    textTransform: "uppercase",
    color: theme.palette.text.main,
    display: "block",
  },
}));
