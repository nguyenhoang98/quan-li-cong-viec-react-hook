import React, { useState } from "react";
import PropTypes from "prop-types";

TodoForm.propTypes = {
  onchangeValue: PropTypes.func,
};
TodoForm.defaultPropTypes = {
  onchangeValue: null,
};
function TodoForm(props) {
  const { onchangeValue } = props;
  const [value, setvalue] = useState("");
  function handleOnchangeValue(e) {
    setvalue(e.target.value);
  }
  function onsubmit(e) {
    e.preventDefault();
    onchangeValue(value);
    setvalue("");
  }
  return (
    <div>
      <form onSubmit={onsubmit}>
        <input type="text" value={value} onChange={handleOnchangeValue} />
      </form>
    </div>
  );
}

export default TodoForm;
