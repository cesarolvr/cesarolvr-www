import * as React from "react";

// Components
import Header from "../components/Header";
import Container from "../components/Container";
import Note from "../components/Note";
import Loader from "../components/Loader";
import Cursor from "../components/Cursor";

// Files
import cesarolvrCV from "../files/cesar-oliveira-resume.pdf";

// Styles
import "../styles/global.scss";
import "../styles/actions.scss";
import ScrambleText from "../components/ScrambleText";

const Actions = () => {
  const [isOpened, setIsOpened] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setIsOpened(false);
    }, 800);
  }, []);

  return (
    <>
      <Cursor />

      <div className="actions">
        <Loader isOpened={isOpened} duration={0.5} />
        <Header hideShortcut={true} goBackToHome={true} />
        <main>
          <Container>
            <ul className="actions-list pl-5">
              <li>
                <a
                  className="hover:text-[var(--tw-text-gray-primary)]"
                  href={cesarolvrCV}
                  download={true}
                  target="_blank"
                >
                  <ScrambleText
                    text="Download CV"
                    className="scramble-text"
                    duration={1}
                    placeholder=".:"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/cesarolvr/"
                  target="_blank"
                  className="hover:text-[var(--tw-text-gray-primary)]"
                >
                  <ScrambleText
                    text="Go to my Linkedin"
                    className="scramble-text"
                    duration={1.2}
                    placeholder=".:"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://meet.google.com/"
                  target="_blank"
                  className="hover:text-[var(--tw-text-gray-primary)]"
                >
                  <ScrambleText
                    text="Book a meeting"
                    className="scramble-text inline-block"
                    duration={1.4}
                    placeholder=".:"
                  />
                  <span className="inline-block ml-5">
                    <ScrambleText
                      text="invite to -> contact@cesarolvr.com"
                      className="scramble-text"
                      duration={1.4}
                      placeholder="__"
                    />
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/cesarolvr/"
                  target="_blank"
                  className="hover:text-[var(--tw-text-gray-primary)]"
                >
                  <ScrambleText
                    text="See my Github"
                    className="scramble-text"
                    duration={1.6}
                    placeholder=".:"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://codepen.io/cesarolvr/"
                  target="_blank"
                  className="hover:text-[var(--tw-text-gray-primary)]"
                >
                  <ScrambleText
                    text="Star my Codepen"
                    className="scramble-text"
                    duration={1.8}
                    placeholder=".:"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://leetcode.com/u/cesarolvr/"
                  target="_blank"
                  className="hover:text-[var(--tw-text-gray-primary)]"
                >
                  <ScrambleText
                    text="Check my Leetcode"
                    className="scramble-text"
                    duration={2}
                    placeholder=".:"
                  />
                </a>
              </li>
              <li>
                {" "}
                <a
                  href="mailto:contact@cesarolvr.com"
                  className="hover:text-[var(--tw-text-gray-primary)]"
                >
                  <ScrambleText
                    text="Send me an e-mail"
                    className="scramble-text"
                    duration={2.2}
                    placeholder=".:"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/cesarolvr/"
                  target="_blank"
                  className="hover:text-[var(--tw-text-gray-primary)]"
                >
                  <ScrambleText
                    text="Follow me on Instagram"
                    className="scramble-text inline-block"
                    duration={2.4}
                    placeholder=".:"
                  />
                  <span className="inline-block ml-5">
                    <ScrambleText
                      text="(only friends)"
                      className="scramble-text"
                      duration={2.4}
                      placeholder="__"
                    />
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://goodreads.com/cesarolvr"
                  target="_blank"
                  className="hover:text-[var(--tw-text-gray-primary)]"
                >
                  <ScrambleText
                    text="My current readings"
                    className="scramble-text inline-block"
                    duration={2.6}
                    placeholder=".:"
                  />
                  <span className="inline-block ml-5">
                    <ScrambleText
                      text="(only curious)"
                      className="scramble-text"
                      duration={1}
                      placeholder="__"
                    />
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/cesarolvr/cesarolvr-www"
                  target="_blank"
                  className="hover:text-[var(--tw-text-gray-primary)]"
                >
                  <ScrambleText
                    text="View source code of this website"
                    className="scramble-text inline-block"
                    duration={1}
                    placeholder=".:"
                  />
                  <span className="inline-block ml-5">
                    <ScrambleText
                      text="(only devs)"
                      className="scramble-text"
                        duration={2.8}
                      placeholder="__"
                    />
                  </span>
                </a>
              </li>
            </ul>
          </Container>
        </main>
        <br />
        <br />
        <br />
        <br />
        <Note />
      </div>
    </>
  );
};

export default Actions;

export const Head = () => <title>Utilities | cesarolvr</title>;
