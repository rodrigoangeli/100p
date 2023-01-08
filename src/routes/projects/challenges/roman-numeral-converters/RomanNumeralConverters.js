import React, { useState, useEffect, useRef, useContext } from "react";
import { TextField, Button, Box } from "@mui/material";
import Animated from "src/layout/animated";
import { BoxCard, Score } from "./styles/styles";

const symbolValues = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const RomanNumeralConverters = (props) => {
  const [inputText, setInputText] = useState("");
  const [resultValue, setResultValue] = useState("");
  const [validRoman, setValidRoman] = useState(null);

  const handleInput = (e) => {
    var text = e.replace(/[^ivxlcdm]+/gi, "").toUpperCase();
    if (/^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/.test(text)) {
      setValidRoman(true);
    } else {
      setValidRoman(false);
    }
    setInputText(text);
  };

  const romanToInt = (s) => {
    let romans = Object.keys(symbolValues);
    let acc = 0;
    for (let i = 0; i < s.length; i++) {
      if (romans.indexOf(s[i]) < romans.indexOf(s[i + 1])) {
        acc += symbolValues[s[i + 1]] - symbolValues[s[i]];
        i++;
      } else {
        acc += symbolValues[s[i]];
      }
    }
    return acc;
  };

  useEffect(() => {
    if (validRoman) {
      setResultValue(romanToInt(inputText));
    }
  }, [inputText]);

  return (
    <Animated>
      <BoxCard>
        <Box
          sx={{
            width: 450,
            maxWidth: "100%",
          }}
        >
          <TextField
            label="Type a roman numeral"
            className="w-full"
            variant="filled"
            autoFocus
            onChange={(event) => handleInput(event.target.value)}
            value={inputText}
          />
        </Box>
      </BoxCard>
      <div className="text-center mt-4">
        <p>Translates to:</p>
        <Score>
          {resultValue === "" ? 0 : validRoman ? resultValue : "Invalid"}
        </Score>
      </div>
    </Animated>
  );
};
export default RomanNumeralConverters;
