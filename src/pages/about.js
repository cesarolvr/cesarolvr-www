import * as React from "react";

// Components
import Header from "../components/Header";
import Note from "../components/Note";
import Loader from "../components/Loader";
import Layout from "../components/Layout";
import { FiCopy } from "@react-icons/all-files/fi/FiCopy";
import { FiDownload } from "@react-icons/all-files/fi/FiDownload";

// Files
import cesarolvrCV from "../files/cv-cesarolvr.pdf";

// Images
import headshot from "../images/headshot.png";

// Styles
import "../styles/global.scss";
import "./about.scss";

const bioText = `8+ years of experience as a Software Engineer, working on
large-scale and high-impact projects for digital companies, where I
created digital acquisition experiences, dashboards, awwwards-like
websites, design systems, mobile apps and email marketing tools.  I'm really focused about resolve real problems through technology,
specifically web development, creative development, and usability
engineering.`;

const About = () => {
  const [copied, setCopied] = React.useState(false);
  const copyText = () => {
    navigator.clipboard.writeText(bioText).then(() => {
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
    <Layout page="about">
      <Loader isOpened={isOpened} />
      <Header />
      {copied && <div className="copied">copied 👍🏾</div>}
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
            {[
              {
                role: "tech lead",
                details: `Itaú Unibanco | São Paulo, Brazil | 2023 -> current`,
                description: `   As a Tech Lead at Itaú, the largest bank in Latin America, I work on developing web applications using JavaScript and various frameworks and technologies, such as React, Node, TypeScript, Cypress, and GatsbyJS. I also lead and manage projects, teams, and processes, ensuring quality, performance, and accessibility standards.`,
              },
              {
                role: "senior software engineer",
                details: `Red Ventures | Charlotte, USA | 2018 -> 2023`,
                description: `My activities were around creation of digital acquisition experiences for banks, dashboards to internal tools, tools to automate e-mail marketing development and delivering, Design systems to serve components for multiple projects, tools in order to resolve accessibility issues during the automated tests, and sophisticated experiences to keep users engaged with multiple motion/animation libraries.`,
              },
              {
                role: "community manager",
                details: `Nerdzão | São Paulo, Brazil | 2017 -> 2018`,
                description: `Nerdzão is one of the largest technology communities in Brazil. I could contribute to create dozens of these technology events in the town, and it helped me a lot with my career growth (besides it allow me to travel through Brazil).`,
              },
              {
                role: "front-end engineer",
                details: `Shawee | São Paulo, Brazil | 2017 -> 2018`,
                description: `The job at Shawee were around the creation of static web applications and SPAs. Large parts of them I did using React and GraphQL.`,
              },
              {
                role: "front-end engineer",
                details: `Horizon Four | São Paulo, Brazil | 2017 -> 2018`,
                description: `At Horizon Four, I created many web apps using React and React Native for mobile apps. From new applications, through maintenance of existing software, to the craftsmanship of internal tools and frameworks. We've already gone through several other tools like AngularJS, Angular 2+ with Typescript, Phonegap, VanillaJS and others.`,
              },
              {
                role: "a ”handyman engineer”",
                details: `Ag. Empreendora | São Paulo, Brazil | 2016 -> 2017`,
                description: `A marketing agency composed by 3 guys, so there I had to do everything. From planning sprints, prototyping and to get the hands dirty developing static sites and SPAs with vanilla and AngularJS.`,
              },
            ].map(({ role, details, description }, index) => {
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
    </Layout>
  );
};

export default About;

export const Head = () => <title>sobre | cesarolvr</title>;
