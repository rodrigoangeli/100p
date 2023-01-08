import styled from "styled-components";

export const BoxCard = styled("div")(({ theme }) => ({
  background: theme.palette.background.light,
  boxShadow: theme.shadow.main,
  padding: 15,
  borderRadius: theme.border.radius,
}));

export const Score = styled("h1")(({ theme }) => ({
  color: theme.palette.common.white,
  fontSize: 120,
  fontWeight: 800,
  lineHeight: 1,
}));
