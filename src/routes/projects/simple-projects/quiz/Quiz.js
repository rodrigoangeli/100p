import React, { useState, useEffect } from "react";
import { data } from "./components/data";
import { TextField, Button, Box } from "@mui/material";
import Animated from "src/layout/animated";
import { Image, BoxCard, Title, Subtitle, Score, Icon } from "./styles/styles";

const Quiz = (props) => {
  const [score, setScore] = useState(0);
  const [allData, setAllData] = useState(data);
  const [currentArtist, setCurrentArtist] = useState(null);
  const [inputText, setInputText] = useState("");
  const [answerResult, setAnswerResult] = useState(null);

  useEffect(() => {
    randomArtist(allData);
  }, [allData]);

  const randomArtist = (arr) => {
    var n = Math.floor(Math.random() * arr.length);
    setCurrentArtist(arr[n]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText === currentArtist.name) {
      setAnswerResult("check");
      setScore(score + 1);
      setAllData(allData.filter(({ name }) => name !== currentArtist.name));
    } else {
      setAnswerResult("x-mark");
    }
    setInputText("");
  };

  useEffect(() => {
    if (answerResult) {
      let timer1 = setTimeout(() => setAnswerResult(null), 250);
      return () => {
        clearTimeout(timer1);
      };
    }
  }, [answerResult]);

  return (
    <>
      {currentArtist && (
        <Animated>
          <Title>Do you know who this is?</Title>
          <Subtitle>Show your knowledge by guessing this singer/band</Subtitle>
          <div className="flex items-end my-4">
            <BoxCard>
              <Image src={currentArtist.images[1].url} />
            </BoxCard>
            <div className="ml-4">
              <div className="text-center mb-8">
                <p>Your score</p>
                <Score>
                  {answerResult ? (
                    <Icon
                      answerResult={answerResult}
                      className="w-5 align-middle p-0.5"
                    >
                      {`heroicons-outline:${answerResult}`}
                    </Icon>
                  ) : (
                    score
                  )}
                </Score>
              </div>
              <BoxCard>
                <div>
                  <form onSubmit={handleSubmit}>
                    <Box
                      sx={{
                        width: 350,
                        maxWidth: "100%",
                      }}
                    >
                      <TextField
                        label="Type your guess"
                        className="w-full"
                        variant="filled"
                        onChange={(event) => setInputText(event.target.value)}
                        value={inputText}
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
                </div>
              </BoxCard>
            </div>
          </div>
        </Animated>
      )}
    </>
  );
};

export default Quiz;
