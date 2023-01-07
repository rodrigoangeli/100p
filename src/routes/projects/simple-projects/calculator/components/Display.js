import React from "react";
import { Result } from "../styles/styles";

export const Display = ({ old, operator, current }) => {
  return (
    <Result>
      <div>{old !== 0 && old}</div>
      <div>{old !== 0 && operator}</div>
      <div>{current}</div>
    </Result>
  );
};
