import styled from "styled-components";

export const BoxCard = styled("div")(({ theme }) => ({
  background: theme.palette.background.light,
  boxShadow: theme.shadow.main,
  padding: 15,
  borderRadius: theme.border.radius,
}));

export const Approval = styled("h1")(({ theme, cardType }) => ({
  color: cardType
    ? theme.status.background.done
    : theme.status.background.error,
  fontSize: 70,
  fontWeight: 700,
  lineHeight: 1,

  "& span": {
    fontSize: ".5em",
    fontWeight: 500,
    display: "block",
  },
}));
