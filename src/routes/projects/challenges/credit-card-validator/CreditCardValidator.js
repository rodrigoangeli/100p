import React, { useState, useEffect, useRef, useContext } from "react";
import Animated from "src/layout/animated";
import { Box, TextField } from "@mui/material";
import { BoxCard, Approval } from "./styles/styles";

const cardsRegex = {
  Amex: /^3[47][0-9]{13}$/,
  Diners: /(36[0-8][0-9]{3}|369[0-8][0-9]{2}|3699[0-8][0-9]|36999[0-9])/,
  Discover: /^6(?:011|5[0-9]{2})[0-9]{12}/,
  Elo: /^4011(78|79)|^43(1274|8935)|^45(1416|7393|763(1|2))|^50(4175|6699|67[0-6][0-9]|677[0-8]|9[0-8][0-9]{2}|99[0-8][0-9]|999[0-9])|^627780|^63(6297|6368|6369)|^65(0(0(3([1-3]|[5-9])|4([0-9])|5[0-1])|4(0[5-9]|[1-3][0-9]|8[5-9]|9[0-9])|5([0-2][0-9]|3[0-8]|4[1-9]|[5-8][0-9]|9[0-8])|7(0[0-9]|1[0-8]|2[0-7])|9(0[1-9]|[1-6][0-9]|7[0-8]))|16(5[2-9]|[6-7][0-9])|50(0[0-9]|1[0-9]|2[1-9]|[3-4][0-9]|5[0-8]))/,
  Hipercard: /^606282|^3841(?:[0|4|6]{1})0/,
  Mastercard:
    /^((5(([1-2]|[4-5])[0-9]{8}|0((1|6)([0-9]{7}))|3(0(4((0|[2-9])[0-9]{5})|([0-3]|[5-9])[0-9]{6})|[1-9][0-9]{7})))|((508116)\\d{4,10})|((502121)\\d{4,10})|((589916)\\d{4,10})|(2[0-9]{15})|(67[0-9]{14})|(506387)\\d{4,10})/,
  Visa: /^4[0-9]{15}$/,
};

const CreditCardValidator = (props) => {
  const [inputText, setInputText] = useState("");
  const [cardType, setCardType] = useState("");

  useEffect(() => {
    var type = Object.keys(cardsRegex)
      .filter((e) => cardsRegex[e].test(inputText))
      .shift();
    setCardType(type);
  }, [inputText]);

  const handleInput = (e) => {
    setInputText(e.replace(/[^\d]+/g, "").replace(/[ -]/g, ""));
  };

  return (
    <Animated>
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
        }}
      >
        <BoxCard>
          <TextField
            label="Type a card number"
            className="w-full"
            variant="filled"
            autoFocus
            onChange={(event) => handleInput(event.target.value)}
            helperText={
              "This tool does not store any of the credit card numbers you enter."
            }
            value={inputText}
          />
        </BoxCard>

        <div className="text-center mt-4">
          <p>This credit card is:</p>
          <Approval cardType={cardType}>
            {cardType ? "Valid" : "Invalid"}
            <span>{cardType ? cardType : "-"}</span>
          </Approval>
        </div>
      </Box>
    </Animated>
  );
};

export default CreditCardValidator;
