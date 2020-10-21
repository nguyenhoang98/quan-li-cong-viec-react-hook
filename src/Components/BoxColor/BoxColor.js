import React, { useState } from "react";
import "./BoxColor.scss";

function getBgColor() {
  const arrColor = ["red", "gold", "green", "blue"];
  const index = Math.ceil(Math.random() * 3);
  return arrColor[index];
}
function BoxColor(props) {
  const [color, setcolor] = useState(() => {
    return localStorage.getItem("color")
      ? localStorage.getItem("color")
      : "red";
  });
  function handleChangeColor() {
    const currentColor = getBgColor();
    setcolor(currentColor);
    localStorage.setItem("color", currentColor);
  }
  return (
    <div
      className="boxcolor"
      style={{
        background: color,
        width: "100px",
        height: "100px",
      }}
      onClick={handleChangeColor}
    ></div>
  );
}

export default BoxColor;
