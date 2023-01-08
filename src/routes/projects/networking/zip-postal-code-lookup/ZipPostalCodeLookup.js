import React, { useState, useEffect, useRef, useContext } from "react";
import Animated from "src/layout/animated";
import { BoxCard, Info } from "./styles/styles";
import { TextField, Button, Box } from "@mui/material";
import axios from "axios";
import CenterLoading from "components/CenterLoading";

const ZipPostalCodeLookup = (props) => {
  const [inputText, setInputText] = useState("");
  const [postalInfo, setPostalInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const zipCode = inputText;
    axios
      .get(
        `https://app.zipcodebase.com/api/v1/search?apikey=${process.env.REACT_APP_ZIPCODE_KEY}&codes=${zipCode}`
      )
      .then(({ data }) => {
        setPostalInfo(data.results[zipCode][0]);
        setIsLoading(false);
      });
  };

  return isLoading ? (
    <CenterLoading />
  ) : postalInfo ? (
    <Animated>
      <BoxCard>
        <Box
          sx={{
            width: 650,
            maxWidth: "100%",
          }}
        >
          <div className="flex flex-wrap w-full">
            {Object.keys(postalInfo).map(
              (el) =>
                postalInfo[el] !== "" &&
                el !== "province_code" && (
                  <Box key={el} className="md:basis-1/3 mb-3">
                    <Info>
                      <span>{el}</span>
                      {postalInfo[el]}
                    </Info>
                  </Box>
                )
            )}
          </div>
          <iframe
            className="w-full"
            height="170"
            src={`https://maps.google.com/maps?q=${postalInfo["latitude"]},${postalInfo["longitude"]}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
          ></iframe>
        </Box>
      </BoxCard>
    </Animated>
  ) : (
    <Animated>
      <BoxCard>
        <form onSubmit={handleSubmit}>
          <Box
            sx={{
              width: 450,
              maxWidth: "100%",
            }}
          >
            <TextField
              label="Type your Zip code"
              className="w-full"
              variant="filled"
              onChange={(event) => setInputText(event.target.value)}
              value={inputText}
              required
            />
          </Box>
          <div className="mt-2">
            <Button
              className="w-full"
              variant="contained"
              color="primary"
              fullWidth
              type="submit"
              disableRipple
            >
              submit
            </Button>
          </div>
        </form>
      </BoxCard>
    </Animated>
  );
};
export default ZipPostalCodeLookup;
