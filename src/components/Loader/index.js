import React, { useEffect, useState } from "react";
import { CountUp } from "countup.js";

import classnames from "classnames";

// Styles
import "./index.scss";

// Components
import { Link } from "gatsby";

const Loader = ({ isOpened = false, linkBack, limit }) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const countUp = new CountUp("value", limit ? limit : 100, {
      formattingFn: (v) => {
        setValue(v);
        return `${v}`;
      },
    });
    countUp.start();
  }, []);
  return (
    <div
      className={classnames("loader", {
        ["-opened"]: isOpened,
      })}
    >
      <div className="value" id="value"></div>
      {linkBack && <Link to="/">go back to cesarolvr.com</Link>}
    </div>
  );
};

export default Loader;
