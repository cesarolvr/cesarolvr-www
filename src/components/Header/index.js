import * as React from "react";
import { Link } from "gatsby";

// Components
import Container from "../Container";

// Styles
import "./index.scss";

const Header = () => {
  return (
    <header className="header">
      <Container>
        <div>
          <a className="header-logo" href="https://cesarolvr.com">
            cesarolvr.com
          </a>
          <div className="header-control">
            <p>command</p>
            <p>+</p>
            <p>P</p>
            <p>👀</p>
          </div>
          <ul className="header-list">
            <li>
              <Link to="/about">about</Link>
            </li>

            <li>
              <Link to="/recruiter">for recruiters</Link>
            </li>
          </ul>
        </div>
      </Container>
    </header>
  );
};

export default Header;
