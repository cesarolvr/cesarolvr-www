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
          <a href="mailto:contact@cesarolvr.com">email</a>
        </li>
        <li className="header-logo">
          <a href="https://www.linkedin.com/in/cesarolvr/" target="_blank">
            linkedin
          </a>
        </li>
        <li className="header-logo">
          <a href="https://github.com/cesarolvr/" target="_blank">
            github
          </a>
        </li>
        <li className="header-logo">
          <a href="https://www.instagram.com/cesarolvr/" target="_blank">
            instagram
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
