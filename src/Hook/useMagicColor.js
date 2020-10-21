import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

useMagicColor.propTypes = {};

function randomColor(currentColor) {
  const arrColor = ["red", "gold", "blue", "aqua"];
  let index = Math.ceil(Math.random() * 3);
  let currentIndex = arrColor.indexOf(currentColor);
  while (index === currentIndex) {
    index = Math.ceil(Math.random() * 3);
  }
  return arrColor[index];
}

function useMagicColor(props) {
  const [color, setColor] = useState("red");
  const colorRef = useRef("red");
  useEffect(() => {
    function getColor() {
      console.log(colorRef.current);
      console.log(color);
      const newColor = randomColor(colorRef.current);
      colorRef.current = newColor;
      setColor(newColor);
    }
    const setInterValColor = setInterval(getColor, 1000);
    return () => {
      clearInterval(setInterValColor);
    };
  }, []);
  return color;
}

export default useMagicColor;
