import React, { useState, useEffect, useReducer, useRef } from "react";
import Animated from "src/layout/animated";
import axios from "axios";
import { CircularProgress, Container } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import _ from "lodash";
import { splitArray } from "./functions/handleImages";
import useWindowPosition from "hooks/useWindowPosition";
import useWindowSize from "hooks/useWindowSize";
import { Grid, ImageWrapper } from "./styles/styles";

const api = "https://api.unsplash.com/search/photos";
const referral = "?utm_source=100p_by_rodrigoangeli&utm_medium=referral";
const normal_query_string = "&fit=crop&w=800&q=80&fm=jpg";

const GridPicturesAnimals = (props) => {
  const gridRef = useRef(null);
  const downMd = useMediaQuery((theme) => theme.breakpoints.down("md"), {
    noSsr: true,
  });

  const initialState = {
    images: [],
    raw: [],
    page: 1,
    columns: downMd ? 2 : 3,
  };

  const size = useWindowSize();
  const position = useWindowPosition();
  const [isMobile, setIsMobile] = useState(downMd);
  const [isLoading, setIsLoading] = useState(false);
  const [imageData, setImageData] = useReducer(
    (state, updates) => ({ ...state, ...updates }),
    initialState
  );

  //Check if resizing the window
  useEffect(() => {
    setIsMobile(downMd);
  }, [size]);

  //Checking if mobile, changing columns accordingly
  useEffect(() => {
    setImageData({ ...initialState, columns: isMobile ? 2 : 3 });
  }, [isMobile]);

  //Check if near the end of the page, if it is, fetch new page
  useEffect(() => {
    if (position) {
      var line = (75 * gridRef.current.clientHeight) / 100 - window.innerHeight;
      if (line < position && !isLoading) {
        setIsLoading(true);
        setImageData({
          page: imageData.page + 1,
        });
      }
    }
  }, [position]);

  //Fetching images from the unsplash api
  useEffect(() => {
    if (imageData.raw.length === 0) {
      setIsLoading(true);
    }
    axios
      .get(api, {
        headers: {
          Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH}`,
        },
        params: {
          query: "animals",
          page: imageData.page,
          orientation: "portrait",
        },
      })
      .then(({ data }) => {
        let imgs = data.results.splice(1);
        let merged = [...imageData.raw, ...imgs];
        setImageData({
          raw: merged,
          images: splitArray(merged, imageData.columns),
        });
        setIsLoading(false);
      });
  }, [imageData.page, imageData.columns]);

  return (
    <Animated>
      <Container>
        <Grid ref={gridRef} className="flex justify-center flex-wrap">
          {imageData.images.map((el, index) => (
            <div
              key={index}
              className={`${downMd ? "basis-3/6" : "basis-1/3"} shrink-0`}
            >
              {el.map(
                ({ user, color, urls, description, id, height, width }) => {
                  var col = Math.floor(
                    (gridRef.current.clientWidth -
                      (imageData.columns - 1) * 10) /
                      imageData.columns
                  );
                  return (
                    <div key={id} className="w-full p-1">
                      <ImageWrapper
                        col={col}
                        color={color}
                        height={height}
                        width={width}
                        url={urls.raw}
                        className="w-full"
                      >
                        <img
                          className="w-full"
                          src={urls.raw + normal_query_string}
                          alt={description}
                        />
                        <span>
                          Photo by{" "}
                          <a href={`${user.links.html}${referral}`}>
                            {user.name}
                          </a>{" "}
                          on{" "}
                          <a href={`https://unsplash.com/${referral}`}>
                            Unsplash
                          </a>
                        </span>
                      </ImageWrapper>
                    </div>
                  );
                }
              )}
            </div>
          ))}
          {isLoading && <CircularProgress />}
        </Grid>
      </Container>
    </Animated>
  );
};
export default GridPicturesAnimals;
