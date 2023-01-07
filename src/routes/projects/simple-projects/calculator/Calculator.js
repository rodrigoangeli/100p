import Animated from "src/layout/animated";
import Board from "./components/Board";
import { Box } from "./styles/styles";

const Calculator = (props) => {
  return (
    <Animated>
      <Box>
        {/* TODO: Make responsive to bigger and smaller screens */}
        <Board />
      </Box>
    </Animated>
  );
};
export default Calculator;
