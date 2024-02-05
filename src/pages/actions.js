import * as React from "react";

// Components
import Header from "../components/Header";
import Container from "../components/Container";
import Note from "../components/Note";
import Loader from "../components/Loader";

// Files
import cesarolvrCV from "../files/cv-cesarolvr.pdf";

// Styles
import "../styles/global.scss";
import "./actions.scss";

const Actions = () => {
  const [isOpened, setIsOpened] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setIsOpened(false);
    }, 2000);
  }, []);

  return (
    <div className="actions">
      <Loader isOpened={isOpened} />
      <Header hideShortcut={true} />
      <main>
        <Container>
          <ul className="actions-list">
            <li>
              <a href={cesarolvrCV} download={true} target="_blank">
                download cv
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/cesarolvr/" target="_blank">
                go to my linkedin
              </a>
            </li>
            <li>
              <a href="https://meet.google.com/" target="_blank">
                book a meeting <span>invite to -> contact@cesarolvr.com</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/cesarolvr/" target="_blank">
                see my github
              </a>
            </li>
            <li>
              {" "}
              <a href="mailto:contact@cesarolvr.com">send me an email</a>
            </li>
            <li>
              <a href="https://www.instagram.com/cesarolvr/" target="_blank">
                follow me on instagram <span>(only friends)</span>
              </a>
            </li>
            <li>
              <a href="https://goodreads.com/cesarolvr" target="_blank">
                my current readings <span>(only curious)</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/cesarolvr/cesarolvr-www"
                target="_blank"
              >
                view source code of this website <span>(only devs)</span>
              </a>
            </li>
          </ul>
        </Container>
      </main>
      <Note />
    </div>
  );
};

export default Actions;

export const Head = () => <title>quick actions</title>;