import * as React from "react";

// Styles
import "./index.scss";

const Shortcut = ({ text }) => {
  return (
    <div className="shortcut">
      <p className="key">command</p>
      <p>+</p>
      <p className="key">P</p>
      <p>{text}</p>
    </div>
  );
};

export default Shortcut;
