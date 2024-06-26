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
import cesarolvrCV from "../files/cesar-oliveira-resume.pdf";

const bioDescription = `A decade of experience as a Software Engineer, working on
large-scale and high-impact projects for digital companies, where
I've crafted digital acquisition experiences, dashboards,
awwwards-like websites, design systems, animations libraries,
mobile apps and email marketing tools. I'm really focused about resolve real problems through technology,
specifically web development and creative development.`;

const careerPath = [
  {
    role: "Tech Lead",
    details: `Itaú Unibanco | São Paulo, Brazil | 2023 -> current`,
    description: `- Led multiple squads of 4-5 experienced developers to create digital acquisition funnels
    - Generated +100k deals (contracts) through mortgage, vehicles sales and real estate finance businesses, making +1M in revenue and increasing market shares
    - Led with strong 1-1s, technical and non-technical mentoring, internal talks and POCs developed
    - Rewarded by Itaú for being a high-performer employee already in the first quarter working`,
  },
  {
    role: "Senior Software Engineer",
    details: `Red Ventures | Charlotte, USA | 2018 -> 2023`,
    description: `- Created +10 apps as a individual contributor and being core committer in all those projects
    - Generated +5MM hot leads from toll tags, mortgage, vehicles leasing to real state sector, resulted in +500k new customers
    - Given +10 of talks about Front-end related content, React tutorials, animation tips, automated tests and also soft skills
    - Optimized +10 web vitals metrics in the 5 businesses built, directly affecting thousands of users daily at scale just with improvements in the React applications served.
    - Awarded by RV for being a top-performer and representing the value "Red Ventures believe in being the change to see in the world"
    - Designed a new versioning process, reducing by 50% the time to release new website versions
    - Coordinated 1 project helping Brazilian non-profit organizations, aligned with the company's BlackLivesMatter (BLM) campaigns. Donated more than USD 6k.`,
  },

  {
    role: "Front-end Engineer",
    details: `Shawee | São Paulo, Brazil | 2017 -> 2018`,
    description: `- Implemented +10 products (in-company and tech community hackathons) using React and React Native, boosting that current OKRs
    - Built a robust suite of automated tests to front-end features across the products using Cypress and Testing Library
    - Enhanced front-end feature reliability, cutting by around 50% the amount of time during QA process
    - Created +20 Tech Meetups in São Paulo, promoting Front-end related discussions and growth`,
  },
  {
    role: "Front-end Engineer",
    details: `Horizon Four | São Paulo, Brazil | 2017 -> 2018`,
    description: `- Delivered +6 projects for startups in different sectors like finance services, private rental and entertainment
    - Travelled across 5 states in Brazil during in company implementations, negotiating deadlines and expectations with stakeholders`,
  },
  {
    role: "A ”Handyman Engineer”",
    details: `Ag. Empreendora | São Paulo, Brazil | 2016 -> 2017`,
    description: `- Made +15 websites for different small business like schools, stores and bakeries. Mostly using jQuery, AngularJS, Wordpress and VanillaJS`,
  },
];

const academyPath = [
  {
    role: "MicroMaster® Program in Algorithms and Data Structures",
    details: `Getulio Vargas Foundation (FGV) | São Paulo, Brazil | 2023 -> 2024`,
  },
  {
    role: "Postgraduate Diploma (PgDip) in Leadership and Innovation",
    details: `Getulio Vargas Foundation (FGV) | São Paulo, Brazil | 2023 -> 2024`,
  },
  {
    role: "Summer Programm in Usability Engineering",
    details: `University of São Paulo (USP) | São Paulo, Brazil | 2017 -> 2018`,
  },
  {
    role: "Bachelor (BA) in Digital design",
    details: `Anhembi Morumbi University (UAM) | São Paulo, Brazil | 2016 -> 2019`,
  },
  {
    role: "Career and Technical Education (CTE) in Information Systems",
    details: `São Paulo State Technical School (ETEC) | São Paulo, Brazil | 2013 -> 2015`,
  },
];

const openSourcePath = [
  {
    role: "Community Builder",
    details: `Nerdzão | São Paulo, Brazil | 2017 -> 2018`,
    description: `Nerdzão is one of the largest technology communities in Brazil. I could contribute to create dozens of these technology events in the town, and it helped me a lot with my career growth (besides it allow me to travel through Brazil).`,
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

export { bioDescription, careerPath, academyPath, quickActionList, openSourcePath };
