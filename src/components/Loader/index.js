import React, { useEffect, useState } from "react";
import { CountUp } from "countup.js";

import classnames from "classnames";

// Styles
import "./index.scss";

// Components
import { Link } from "gatsby";

const Loader = ({ isOpened = false, duration, linkBack, limit, numberSize = "" }) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const countUp = new CountUp("value", limit ? limit : 100, {
      formattingFn: (v) => {
        setValue(v);
        return `${v}`;
      },
      duration: duration ?? 1
    });
    countUp.start();
  }, []);
  return (
    <div
      className={classnames("loader", {
        ["-opened"]: isOpened,
      })}
    >
      <div className={`value ${numberSize}`} id="value"></div>
      {linkBack && <Link to="/">{`<-`} go back to home</Link>}
    </div>
  );
};

export default Loader;
