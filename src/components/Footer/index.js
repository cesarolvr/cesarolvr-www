import { Link } from "gatsby";
import * as React from "react";

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
            About me
          </Link>
        </li>

        <li className="only-mobile">
          <Link
            to="/utilities/"
            className={pathname?.startsWith("/utilities") ? `-active` : ``}
          >
            Utilities
          </Link>
        </li>
        <li className="only-mobile -link-blocked">
          <a href="/blog">Blog</a>
        </li>

        <li>
          <a href="mailto:contact@cesarolvr.com">Email</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/cesarolvr/" target="_blank">
            Linkedin
          </a>
        </li>
        <li>
          <a href="https://github.com/cesarolvr/" target="_blank">
            Github
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/cesarolvr/" target="_blank">
            Instagram
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
