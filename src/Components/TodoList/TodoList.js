import React, { useEffect } from "react";
import "./TodoList.scss";
import PropTypes from "prop-types";
import TodoItem from "../TodoItem/TodoItem";

TodoList.propTypes = {
  todos: PropTypes.array,
  onDelList: PropTypes.func,
  onEdittingForm: PropTypes.func,
};

TodoList.defaultPropTypes = {
  todos: [],
  onDelList: null,
  onEdittingForm: null,
};
function TodoList(props) {
  const { todos, onDelList, onEdittingForm } = props;
  return (
    <div className="todolist">
      <table className="todolist__table">
        <thead>
          <tr>
            <th>Tên Công viêc</th>
            <th>Trạng Thái</th>
            <th>Hành Động</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((value, index) => {
            return (
              <TodoItem
                list={value}
                key={index}
                index={index}
                onDelList={onDelList}
                onEdittingForm={onEdittingForm}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TodoList;
