import React from "react";
import { Loader1Wrapper } from "../styles/styles";

const Loader1 = ({ size, time }) => {
  return (
    <Loader1Wrapper size={size} time={time}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </Loader1Wrapper>
  );
};

export default Loader1;
