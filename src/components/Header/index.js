import * as React from "react";
import { Link } from "gatsby";
import SplitTextAnimation from "../SplitText";

// Styles
import "./index.scss";
import "../SplitText/styles.scss";

const Header = ({ onThemeChange, theme }) => {
  const pathname =
    typeof window !== "undefined" ? window?.location?.pathname : "";

  const isMobile =
    typeof window !== "undefined" ? window.innerWidth < 730 : true;

  return (
    <header className="header">
      {pathname === "/" ? (
        <div className="header-holder w-[100px] sm:w-[33%]">
          <p className="text-[var(--tw-text-gray-secondary)] sm:text-[18px] text-[14px]">
            Based in <br />
            <strong className="underline">
              <small className="hidden sm:inline sm:text-[18px] text-[14px]">
                São Paulo,{" "}
              </small>{" "}
              Brazil
            </strong>
          </p>
          <br />
          <p className="text-[var(--tw-text-gray-secondary)] sm:text-[18px] text-[14px]">
            Switch to <br />{" "}
            <span onClick={onThemeChange} className="underline cursor-pointer">
              <strong>{theme === "dark" ? "Light" : "Dark"} mode</strong>
            </span>
          </p>
        </div>
      ) : (
        <p className="w-[100px] sm:w-[33%]">
          {!isMobile ? (
            <Link to="/">{`<-`} back to home</Link>
          ) : (
            <Link to="/">{`<-`} back</Link>
          )}
        </p>
      )}
      <div className="header-logo text-[var(--color-total)] font-bold w-[100px] sm:w-[33%] flex justify-center">
        <Link to="/">
          <SplitTextAnimation 
            text="cesarolvr.com" 
            className="split-text"
            delay={0.5}
          />
        </Link>
      </div>

      <ul className="header-list w-[100px] sm:w-[33%]">
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
            Blog
          </Link>
        </li>

        <li>
          <a href="https://github.com/cesarolvr/" target="_blank">
            Experiments
          </a>
        </li>
        <li>
          <Link
            to="/utilities/"
            className={pathname?.startsWith("/utilities") ? `-active` : ``}
          >
            Utilities
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
