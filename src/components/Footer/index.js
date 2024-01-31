import * as React from "react";

// Components
import Container from "../Container";

// Styles
import "./index.scss";

const Footer = () => {
  return (
    <footer className="footer">
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
    </footer>
  );
};

export default Footer;
