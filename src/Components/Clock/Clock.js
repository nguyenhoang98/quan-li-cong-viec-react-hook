import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import useClock from "../../Hook/useClock";
import useMagicColor from "../../Hook/useMagicColor";

Clock.propTypes = {};

function Clock(props) {
  const time = useClock();
  const color = useMagicColor();
  return (
    <div>
      <div
        style={{
          color: color,
        }}
      >
        {" "}
        {time}{" "}
      </div>
    </div>
  );
}

export default Clock;
