import * as React from "react";
import { Link } from "gatsby";

// Styles
import "./index.scss";
import Shortcut from "../Shortcut";

const Header = ({ goBackToHome }) => {
  const pathname =
    typeof window !== "undefined" ? window?.location?.pathname : "";
  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/">cesarolvr.com</Link>
      </div>
      {goBackToHome && <Link className="goback" to="/">{"<-"} go back to home</Link>}

      {/* {!hideShortcut && <Shortcut text="👀" />} */}
      <ul className="header-list only-desktop">
        <li>
          <Link
            to="/about/"
            className={pathname?.startsWith("/about") ? `-active` : ``}
          >
            about
          </Link>
        </li>

        <li>
          <Link
            to="/actions/"
            className={pathname?.startsWith("/actions") ? `-active` : ``}
          >
            quick actions
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
