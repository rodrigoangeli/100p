import React from "react";
import { Loader3Wrapper } from "../styles/styles";

const Loader3 = ({ size, time }) => {
  return (
    <Loader3Wrapper size={size} time={time}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </Loader3Wrapper>
  );
};

export default Loader3;
