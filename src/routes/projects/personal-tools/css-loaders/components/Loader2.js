import React from "react";
import { Loader2Wrapper } from "../styles/styles";

const Loader2 = ({ size, time }) => {
  return (
    <Loader2Wrapper size={size} time={time}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </Loader2Wrapper>
  );
};

export default Loader2;
