import * as React from "react";

// Components
import Container from "../Container";

// Styles
import "./index.scss";

const Header = () => {
  return (
    <header className="header">
      <Container>
        <div>
          <a
            className="header-logo"
            href="https://cesarolvr.com"
          >
            cesarolvr.com
          </a>
          <div className="header-control">
            <p>command</p>
            <p>+</p>
            <p>P</p>
            <p>👀</p>
          </div>
          <ul className="header-list">
            <li><a href="/about">about</a></li>
            <li><a href="/recruiter">for you, recruiter</a></li>
          </ul>
        </div>
      </Container>
    </header>
  );
};

export default Header;
