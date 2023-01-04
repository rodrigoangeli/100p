import React from "react";
import Board from "./Board";

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.board = React.createRef();

    this.difficulties = {
      easy: 12,
      medium: 24,
      hard: 36,
    };

    this.state = {
      height: 12,
      width: 12,
      difficulty: "easy",
      mines: 10,
      gameStatus: 0,
    };
  }

  changeDifficulty = (difficulty) => () => {
    this.setState({
      height: this.difficulties[difficulty],
      width: this.difficulties[difficulty],
      difficulty: difficulty,
    });
  };

  restartGame = () => {
    this.board.current.restartBoard();
  };

  render() {
    const { height, width, mines, gameStatus, difficulty } = this.state;
    return (
      <div>
        <Board
          height={height}
          width={width}
          mines={mines}
          gameStatus={gameStatus}
          ref={this.board}
        />
        {height}
        {width}
        {gameStatus}
        {difficulty}
        <div onClick={this.changeDifficulty("easy")}>easy</div>
        <div onClick={this.changeDifficulty("medium")}>medium</div>
        <div onClick={this.changeDifficulty("hard")}>hard</div>
      </div>
    );
  }
}

export default Game;
