import React from "react";
import "./TodoItem.scss";
import PropTypes from "prop-types";

TodoItem.propTypes = {
  list: PropTypes.object,
  onDelList: PropTypes.func,
  onEdittingForm: PropTypes.func,
};
TodoItem.defaultPropTypes = {
  list: {},
  onDelList: null,
  onEdittingForm: null,
};

function TodoItem(props) {
  const { list, onDelList, onEdittingForm } = props;
  return (
    <tr>
      <td> {list.title} </td>
      <td>
        <span
          style={{
            background: list.status ? "red" : "green",
            padding: 2,
            borderRadius: 6,
          }}
        >
          {list.status === true ? "Kích hoạt" : "Ẩn"}
        </span>
      </td>
      <td>
        <button className="btn btn-del" onClick={() => onDelList(list)}>
          Xóa
        </button>
        <button className="btn btn-update" onClick={() => onEdittingForm(list)}>
          Cập Nhật
        </button>
      </td>
    </tr>
  );
}

export default TodoItem;
