import * as React from "react";

// Components
import Container from "../Container";

// Styles
import "./index.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <ul>
          <li className="header-logo" href="mailto:jn@gmail.com">
            email
          </li>
          <li className="header-logo" href="mailto:jn@gmail.com">
            linkedin
          </li>
          <li className="header-logo" href="mailto:jn@gmail.com">
            github
          </li>
          <li className="header-logo" href="mailto:jn@gmail.com">
            instagram
          </li>
        </ul>
      </Container>
    </footer>
  );
};

export default Footer;
