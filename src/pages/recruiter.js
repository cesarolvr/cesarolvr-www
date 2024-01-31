import * as React from "react";

// Components
import Header from "../components/Header";
import Container from "../components/Container";
import Note from "../components/Note";

// Styles
import "../styles/global.scss";

const Recruiter = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <ul className="actions-list">
            <li>download cv</li>
            <li>go to his linkedin</li>
            <li>book a meeting</li>
            <li>see his github</li>
            <li>send and email</li>
            <li>
              go to his instagram <span>(only friends)</span>
            </li>
            <li>
              his current readings <span>(only curious)</span>
            </li>
          </ul>
        </Container>
      </main>
      <Note />
    </>
  );
};

export default Recruiter;

export const Head = () => <title>for you, recruiter</title>;
