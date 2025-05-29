import React from "react";

// Styles
import "./index.scss";

// Context
import { State } from "../Layout";

const Shortcut = ({ text }) => {
  const { setModalIsOpened } = React.useContext(State);
  const isMac = typeof window !== "undefined" && /Mac|iPhone|iPad|iPod/.test(navigator.platform);

  const isMobile =
    typeof window !== "undefined" ? window.innerWidth < 730 : true;

  return isMobile ? (
    <div className="shortcut" onClick={() => setModalIsOpened(true)}>
      <p className="key text-[var(--tw-text-gray-primary)] bg-[var(--bg-secondary)]">tap</p>
      <p>to start</p>
    </div>
  ) : (
    <div className="shortcut">
      <p className="key text-[var(--tw-text-gray-primary)] bg-[var(--bg-secondary)]">{isMac ? "command" : "ctrl"}</p>
      <p className="text-[var(--tw-text-gray-secondary)]">+</p>
      <p className="key text-[var(--tw-text-gray-primary)] bg-[var(--bg-secondary)]">{isMac ? "return" : "enter"}</p>
      <p className="text-[var(--tw-text-gray-primary)]">{text}</p>
    </div>
  );
};

export default Shortcut;
