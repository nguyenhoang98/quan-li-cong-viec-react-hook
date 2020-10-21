import React, { useRef, useState } from "react";
import PropTypes from "prop-types";

FilterList.propTypes = {};

function FilterList(props) {
  const { handleFilterList } = props;
  const [value, setvalue] = useState("");
  const data = useRef(null);
  function onchange(e) {
    const val = e.target.value;
    if (data.current) {
      console.log("Có", data.current);
      clearTimeout(data.current);
    }
    data.current = setTimeout(() => {
      console.log("Start");
      handleFilterList(val);
    }, 800);
    setvalue(val);
  }
  return (
    <div>
      <form>
        <input type="text" value={value} onChange={onchange} />
      </form>
    </div>
  );
}

export default FilterList;
