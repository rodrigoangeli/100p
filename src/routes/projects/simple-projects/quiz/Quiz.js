import React, { useState, useEffect, useRef, useContext } from "react";
import { useDispatch } from "react-redux";
import { data } from "./components/data";
import styled from "styled-components";
import { TextField, Button } from "@mui/material";
import { openModal } from "../../../../store/modal";
import { motion } from "framer-motion";

const Image = styled("img")(({ theme }) => ({
  width: "100%",
  maxWidth: "400px",
  borderRadius: theme.border.radius,
  margin: "0 auto",
}));

const Box = styled("div")(({ theme }) => ({
  background: "#1e212c",
  boxShadow: theme.shadow.main,
  padding: 15,
  borderRadius: theme.border.radius,
}));

const Quiz = (props) => {
  const dispatch = useDispatch();
  const [score, setScore] = useState(0);
  const [quizStatus, setQuizStatus] = useState(0);
  const [allData, setAllData] = useState(data);
  const [currentArtist, setCurrentArtist] = useState(null);
  const [inputText, setInputText] = useState(null);

  useEffect(() => {
    if (!currentArtist) {
      randomArtist(allData);
    }
  }, []);

  const randomArtist = (arr) => {
    var n = Math.floor(Math.random() * arr.length);
    setCurrentArtist(arr[n]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText === currentArtist.name) {
      setScore(score + 1);
      setAllData(allData.filter(({ name }) => name !== currentArtist.name));
    } else {
      setQuizStatus(-1);
      dispatch(
        openModal({
          children: <>asdasdas</>,
        })
      );
    }
  };

  return (
    <>
      {currentArtist && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.1 } }}
          className="flex grow justify-center items-center"
        >
          <Box className="flex">
            <Image src={currentArtist.images[0].url} />

            <div className="ml-4">
              <h5>What do you know about</h5>
              <form onSubmit={handleSubmit}>
                <TextField
                  placeholder="Type your guess"
                  className="w-full mb-8"
                  onChange={(event) => setInputText(event.target.value)}
                />
                <Button
                  className="w-full"
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  submit
                </Button>
              </form>
            </div>
          </Box>
        </motion.div>
      )}
    </>
  );
};

export default Quiz;
