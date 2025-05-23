import * as React from "react";
import { Link } from "gatsby";

// Styles
import "./index.scss";

const Header = ({ goBackToHome }) => {
  const pathname =
    typeof window !== "undefined" ? window?.location?.pathname : "";
  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/">cesarolvr.com</Link>
      </div>
      {goBackToHome && (
        <Link className="goback" to="/">
          {"<-"} go back to home
        </Link>
      )}

      <ul className="header-list only-desktop">
        <li>
          <Link
            to="/about/"
            className={pathname?.startsWith("/about") ? `-active` : ``}
          >
            About me
          </Link>
        </li>

        <li>
          <Link
            to="/utilities/"
            className={pathname?.startsWith("/utilities") ? `-active` : ``}
          >
            Utilities
          </Link>
        </li>

        <li>
          <Link
            to="/blog"
            title="soon"
            className={pathname?.startsWith("/blog") ? `-active` : ``}
          >
            Blog
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
