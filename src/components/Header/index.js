import * as React from "react";
import { Link } from "gatsby";

// Components
import Container from "../Container";

// Styles
import "./index.scss";
import Shortcut from "../Shortcut";

const Header = ({ hideShortcut }) => {
  return (
    <header className="header">
      <Container>
        <div className="header-logo">
          <Link to="/">cesarolvr.com</Link>
        </div>
        {!hideShortcut && <Shortcut text="👀" />}
        <ul className="header-list">
          <li>
            <Link to="/about">about</Link>
          </li>

          <li>
            <Link to="/recruiter">for recruiters</Link>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
