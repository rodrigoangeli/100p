import React, { useState, useEffect, useRef, useContext } from "react";
import { useDispatch } from "react-redux";
import { openModal, closeModal } from "../../../../store/modal";
import Game from "./components/Game";

const Minesweeper = (props) => {
  const dispatch = useDispatch();
  return <Game />;
};

export default Minesweeper;
