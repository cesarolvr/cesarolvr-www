import * as React from "react";

// Components
import Header from "../components/Header";
import Note from "../components/Note";
import Loader from "../components/Loader";
import { FiCopy } from "@react-icons/all-files/fi/FiCopy";
import { FiDownload } from "@react-icons/all-files/fi/FiDownload";

// Files
import cesarolvrCV from "../files/cv-cesarolvr.pdf";

// Context
import { State } from "../components/Layout";

// Data
import { bioDescription, careerPath } from "../data";

// Images
import headshot from "../images/headshot.png";

// Styles
import "../styles/global.scss";
import "./about.scss";

const About = () => {
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
            large-scale and high-impact projects for digital companies, where I
            created digital acquisition experiences, dashboards, awwwards-like
            websites, design systems, mobile apps and email marketing tools.
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
            <button className="-toggle --active">career path</button>
            <button className="-toggle">academy journey</button>
          </div>
          <ol className="career-path">
            {careerPath.map(({ role, details, description }, index) => {
              return (
                <li key={index} className="about-career-experience">
                  <h4>{role}</h4>
                  <h5>{details}</h5>
                  <p>{description}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </main>
      <Note />
    </div>
  );
};

export default About;

export const Head = () => <title>sobre | cesarolvr</title>;
