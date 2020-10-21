import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

useClock.propTypes = {};

function useClock(props) {
  const [clock, setclock] = useState(null);
  useEffect(() => {
    function time() {
      const now = new Date();
      const h = now.getHours() < 10 ? `0${now.getHours()}` : now.getHours();
      const m =
        now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes();
      const s =
        now.getSeconds() < 10 ? `0${now.getSeconds()}` : now.getSeconds();
      setclock(`${h}:${m}:${s}`);
    }
    const timeId = setInterval(time, 1000);
    return () => {
      clearInterval(timeId);
    };
  }, []);
  return clock;
}

export default useClock;
