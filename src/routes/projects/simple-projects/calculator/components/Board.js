import React from "react";
import Button from "./Button";
import { useState, useEffect, useReducer } from "react";
import { Display } from "./Display";
import { Grid } from "../styles/styles";

const pad = [
  "7",
  "8",
  "9",
  "/",
  "4",
  "5",
  "6",
  "*",
  "1",
  "2",
  "3",
  "-",
  "0",
  ".",
  "+",
  "=",
];

const initialState = {
  current: "",
  old: "",
  result: null,
  operator: null,
  status: "",
};

const Board = (props) => {
  const [data, setData] = useReducer(
    (state, updates) => ({ ...state, ...updates }),
    initialState
  );
  const [lastPressed, setLastPressed] = useState(null);

  const handleInput = (digit) => {
    // Check if digit is a operation
    if (isNaN(parseInt(digit))) {
      setData({
        old: data.current,
        current: "",
        operator: digit,
      });
    } else {
      if (data.result) {
        setData({
          current: digit,
          result: "",
        });
      } else {
        setData({
          current: data.current + digit,
        });
      }
    }
  };

  const handleOperation = (n1, n2, operation) => {
    var a = parseFloat(n1);
    var b = parseFloat(n2);
    var res;
    switch (operation) {
      case "+":
        res = a + b;
        break;
      case "-":
        res = a - b;
        break;
      case "*":
        res = a * b;
        break;
      case "/":
        res = a / b;
        break;
      default:
        res = n1;
        break;
    }
    return res.toString();
  };

  const handleSubmit = () => {
    var calc = handleOperation(data.old, data.current, data.operator);
    if (!isFinite(calc)) {
      if (isNaN(calc)) {
        setData({ ...initialState, status: "It's broken :)" });
      } else {
        setData({ ...initialState, status: "Cannot divide by zero" });
      }
    } else {
      setData({
        result: calc,
        old: 0,
        current: calc,
      });
    }
  };

  const handleKey = ({ key }) => {
    if (key === "Enter" || key === "=") {
      handleSubmit();
      setLastPressed("=");
    } else {
      if (pad.includes(key)) {
        setLastPressed(key);
        handleInput(key);
      }
    }
  };

  useEffect(() => {
    if (lastPressed) {
      let timer1 = setTimeout(() => setLastPressed(null), 150);
      return () => {
        clearTimeout(timer1);
      };
    }
  }, [lastPressed]);

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [handleKey]);

  return (
    <>
      <Display
        old={data.old}
        operator={data.operator}
        current={data.current}
        status={data.status}
      />
      <Grid className="grid grid-cols-4 gap-2">
        {pad.map((value) => (
          <Button
            key={value}
            lastPressed={lastPressed}
            onClick={(val) => handleInput(val)}
            value={value}
          />
        ))}
      </Grid>
    </>
  );
};

export default Board;
