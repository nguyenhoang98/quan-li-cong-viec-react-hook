import React from "react";
import "./Loading.scss";
import loading from "../../acssets/Image/loading_2.gif";

Loading.propTypes = {};

function Loading() {
  return (
    <div className="loading">
      <img src={loading} className="loading__img" />
    </div>
  );
}

export default Loading;
