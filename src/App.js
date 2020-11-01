import React, { useState } from "react";
import "./App.scss";
import Header from "./Components/Header/Header";
import Loading from "./Components/Loading/Loading";
import TodoForm from "./Components/TodoForm/TodoForm";
import TodoList from "./Components/TodoList/TodoList";
function App(props) {
  const [todos, settodos] = useState(() => {
    if (localStorage.getItem("todos")) {
      return JSON.parse(localStorage.getItem("todos"));
    } else {
      return [];
    }
  });
  const [isOpenForm, setisOpenForm] = useState(false);

  const [editting, setEditting] = useState(null);
  const [loading, setLoading] = useState(false);
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  function genarateID() {
    return s4() + s4() + s4() + "-" + s4() + "-" + s4();
  }
  function onShowForm() {
    setisOpenForm(true);
  }
  function onCloseForm() {
    setisOpenForm(false);
    setEditting(null);
  }
  function onAddList(data) {
    setLoading(true);
    if (data.id) {
      var newTodos = [...todos];
      var index = todos.findIndex((value) => {
        return value.id === data.id;
      });
      newTodos = [
        ...newTodos.slice(0, index),
        {
          ...data,
        },
        ...newTodos.slice(index + 1),
      ];
    } else {
      data.id = genarateID();
      var newTodos = [...todos];
      newTodos.push(data);
    }
    setTimeout(() => {
      setLoading(false);
    }, 500);
    setEditting(null);
    settodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  }
  function onDelList(data) {
    setLoading(true);
    var index = todos.findIndex((value) => {
      return value.id === data.id;
    });
    var newtodos = [...todos];
    newtodos.splice(index, 1);
    settodos(newtodos);
    setTimeout(() => {
      setLoading(false);
    }, 500);
    localStorage.setItem("todos", JSON.stringify(newtodos));
  }
  function onEdittingForm(data) {
    onShowForm();
    setEditting(data);
  }
  console.log("render");
  return (
    <div className="app">
      <Header />
      <button className="btn btn-toggle" onClick={onShowForm}>
        Show
      </button>
      <TodoList
        todos={todos}
        onDelList={onDelList}
        onEdittingForm={onEdittingForm}
      />
      {isOpenForm && (
        <TodoForm
          todos={todos}
          onCloseForm={onCloseForm}
          onAddList={onAddList}
          onCloseForm={onCloseForm}
          editting={editting}
        />
      )}
      {loading && <Loading />}
    </div>
  );
}
export default App;
