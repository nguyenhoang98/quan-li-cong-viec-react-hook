import React, { useCallback, useEffect, useMemo, useState } from "react";
import "./TodoForm.scss";
import PropTypes from "prop-types";

TodoForm.propTypes = {
  onAddList: PropTypes.func,
  editting: PropTypes.object,
};
TodoForm.defaultPropsTypes = {
  onAddList: null,
  editting: {},
};

function TodoForm(props) {
  const { onAddList, editting } = props;
  const [list, setList] = useState({
    id: "",
    title: "",
    status: true,
  });
  useEffect(() => {
    if (editting !== null) {
      console.log(editting);
      setList(editting);
    }
    return () => {};
  }, [editting]);
  function handleOnchange(e) {
    var target = e.target;
    var name = target.name;
    var value =
      target.value === "true"
        ? true
        : target.value === "false"
        ? false
        : target.value;
    var newList = {
      ...list,
    };
    newList[name] = value;
    setList(newList);
  }
  function handleOnsubmit(e) {
    e.preventDefault();
    onAddList(list);
    handleResetForm();
    onCloseForm();
  }
  function onCloseForm() {
    const { onCloseForm } = props;
    onCloseForm();
  }
  function handleResetForm() {
    console.log("reset form");
    setList({
      id: "",
      title: "",
      status: false,
    });
  }
  return (
    <div>
      <div className="todoform">
        <span className="todoform__close" onClick={onCloseForm}>
          <i className="fa fa-times" aria-hidden="true"></i>
        </span>
        <div className="todoform__title">
          {list.id ? "Cập Nhật Công việc" : "Thêm Công việc"}
        </div>
        <form onSubmit={handleOnsubmit}>
          <div className="group-form">
            <label className="group-form__label">Tên Công Việc</label>
            <input
              className="group-form__input"
              type="text"
              name="title"
              value={list.title}
              onChange={handleOnchange}
            />
          </div>
          <div className="group-form">
            <label className="group-form__label">Trạng Thái</label>
            <select
              className="group-form__select"
              name="status"
              value={list.status}
              onChange={handleOnchange}
            >
              <option value={true}>Kích Hoạt</option>
              <option value={false}>Ẩn</option>
            </select>
          </div>
          <div className="group-form">
            <button type="submit" className="btn btn-save">
              Lưu
            </button>
            <button
              type="button"
              className="btn btn-reset"
              onClick={handleResetForm}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TodoForm;
