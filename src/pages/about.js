import * as React from "react";

// Components
import Header from "../components/Header";
import Note from "../components/Note";
import Loader from "../components/Loader";
import Cursor from "../components/Cursor";
import { FiCopy } from "@react-icons/all-files/fi/FiCopy";
import { FiDownload } from "@react-icons/all-files/fi/FiDownload";

// Files
import cesarolvrCV from "../files/cv-cesarolvr.pdf";

// Context
import { State } from "../components/Layout";

// Data
import { bioDescription, careerPath, academyPath } from "../data";

// Images
import headshot from "../images/headshot.jpg";

// Styles
import "../styles/global.scss";
import "./about.scss";
import classNames from "classnames";

const About = () => {
  const [activePanel, setActivePanel] = React.useState(1);
  const { setCopied } = React.useContext(State);

  const copyText = () => {
    navigator.clipboard.writeText(bioDescription).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1000);
    }, console.log);
  };

  const [isOpened, setIsOpened] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setIsOpened(false);
    }, 2000);
  }, []);

  return (
    <>
      <Cursor />

      <div className="about">
        <Loader isOpened={isOpened} />
        <Header />
        <main>
          <div className="headshot column">
            <img src={headshot} alt="headshot" />
            <a className="button -icon" href={headshot} download={true}>
              <FiDownload />
              <p>download photo</p>
            </a>
          </div>
          <div className="bio column">
            <h3 className="about-title">bio</h3>
            <p className="paragraph">
              8+ years of experience as a Software Engineer, working on
              large-scale and high-impact projects for digital companies, where
              I created digital acquisition experiences, dashboards,
              awwwards-like websites, design systems, mobile apps and email
              marketing tools.
            </p>
            <p className="paragraph">
              I'm really focused about resolve real problems through technology,
              specifically web development, creative development, and usability
              engineering.
            </p>
            <ul className="control">
              <li>
                <button className="-icon" onClick={copyText}>
                  <FiCopy />
                  <p>copy bio</p>
                </button>
              </li>
              <li>
                <a className="button -icon" href={cesarolvrCV} download={true}>
                  <FiDownload />
                  <p>download cv</p>
                </a>
              </li>
            </ul>
            <div className="toggle">
              <button
                className={classNames("-toggle", {
                  "--active": activePanel === 1,
                })}
                onClick={() => setActivePanel(1)}
              >
                career path
              </button>
              <button
                className={classNames("-toggle", {
                  "--active": activePanel === 2,
                })}
                onClick={() => setActivePanel(2)}
              >
                academy journey
              </button>
            </div>
            {activePanel === 1 ? (
              <ol className="career-path">
                {careerPath.map(({ role, details, description }, index) => {
                  return (
                    <li key={index} className="about-career-experience">
                      <h4 className="role">{role}</h4>
                      <br />
                      <h5 className="infos">{details}</h5>
                      <p className="description">{description}</p>
                    </li>
                  );
                })}
              </ol>
            ) : (
              <ol className="career-path -academic">
                {academyPath.map(({ role, details, description }, index) => {
                  return (
                    <li key={index} className="about-career-experience">
                      <h4 className="role">{role}</h4>
                      <br />
                      <h5 className="infos">{details}</h5>
                    </li>
                  );
                })}
              </ol>
            )}
          </div>
        </main>
        <Note />
      </div>
    </>
  );
};

export default About;

export const Head = () => <title>about | cesarolvr</title>;
