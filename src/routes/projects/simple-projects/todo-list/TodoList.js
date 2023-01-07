import React, { useState, useEffect, useRef, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { TextField, Button, Box, Checkbox } from "@mui/material";
import Animated from "src/layout/animated";
import { BoxCard, TodoItem, Icon } from "./styles/styles";

const TodoList = (props) => {
  const [inputText, setInputText] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addTodo = (e) => {
    e.preventDefault();
    if (inputText !== "") {
      setTodoList([
        ...todoList,
        { text: inputText, completed: false, id: uuidv4() },
      ]);
      setInputText("");
    }
  };

  const toggleTask = (id) => {
    let newTodoList = todoList.map((el) =>
      el.id === id ? { ...el, completed: !el.completed } : el
    );
    setTodoList(newTodoList);
  };

  const deleteTodo = (id) => {
    let newList = [...todoList];
    setTodoList(newList.filter((e) => e.id !== id));
  };

  return (
    <Animated>
      <BoxCard>
        <form onSubmit={addTodo}>
          <Box>
            <TextField
              label="Type your task"
              className="w-full"
              variant="filled"
              onChange={(event) => setInputText(event.target.value)}
              value={inputText}
              fullWidth
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
              Add Todo
            </Button>
          </div>
        </form>
        <ul>
          {todoList.map((el) => (
            <TodoItem completed={el.completed} className="mt-2" key={el.id}>
              <Checkbox
                checked={el.completed}
                onChange={() => toggleTask(el.id)}
                inputProps={{ "aria-label": "controlled" }}
              />
              <p>{el.text}</p>

              <button className="ml-auto" onClick={() => deleteTodo(el.id)}>
                <Icon className="w-5">heroicons-outline:trash</Icon>
              </button>
            </TodoItem>
          ))}
        </ul>
      </BoxCard>
    </Animated>
  );
};
export default TodoList;
