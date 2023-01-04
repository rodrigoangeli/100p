import React from "react";
import Cell from "./Cell";

class Board extends React.Component {
  state = this.getInitialState();

  getInitialState() {
    const initialState = {
      minesCount: this.props.mines,
      gameStatus: this.props.gameStatus,
      revealedCells: 0,
    };
    return initialState;
  }

  plantMines() {}

  render() {
    return <div></div>;
  }
}

export default Board;
