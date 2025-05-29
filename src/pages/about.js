import * as React from "react";
import classNames from "classnames";

// Components
import Header from "../components/Header";
import Note from "../components/Note";
import Loader from "../components/Loader";
import Cursor from "../components/Cursor";
import { FiCopy } from "@react-icons/all-files/fi/FiCopy";
import { FiDownload } from "@react-icons/all-files/fi/FiDownload";

// Files
import cesarolvrCV from "../files/cesar-oliveira-resume.pdf";

// Context
import { State } from "../components/Layout";

// Data
import {
  bioDescription,
  careerPath,
  academyPath,
  openSourcePath,
  volunteeringPath,
  hackingPath,
} from "../data";

// Images
import headshot from "../images/headshot.jpg";

// Styles
import "../styles/global.scss";
import "../styles/about.scss";
import Headshot from "../components/Headshot";

const panelMap = (index) => {
  const map = {
    0: (
      <ol className="career-path">
        <>
          <br />
          -> Check out my{" "}
          <a
            className="underline text-white"
            href="https://www.linkedin.com/in/cesarolvr/#experience"
          >
            LinkedIn experience section
          </a>{" "}
          for more details
        </>
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
    ),
    1: (
      <ol className="career-path -academic">
        {academyPath.map(({ role, details }, index) => {
          return (
            <li key={index} className="about-career-experience">
              <h4 className="role">{role}</h4>
              <br />
              <h5 className="infos">{details}</h5>
            </li>
          );
        })}
      </ol>
    ),
    2: (
      <ol className="career-path -academic">
        {openSourcePath.map(({ role, details, description, link }, index) => {
          return (
            <li key={index} className="about-career-experience">
              <h4 className="role">{role}</h4>
              <br />
              <h5 className="infos">{details}</h5>
              <p className="description">{description}</p>
              {link && (
                <a href={link} target="_blank" className="link">
                  {link}
                </a>
              )}
            </li>
          );
        })}
      </ol>
    ),
    3: (
      <ol className="career-path -academic">
        {volunteeringPath.map(({ role, details, description }, index) => {
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
    ),
    4: (
      <ol className="career-path -academic">
        {hackingPath.map(({ role, details, description, link }, index) => {
          return (
            <li key={index} className="about-career-experience">
              <h4 className="role">{role}</h4>
              <br />
              <h5 className="infos">{details}</h5>
              <p className="description">{description}</p>
              {link && (
                <a href={link} target="_blank" className="link">
                  {link}
                </a>
              )}
            </li>
          );
        })}
      </ol>
    ),
  };

  return map[index];
};

const About = () => {
  const [activePanel, setActivePanel] = React.useState(0);
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
    }, 800);
  }, []);

  const isMobile =
    typeof window !== "undefined" ? window.innerWidth < 1440 : true;

  return (
    <>
      <Cursor />

      <div className="about">
        <Loader isOpened={isOpened} duration={0.5} />
        <Header goBackToHome={true} />
        <main>
          <div className="headshot column">
            {isMobile ? <img src={headshot} alt="headshot" /> : <Headshot />}

            <a
              className="button -download -icon"
              href={headshot}
              download={true}
            >
              <FiDownload />
              <p>Download photo</p>
            </a>
          </div>
          <div className="bio column">
            <h3 className="about-title mb-2 font-bold text-[18px]">Bio</h3>
            <p className="paragraph">
              A decade of experience as a Software Engineer (Front-end focused),
              working on large-scale and high-impact projects for digital
              companies, where I've crafted digital acquisition experiences,
              dashboards, awwwards-like websites, design systems, animations
              libraries, mobile apps and email marketing tools.
            </p>
            <p className="paragraph">
              I'm really focused about resolve real problems through technology,
              specifically web development and creative development.
            </p>
            <ul className="control">
              <li>
                <button className="-icon" onClick={copyText}>
                  <FiCopy />
                  <p>Copy bio</p>
                </button>
              </li>
              <li>
                <a className="button -icon" href={cesarolvrCV} download={true}>
                  <FiDownload />
                  <p>Download CV</p>
                </a>
              </li>
            </ul>
            <div className="toggle">
              {[
                {
                  title: "Career",
                  isBlocked: false,
                },
                {
                  title: "Academy",
                  isBlocked: false,
                },
                {
                  title: "Open source",
                  isBlocked: false,
                },
                {
                  title: "Volunteering",
                  isBlocked: false,
                },
                {
                  title: "Hacking",
                  isBlocked: false,
                },
              ].map(({ title, isBlocked }, index) => {
                return (
                  <button
                    className={classNames("-toggle", {
                      "--active font-bold": activePanel === index,
                      "-button-blocked": isBlocked,
                    })}
                    disabled={isBlocked}
                    title={isBlocked ? `soon` : title}
                    onClick={() => setActivePanel(index)}
                  >
                    {title}
                  </button>
                );
              })}
            </div>
            {panelMap(activePanel)}
          </div>
        </main>
        <Note />
      </div>
    </>
  );
};

export default About;

export const Head = () => <title>Me | cesarolvr</title>;
