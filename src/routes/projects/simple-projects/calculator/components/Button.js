import React from "react";
import { Piece } from "../styles/styles";

const Button = (props) => {
  return (
    <Piece
      className={props.lastPressed === props.value ? "active" : ""}
      onClick={() => props.onClick(props.value)}
    >
      {props.value}
    </Piece>
  );
};

export default Button;
