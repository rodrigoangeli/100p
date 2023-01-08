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
  fontSize: 25,

  "& > span": {
    fontSize: ".5em",
    textTransform: "uppercase",
    color: theme.palette.text.main,
    display: "block",
  },
}));
