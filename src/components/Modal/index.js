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
import { FiMail } from "@react-icons/all-files/fi/FiMail";

// Context
import { State } from "../Layout";

// Files
import cesarolvrCV from "../../files/cv-cesarolvr.pdf";

// Styles
import "./index.scss";

const actionList = [
  {
    text: "copy link",
    nick: "c",
    icon: <FiCopy />,
    type: 1,
    textToCopy: "https://cesarolvr.com",
  },
  {
    text: "download cv",
    nick: "d",
    icon: <FiDownload />,
    target: cesarolvrCV,
  },
  {
    text: "know my career",
    nick: "k",
    icon: <FiAward />,
    target: "https://www.linkedin.com/in/cesarolvr/",
  },
  {
    text: "see my github",
    nick: "g",
    icon: <FiGithub />,
    target: "https://github.com/cesarolvr/",
  },
  {
    text: "book a meeting",
    nick: "b",
    icon: <FiCalendar />,
    target: "https://meet.google.com/",
  },
  {
    text: "send an email",
    nick: "e",
    icon: <FiMail />,
    target: "mailto:contact@cesarolvr.com",
  },
  {
    text: "follow me on instagram",
    nick: "g",
    icon: <FiInstagram />,
    target: "https://www.instagram.com/cesarolvr/",
  },
  {
    text: "see my current readings",
    nick: "r",
    icon: <FiBook />,
    target: "https://goodreads.com/cesarolvr",
  },
  {
    text: "view source code",
    nick: "r",
    icon: <FiCoffee />,
    target: "https://github.com/cesarolvr/cesarolvr-www",
  },
];

const Modal = () => {
  const [list, setList] = React.useState(actionList);
  const [cursor, setCursor] = React.useState(0);

  const { modalIsOpened, setModalIsOpened, setCopied } =
    React.useContext(State);

  const copyLink = (link) => {
    navigator.clipboard.writeText(link).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1000);
    }, console.log);
  };

  React.useEffect(() => {
    Mousetrap.bind(["command+enter", "ctrl+enter"], (e) => {
      e.preventDefault();
      setModalIsOpened(!modalIsOpened);
      setCursor(0);
    });

    Mousetrap.bind("esc", (e) => {
      e.preventDefault();
      setModalIsOpened(false);
      setCursor(0);
    });

    const isDesktop =
      typeof window !== "undefined" ? window.innerWidth > 730 : true;

    if (modalIsOpened && isDesktop) {
      document.querySelector("#shortcutid").focus();

      Mousetrap.bind("down", (e) => {
        e.preventDefault();
        onDown();
      });

      Mousetrap.bind("up", (e) => {
        e.preventDefault();
        onUp();
      });

      Mousetrap.bind("enter", (e) => {
        e.preventDefault();
        if (cursor === 0) {
          return copyLink(list[0].textToCopy);
        } else {
          const link = document.querySelector(`#tablist-${cursor} a`);
          if (link) return window.open(link.href, "_blank");
        }
      });
    } else {
      Mousetrap.unbind(["down", "up", "enter"]);
    }
  }, [modalIsOpened, cursor, list]);

  const onSearch = (e) => {
    const value = e?.target?.value;
    const newList = actionList.filter((item) => item?.text?.includes(value));
    setList(newList);
    setCursor(0);
  };

  const onUp = () => {
    if (list.length === 1) return setCursor(0);
    if (cursor === 0) return;

    const currentItem = document.querySelector(`#tablist-${cursor}`);

    if (currentItem) {
      currentItem.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    setCursor(cursor - 1);
  };
  const onDown = () => {
    if (list.length === 1) return setCursor(0);
    if (cursor === list.length - 1) return;

    const currentItem = document.querySelector(`#tablist-${cursor}`);

    if (currentItem) {
      currentItem.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    setCursor(cursor + 1);
  };

  return (
    <div
      className={classNames("modal", {
        "-opened": modalIsOpened,
      })}
    >
      <div
        className="layer"
        onClick={() => {
          setModalIsOpened(false);
          setCursor(0);
        }}
      ></div>
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
            list.map(({ text, icon, target, type, textToCopy }, index) => {
              if (type === 1) {
                return (
                  <li
                    role="option"
                    id={`tablist-${index}`}
                    tabIndex={0}
                    key={index}
                    onClick={() => copyLink(textToCopy)}
                    className={classNames({
                      "-active": cursor === index,
                    })}
                  >
                    <a
                      className="description"
                      href=""
                      onClick={(e) => e.preventDefault()}
                    >
                      {icon}
                      <p>{text}</p>
                    </a>
                  </li>
                );
              } else {
                return (
                  <li
                    role="option"
                    key={index}
                    id={`tablist-${index}`}
                    className={classNames({
                      "-active": cursor === index,
                    })}
                  >
                    <a href={target} className="description" target="_blank">
                      {icon}
                      <p>{text}</p>
                    </a>
                  </li>
                );
              }
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
