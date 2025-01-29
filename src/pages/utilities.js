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
            <ul className="actions-list">
              <li>
                <a href={cesarolvrCV} download={true} target="_blank">
                  Download CV
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/cesarolvr/"
                  target="_blank"
                >
                  Go to my Linkedin
                </a>
              </li>
              <li>
                <a href="https://meet.google.com/" target="_blank">
                  Book a meeting <span>invite to -> contact@cesarolvr.com</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/cesarolvr/" target="_blank">
                  See my Github
                </a>
              </li>
              <li>
                <a href="https://codepen.io/cesarolvr/" target="_blank">
                  Star my Codepen
                </a>
              </li>
              <li>
                <a href="https://leetcode.com/u/cesarolvr/" target="_blank">
                  Check my Leetcode
                </a>
              </li>
              <li>
                {" "}
                <a href="mailto:contact@cesarolvr.com">Send me an e-mail</a>
              </li>
              <li>
                <a href="https://www.instagram.com/cesarolvr/" target="_blank">
                  Follow me on Instagram <span>(only friends)</span>
                </a>
              </li>
              <li>
                <a href="https://goodreads.com/cesarolvr" target="_blank">
                  My current readings <span>(only curious)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/cesarolvr/cesarolvr-www"
                  target="_blank"
                >
                  View source code of this website <span>(only devs)</span>
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
