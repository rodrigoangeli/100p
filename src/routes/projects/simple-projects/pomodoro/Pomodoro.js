import React, { useEffect, useReducer } from "react";
import { Button, Tab } from "@mui/material";
import Modal from "./components/Modal";
import Animated from "src/layout/animated";
import { useDispatch } from "react-redux";
import { openModal, closeModal } from "store/modal";
import { BoxCard, StyledTabs, Timer } from "./styles/styles";

const timers = [
  {
    label: "Pomodoro",
    time: 25 * 60,
  },
  {
    label: "Short Break",
    time: 1 * 60,
  },
  {
    label: "Long Break",
    time: 15 * 60,
  },
];

const initialState = {
  running: false,
  activeIndex: 0,
  countdown: timers[0].time,
};

const Pomodoro = (props) => {
  const dispatch = useDispatch();
  const [state, setState] = useReducer(
    (state, updates) => ({ ...state, ...updates }),
    initialState
  );

  useEffect(() => {
    let timer1;
    if (state.running && state.countdown > 0) {
      timer1 = setInterval(
        () => setState({ countdown: state.countdown - 1 }),
        1000
      );
    }
    return () => {
      clearInterval(timer1);
    };
  }, [state]);

  const handleChange = (event, value) => {
    if (state.running) {
      dispatch(
        openModal({
          children: <Modal value={value} handleReset={handleReset} />,
        })
      );
    } else {
      handleReset(value);
    }
  };

  const handleReset = (value) => {
    setState({
      running: false,
      activeIndex: value,
      countdown: timers[value].time,
    });
  };

  const seconds = String(state.countdown % 60).padStart(2, 0);
  const minutes = String(Math.floor(state.countdown / 60)).padStart(2, 0);

  return (
    <Animated>
      <BoxCard>
        <StyledTabs
          variant="fullWidth"
          value={state.activeIndex}
          onChange={handleChange}
          centered
        >
          {timers.map((el) => (
            <Tab key={el.label} label={el.label} />
          ))}
        </StyledTabs>
        <Timer>
          {minutes}:{seconds}
        </Timer>
        <Button
          className="w-full"
          variant="contained"
          color="primary"
          fullWidth
          onClick={() => setState({ running: !state.running })}
        >
          {state.running ? "Pause" : "Start"}
        </Button>
      </BoxCard>
    </Animated>
  );
};
export default Pomodoro;
