import * as React from "react";

// Components
import Header from "../components/Header";
import Container from "../components/Container";
import Footer from "../components/Footer";

// Styles
import "../styles/global.scss";

const About = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <h3 className="about-title">bio</h3>
          <p className="about-paragraph">
            I'm really focused about resolve real problems through technology,
            specifically web development, creative development, and usability
            engineering.
          </p>
          <p className="about-paragraph">
            I'm really focused about resolve real problems through technology,
            specifically web development, creative development, and usability
            engineering.
          </p>
          <ul className="about-control">
            <li>copy bio</li>
            <li>download cv</li>
          </ul>
          <div className="about-toggle">
            <button>career path</button>
            <button>academy journey</button>
          </div>
          <ol className="about-career">
            {[
              {
                role: "tech lead",
                details: `Itaú Unibanco | São Paulo, Brazil | 2023 -> current`,
                description: `   As a Tech Lead at Itaú, the largest bank in Latin America, I
              work on developing web applications using JavaScript and
              various frameworks and technologies, such as React, Node,
              TypeScript, Cypress, and GatsbyJS. I also lead and manage
              projects, teams, and processes, ensuring quality,
              performance, and accessibility standards.`,
              },
              {
                role: "senior software engineer",
                details: `Red Ventures | Charlotte, USA | 2018 -> 2023`,
                description: `My activities were around creation of digital acquisition experiences for banks, dashboards to internal tools, tools to automate e-mail marketing development and delivering, Design systems to serve components for multiple projects, tools in order to resolve accessibility issues during the automated tests, and sophisticated experiences to keep users engaged with multiple motion/animation libraries.`,
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
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default About;

export const Head = () => <title>sobre</title>;
