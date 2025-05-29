import * as React from "react";
import { Link } from "gatsby";

// Styles
import "./index.scss";

const Header = ({ goBackToHome }) => {
  const pathname =
    typeof window !== "undefined" ? window?.location?.pathname : "";
  return (
    <header className="header">
      <div className="header-holder hidden sm:block">
        <p className="text-[#bdbdbd] sm:text-[18px] text-[14px]">
          Based in <br />
          São Paulo, Brazil
        </p>
      </div>
      <div className="header-logo">
        <Link to="/">cesarolvr.com</Link>
      </div>

      <ul className="header-list">
        <li>
          <Link
            to="/about/"
            className={pathname?.startsWith("/about") ? `-active` : ``}
          >
            About
          </Link>
        </li>

        <li>
          <Link
            to="/blog"
            title="soon"
            className={pathname?.startsWith("/blog") ? `-active` : ``}
          >
            Read my blog
          </Link>
        </li>

        <li>
          <a href="https://github.com/cesarolvr/" target="_blank">
            Some experiments ->
          </a>
        </li>
        <li>
          <Link
            to="/utilities/"
            className={pathname?.startsWith("/utilities") ? `-active` : ``}
          >
            More utilities
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
