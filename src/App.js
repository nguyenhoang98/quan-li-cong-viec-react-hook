import React, { useState } from "react";
import "./App.scss";
import BoxColor from "./Components/BoxColor/BoxColor";
import TodoForm from "./Components/TodoForm/TodoForm";
import TodoList from "./Components/TodoList/TodoList";
function App(props) {
  const [todoList, settodoList] = useState(() => {
    return localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : [
          {
            id: 1,
            title: "Học React",
          },
          {
            id: 2,
            title: "Học Angular",
          },
          {
            id: 3,
            title: "Học Vue",
          },
        ];
  });
  function onRemoveList(index) {
    const newTodos = [...todoList];
    newTodos.splice(index, 1);
    settodoList(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  }
  function onchangeValue(value) {
    const data = {
      id: todoList.length,
      title: value,
    };
    const newTodos = [...todoList];
    newTodos.push(data);
    settodoList(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  }
  return (
    <div className="app">
      <BoxColor />
      <TodoForm onchangeValue={onchangeValue} />
      <TodoList todoList={todoList} onRemoveList={onRemoveList} />
    </div>
  );
}

export default App;
