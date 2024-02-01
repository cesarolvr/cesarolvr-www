import * as React from "react";

// Styles
import "./index.scss";

const Shortcut = ({ text }) => {
  const isMac = !!navigator?.platform?.indexOf("Mac") > -1;

  return (
    <div className="shortcut">
      <p className="key">command</p>
      <p>+</p>
      <p className="key">{isMac ? "return" : "enter"}</p>
      <p>{text}</p>
    </div>
  );
};

export default Shortcut;
