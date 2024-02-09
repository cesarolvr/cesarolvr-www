import * as React from "react";

import { FiCopy } from "@react-icons/all-files/fi/FiCopy";
import { FiDownload } from "@react-icons/all-files/fi/FiDownload";
import { FiAward } from "@react-icons/all-files/fi/FiAward";
import { FiGithub } from "@react-icons/all-files/fi/FiGithub";
import { FiCalendar } from "@react-icons/all-files/fi/FiCalendar";
import { FiInstagram } from "@react-icons/all-files/fi/FiInstagram";
import { FiBook } from "@react-icons/all-files/fi/FiBook";
import { FiMail } from "@react-icons/all-files/fi/FiMail";
import { FiCoffee } from "@react-icons/all-files/fi/FiCoffee";

// Files
import cesarolvrCV from "../files/cv-cesarolvr.pdf";

const bioDescription = `8+ years of experience as a Software Engineer, working on
large-scale and high-impact projects for digital companies, where I
created digital acquisition experiences, dashboards, awwwards-like
websites, design systems, mobile apps and email marketing tools.  I'm really focused about resolve real problems through technology,
specifically web development, creative development, and usability
engineering.`;

const careerPath = [
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
];

const academyPath = [
  {
    role: "postgraduate diploma (pgdip) of leadership and innovation",
    details: `getulio vargas foundation (fgv) | são Paulo, brazil | 2023 -> 2024`,
  },
  {
    role: "summer programm on usability engineering",
    details: `university of são paulo (usp) | são Paulo, brazil | 2017 -> 2018`,
  },
  {
    role: "bachelor of digital (ba) design",
    details: `anhembi morumbi university (uam) | são Paulo, brazil | 2016 -> 2019`,
  },
  {
    role: "career and technical education (cte) on information systems",
    details: `são paulo state technical school (etec) | são Paulo, brazil | 2013 -> 2015`,
  },
];

const quickActionList = [
  {
    text: "copy link",
    nick: "c",
    icon: <FiCopy />,
    type: 1,
    textToCopy: "https://cesarolvr.com",
  },
  {
    text: "download cv",
    nick: "d",
    icon: <FiDownload />,
    target: cesarolvrCV,
  },
  {
    text: "know my career",
    nick: "k",
    icon: <FiAward />,
    target: "https://www.linkedin.com/in/cesarolvr/",
  },
  {
    text: "see my github",
    nick: "g",
    icon: <FiGithub />,
    target: "https://github.com/cesarolvr/",
  },
  {
    text: "book a meeting",
    nick: "b",
    icon: <FiCalendar />,
    target: "https://meet.google.com/",
  },
  {
    text: "send an email",
    nick: "e",
    icon: <FiMail />,
    target: "mailto:contact@cesarolvr.com",
  },
  {
    text: "follow me on instagram",
    nick: "g",
    icon: <FiInstagram />,
    target: "https://www.instagram.com/cesarolvr/",
  },
  {
    text: "see my current readings",
    nick: "r",
    icon: <FiBook />,
    target: "https://goodreads.com/cesarolvr",
  },
  {
    text: "view source code",
    nick: "r",
    icon: <FiCoffee />,
    target: "https://github.com/cesarolvr/cesarolvr-www",
  },
];

export { bioDescription, careerPath, academyPath, quickActionList };
