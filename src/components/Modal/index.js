import * as React from "react";
import classNames from "classnames";
import Mousetrap from "mousetrap";

// Components
import { FiCopy } from "@react-icons/all-files/fi/FiCopy";
import { FiDownload } from "@react-icons/all-files/fi/FiDownload";
import { FiAward } from "@react-icons/all-files/fi/FiAward";
import { FiGithub } from "@react-icons/all-files/fi/FiGithub";
import { FiCalendar } from "@react-icons/all-files/fi/FiCalendar";
import { FiInstagram } from "@react-icons/all-files/fi/FiInstagram";
import { FiBook } from "@react-icons/all-files/fi/FiBook";
import { FiCoffee } from "@react-icons/all-files/fi/FiCoffee";

// Styles
import "./index.scss";

const actionList = [
  {
    text: "copy link",
    nick: "c",
    icon: <FiCopy />,
  },
  {
    text: "download cv",
    nick: "d",
    icon: <FiDownload />,
  },
  {
    text: "know my career",
    nick: "k",
    icon: <FiAward />,
  },
  {
    text: "see my github",
    nick: "g",
    icon: <FiGithub />,
  },
  {
    text: "book a meeting",
    nick: "b",
    icon: <FiCalendar />,
  },
  {
    text: "go to my instagram",
    nick: "g",
    icon: <FiInstagram />,
  },
  {
    text: "see my current readings",
    nick: "r",
    icon: <FiBook />,
  },
  {
    text: "view source code",
    nick: "r",
    icon: <FiCoffee />,
  },
];

const Modal = () => {
  const [modalIsOpened, setModalIsOpened] = React.useState(false);
  const [list, setList] = React.useState(actionList);

  React.useEffect(() => {
    Mousetrap.bind(["command+enter", "ctrl+enter"], (e) => {
      e.preventDefault();
      setModalIsOpened(!modalIsOpened);
    });

    Mousetrap.bind("esc", (e) => {
      e.preventDefault();
      setModalIsOpened(false);
    });

    if (modalIsOpened) document.querySelector("#shortcutid").focus();
  }, [modalIsOpened]);

  const onSearch = (e) => {
    const value = e?.target?.value;
    const newList = actionList.filter((item) => item?.text?.includes(value));
    console.log(value, newList);
    setList(newList);
  };

  return (
    <div
      className={classNames("modal", {
        "-opened": modalIsOpened,
      })}
    >
      <div className="layer" onClick={() => {
        setModalIsOpened(false)
      }}></div>
      <div className="panel">
        <div className="panel-header">
          <input
            className="search mousetrap"
            type="text"
            id="shortcutid"
            placeholder="type what you would like to do..."
            onChange={onSearch}
          />
        </div>
        <ul className="list" role="listbox">
          {list.length > 0 ? (
            list.map(({ text, icon }) => {
              return (
                <li role="option">
                  <div className="description">
                    {icon}
                    <p>{text}</p>
                  </div>
                  {/* <span className="nick">{nick}</span> */}
                </li>
              );
            })
          ) : (
            <div className="empty">
              <FiCoffee /> nothing here, try again
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Modal;
