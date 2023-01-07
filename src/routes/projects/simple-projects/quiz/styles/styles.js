import SvgIcon from "components/SvgIcon";
import styled from "styled-components";

export const Image = styled("img")(({ theme }) => ({
  width: "100%",
  maxWidth: "400px",
  borderRadius: theme.border.radius,
  margin: "0 auto",
}));

export const BoxCard = styled("div")(({ theme }) => ({
  background: theme.palette.background.light,
  boxShadow: theme.shadow.main,
  padding: 15,
  borderRadius: theme.border.radius,
}));

export const Title = styled("h4")(({ theme }) => ({
  color: theme.palette.common.white,
  fontWeight: 600,
}));

export const Subtitle = styled("h6")(({ theme }) => ({
  color: theme.palette.text.main,
  fontWeight: 300,
}));

export const Score = styled("h1")(({ theme }) => ({
  color: theme.palette.common.white,
  fontSize: 120,
  fontWeight: 800,
  lineHeight: 1,
}));

export const Icon = styled(SvgIcon)(({ theme, answerResult }) => ({
  color: answerResult === "check" ? "#7fbd6a" : "#e36049",
  margin: "0 auto",
  width: 120,
}));
