import React, { useState, useEffect, useRef, useContext } from "react";
import Animated from "src/layout/animated";
import { BoxCard, Info } from "./styles/styles";
import { Box } from "@mui/material";
import axios from "axios";
import CenterLoading from "components/CenterLoading";

const CountryIPLookup = (props) => {
  const [{ query, city, regionName, country }, setCountryInfo] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("//api.ipify.org/?format=json")
      .then(({ data }) => {
        return axios.get("//ip-api.com/json/" + data.ip);
      })
      .then((response) => {
        setCountryInfo(response.data);
        setIsLoading(false);
      });
  }, []);

  return isLoading ? (
    <CenterLoading />
  ) : (
    <Animated>
      <Box
        sx={{
          width: 450,
          maxWidth: "100%",
        }}
      >
        <BoxCard className="text-center">
          <Info>
            <span>Your public IP:</span>
            {query}
          </Info>
        </BoxCard>
        <BoxCard className="mt-4 text-center">
          <Info>
            <span>From:</span>
            {city}, {regionName}
            <br />
            {country}
          </Info>
        </BoxCard>
      </Box>
    </Animated>
  );
};
export default CountryIPLookup;
