import * as React from "react";
import classNames from "classnames";
import Mousetrap from "mousetrap";

// Styles
import "./index.scss";

const Modal = () => {
  const [modalIsOpened, setModalIsOpened] = React.useState(false);
  
  React.useEffect(() => {
    Mousetrap.bind(["command+enter", "ctrl+enter"], () => {
      setModalIsOpened(!modalIsOpened);
    });
  }, [modalIsOpened]);

  return (
    <div
      className={classNames("modal", {
        "-opened": modalIsOpened,
      })}
    >
      <div className="layer"></div>
      <div className="panel">aaaaa</div>
    </div>
  );
};

export default Modal;
