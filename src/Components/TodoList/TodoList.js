import React from "react";
import PropTypes from "prop-types";
TodoList.propTypes = {
  todoList: PropTypes.array,
  onRemoveList: PropTypes.func,
};
TodoList.defaultProps = {
  todoList: [],
  onRemoveList: null,
};
function TodoList(props) {
  const { todoList, onRemoveList } = props;
  function handelRemoveList(index) {
    onRemoveList(index);
  }
  return (
    <div>
      <ul>
        {todoList.map((value, index) => {
          return (
            <li key={index} onClick={() => handelRemoveList(index)}>
              {" "}
              {value.title}{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
