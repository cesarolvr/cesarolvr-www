import * as React from "react";
import { Link } from "gatsby";
import ScrambleText from "../ScrambleText";

// Styles
import "./index.scss";

const Header = ({ onThemeChange, theme, disableScramble = false }) => {
  const pathname =
    typeof window !== "undefined" ? window?.location?.pathname : "";

  const isMobile =
    typeof window !== "undefined" ? window.innerWidth < 730 : true;

  return (
    <header className="header">
      {pathname === "/" ? (
        <div className="header-holder w-[100px] sm:w-[33%]">
          <p className="text-[var(--tw-text-gray-secondary)] sm:text-[18px] text-[14px]">
            <ScrambleText
              text={`Based in`}
              className="scramble-text"
              delay={1.5}
            />{" "}
            <strong className="underline">
              <small className="sm:text-[18px] text-[14px]">
                {!isMobile ? (
                  <ScrambleText
                    text={`São Paulo, Brazil`}
                    className="scramble-text"
                    duration={3}
                  />
                ) : (
                  <ScrambleText
                    text={`Brazil`}
                    className="scramble-text"
                    duration={3}
                  />
                )}
              </small>
            </strong>
          </p>
          <br />
          <p className="text-[var(--tw-text-gray-secondary)] sm:text-[18px] text-[14px]">
            <ScrambleText
              text="Switch to"
              className="scramble-text"
              duration={3.5}
            />
            <span onClick={onThemeChange} className="underline cursor-pointer">
              <strong>
                <ScrambleText
                  text={`${theme === "dark" ? "Light" : "Dark"} mode`}
                  className="scramble-text"
                  duration={3.9}
                />
              </strong>
            </span>
          </p>
        </div>
      ) : (
        <p className="w-[100px] sm:w-[33%]">
          {!isMobile ? (
            <Link to="/" className="sm:text-[18px] text-[14px]">
              {!disableScramble ? (
                <ScrambleText
                  text={`<- back to home`}
                  className="scramble-text"
                  duration={2}
                />
              ) : (
                <>{`<- back to home`}</>
              )}
            </Link>
          ) : (
            <Link to="/">
              {!disableScramble ? (
                <ScrambleText
                  text={`<- back`}
                  className="scramble-text sm:text-[18px] text-[14px]"
                  duration={2}
                />
              ) : (
                <>{`<- back`}</>
              )}
            </Link>
          )}
        </p>
      )}
      <div className="header-logo text-[var(--color-total)] w-[100px] sm:w-[33%] flex justify-center">
        <Link to="/">
          {!disableScramble ? (
            <ScrambleText
              text="cesarolvr.com"
              className="scramble-text"
              placeholder="*"
              duration={2.5}
            />
          ) : (
            <>cesarolvr.com</>
          )}
        </Link>
      </div>

      <ul className="header-list w-[100px] sm:w-[33%]">
        <li>
          <Link
            to="/about/"
            className={pathname?.startsWith("/about") ? `-active` : ``}
          >
            {!disableScramble ? (
              <ScrambleText
                text="About"
                className="scramble-text"
                duration={3}
              />
            ) : (
              <>About</>
            )}
          </Link>
        </li>

        <li>
          <Link
            to="/blog"
            title="soon"
            className={pathname?.startsWith("/blog") ? `-active` : ``}
          >
            {!disableScramble ? (
              <ScrambleText
                text="Blog"
                className="scramble-text"
                duration={3}
              />
            ) : (
              <>Blog</>
            )}
          </Link>
        </li>

        <li>
          <a href="https://github.com/cesarolvr/" target="_blank">
            {!disableScramble ? (
              <ScrambleText
                text="Experiments"
                className="scramble-text"
                duration={3}
              />
            ) : (
              <>Experiments</>
            )}
          </a>
        </li>
        <li>
          <Link
            to="/utilities/"
            className={pathname?.startsWith("/utilities") ? `-active` : ``}
          >
            {!disableScramble ? (
              <ScrambleText
                text="Utilities"
                className="scramble-text"
                duration={3}
              />
            ) : (
              <>Utilities</>
            )}
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
