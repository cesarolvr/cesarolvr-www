import * as React from "react";
import { Link } from "gatsby";

// Styles
import "./index.scss";
import Shortcut from "../Shortcut";

const Header = ({ hideShortcut }) => {
  const pathname =
    typeof window !== "undefined" ? window?.location?.pathname : "";
  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/">cesarolvr.com</Link>
      </div>
      {!hideShortcut && <Shortcut text="👀" />}
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
            to="/recruiter/"
            className={pathname?.startsWith("/recruiter") ? `-active` : ``}
          >
            for recruiters
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
