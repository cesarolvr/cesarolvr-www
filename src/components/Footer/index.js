import * as React from "react";

// Components
import Container from "../Container";

// Styles
import "./index.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <ul className="list">
          <li className="header-logo">
            <a href="mailto:jn@gmail.com">email</a>
          </li>
          <li className="header-logo">
            <a href="mailto:jn@gmail.com">linkedin</a>
          </li>
          <li className="header-logo">
            <a href="mailto:jn@gmail.com">github</a>
          </li>
          <li className="header-logo">
            <a href="mailto:jn@gmail.com">instagram</a>
          </li>
        </ul>
      </Container>
    </footer>
  );
};

export default Footer;
