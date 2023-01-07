import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";
import useGeoLocation from "hooks/useGeoLocation";
import Animated from "src/layout/animated";
import { Tabs, Box } from "@mui/material";
import CenterLoading from "components/CenterLoading";
import moment from "moment/moment";
import {
  Description,
  Temp,
  Effect,
  Infos,
  Historical,
  HistoricalTemp,
  HistoricalDate,
} from "./styles/styles";

const colors = {
  "01d": ["#efc745", "#ee9b55"],
  "02d": ["#efc745", "#ee9b55"],
  "03d": ["#efc745", "#ee9b55"],
  "04d": ["#b9c7f7", "#374ea2"],
  "09d": ["#befbf5", "#448d86"],
  "10d": ["#befbf5", "#448d86"],
  "11d": ["#a6d3ce", "#65817e"],
  "13d": ["#a6d3ce", "#65817e"],
  "50d": ["#d2d7d6", "#939393"],
  "01n": ["#2c2c2c", "#1c1c1c"],
  "02n": ["#2c2c2c", "#1c1c1c"],
  "03n": ["#2c2c2c", "#1c1c1c"],
  "04n": ["#2c2c2c", "#1c1c1c"],
  "09n": ["#342929", "#100909"],
  "10n": ["#342929", "#100909"],
  "11n": ["#221e1e", "#161313"],
  "13n": ["#221e1e", "#161313"],
  "50n": ["#221e1e", "#161313"],
};

const initialState = {
  raw: null,
  hourly: [],
  current: null,
  id: null,
};
const WeatherWebsite = (props) => {
  const coords = useGeoLocation();
  const query = {
    params: {
      lat: coords.lat,
      lon: coords.lon,
      units: "metric",
      appid: process.env.REACT_APP_OPENWEATHER,
    },
  };
  const [isLoading, setIsLoading] = useState(true);

  const [{ current, raw, hourly, id }, setState] = useReducer(
    (state, updates) => ({ ...state, ...updates }),
    initialState
  );

  useEffect(() => {
    if (coords?.lat && coords?.lon) {
      axios
        .get(`//api.openweathermap.org/data/2.5/onecall`, query)
        .then(({ data }) => {
          setState({
            raw: data,
            hourly: data.hourly.filter((el, index) => index % 3 === 0),
          });
          return axios.get(`//api.openweathermap.org/data/2.5/weather`, query);
        })
        .then(({ data }) => {
          setState({ current: data, id: data.weather[0].icon });
          setIsLoading(false);
        });
    }
  }, [coords]);

  return (
    <>
      {isLoading ? (
        <CenterLoading />
      ) : (
        <Animated>
          <div className="relative">
            <Description>
              {current.weather[0].description} in <b>{current.name}</b>
            </Description>
            <Temp>
              {current.main.temp.toFixed()}
              <small>°C</small>
            </Temp>
            <Effect color1={colors[id][0]} color2={colors[id][0]} />
          </div>
          <Infos>
            <span>
              <b>HUMIDITY</b>
              {current.main.humidity}%
            </span>
            <span>
              <b>VISIBILITY</b>
              {current.visibility / 1000} km
            </span>
            <span>
              <b>WIND</b>
              {current.wind.speed} km/h
            </span>
          </Infos>

          <Box className="px-4" sx={{ maxWidth: "100vw" }}>
            <Tabs
              value={0}
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
              sx={{
                ".MuiTabs-indicator": {
                  display: "none",
                },
              }}
            >
              {raw.daily
                .slice(1, raw.daily.length)
                .map(({ dt, temp }, index) => (
                  <Historical key={index} value={index}>
                    <HistoricalTemp>
                      {temp.max.toFixed()}°<span>{temp.min.toFixed()}°</span>
                    </HistoricalTemp>
                    <HistoricalDate>
                      {moment.unix(dt).format("ddd")}
                      <span>{moment.unix(dt).format("DD/MM")}</span>
                    </HistoricalDate>
                  </Historical>
                ))}
            </Tabs>
          </Box>
        </Animated>
      )}
    </>
  );
};

export default WeatherWebsite;
