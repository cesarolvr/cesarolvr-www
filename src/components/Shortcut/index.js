import * as React from "react";

// Styles
import "./index.scss";

// Context
import { State } from "../Layout";

const Shortcut = ({ text }) => {
  const { setModalIsOpened } = React.useContext(State);
  const isMac =
    typeof window !== "undefined"
      ? !!navigator?.platform?.indexOf("Mac") > -1
      : true;

  const isMobile =
    typeof window !== "undefined" ? window.innerWidth < 430 : true;

  return isMobile ? (
    <div className="shortcut" onClick={() => setModalIsOpened(true)}>
      <p className="key">tap</p>
      <p>to start</p>
    </div>
  ) : (
    <div className="shortcut">
      <p className="key">command</p>
      <p>+</p>
      <p className="key">{isMac ? "return" : "enter"}</p>
      <p>{text}</p>
    </div>
  );
};

export default Shortcut;
