import { Link } from "gatsby";
import * as React from "react";

// Styles
import "./index.scss";

const Footer = () => {
  const pathname =
    typeof window !== "undefined" ? window?.location?.pathname : "";
  return (
    <footer className="footer">
      {/* <ul className="list">
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
       
      </ul> */}
    </footer>
  );
};

export default Footer;
