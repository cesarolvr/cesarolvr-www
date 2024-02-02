import { Link } from "gatsby";
import * as React from "react";

// Components
import Container from "../Container";

// Styles
import "./index.scss";

const Footer = () => {
  const pathname =
    typeof window !== "undefined" ? window?.location?.pathname : "";
  return (
    <footer className="footer">
      <ul className="list">
        <li className="only-mobile">
          <Link
            to="/about/"
            className={pathname?.startsWith("/about") ? `-active` : ``}
          >
            about
          </Link>
        </li>

        <li className="only-mobile">
          <Link
            to="/recruiter/"
            className={pathname?.startsWith("/recruiter") ? `-active` : ``}
          >
            for recruiters
          </Link>
        </li>
        <li>
          <a href="mailto:contact@cesarolvr.com">email</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/cesarolvr/" target="_blank">
            linkedin
          </a>
        </li>
        <li>
          <a href="https://github.com/cesarolvr/" target="_blank">
            github
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/cesarolvr/" target="_blank">
            instagram
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
