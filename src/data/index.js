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

const bioDescription = `A decade of experience as a Software Engineer (Front-end focused), working on
large-scale and high-impact projects for digital companies, where
I've crafted digital acquisition experiences, dashboards,
awwwards-like websites, design systems, animations libraries,
mobile apps and email marketing tools. I'm really focused about resolve real problems through technology,
specifically web development and creative development.`;

const careerPath = [
  {
    role: "Senior Software Engineer",
    details: `WithClutch | San Francisco, USA | 2025 -> current`,
  },
  {
    role: "Lead Software Engineer",
    details: `Itaú Unibanco | São Paulo, Brazil | 2023 -> 2025`,
  },
  {
    role: "Senior Front-end Engineer",
    details: `Red Ventures | Charlotte, USA | 2018 -> 2023`,
  },

  {
    role: "Front-end Engineer",
    details: `Shawee | São Paulo, Brazil | 2017 -> 2018`,
  },
  {
    role: "Front-end Engineer",
    details: `Horizon Four | São Paulo, Brazil | 2017 -> 2018`,
  },
  {
    role: "A ”Handyman Engineer”",
    details: `Ag. Empreendora | São Paulo, Brazil | 2016 -> 2017`,
  },
];

const academyPath = [
  {
    role: "MicroMaster® Program in Algorithms and Data Structures",
    details: `University of California, San Diego (UCSD) | California, USA | 2024 -> 2025`,
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
    role: "My Github",
    link: `https://github.com/cesarolvr`,
  },
];

const volunteeringPath = [
  {
    role: "Community Builder",
    details: `Nerdzão | São Paulo, Brazil | 2017 -> 2018`,
    description: `- Contribute to create +15 of technology events/meetup in the town
    - Promoted +5 talks/meetup across the country`,
  },
  {
    role: "Teaching Assistant",
    details: `{reprograma} | São Paulo, Brazil | 2018`,
    description: `- Contributed as a teacher's assistant, clearing up some tech student issues about web development
    - +10 new developers (women) formed and inserted into the industry`,
  },
];

const hackingPath = [
  {
    role: "journeylog.app",
    details: `Habit tracker app | 2025`,
    description: `-> React, Next.js, Supabase, Deno, TailwindCSS, Serverless functions, Figma and Vercel`,
    link: `https://www.journeylog.app/`,
  },
  {
    role: "murphy.js",
    details: `A scroll based animation library | 2022`,
    description: `-> VanillaJS, Intersection Observer API, Web Animations API and Nextra`,
    link: `https://www.murphyjs.org/`,
  },
];

const quickActionList = [
  {
    text: "Copy link",
    nick: "c",
    icon: <FiCopy />,
    type: 1,
    textToCopy: "https://cesarolvr.com",
  },
  {
    text: "Download CV",
    nick: "d",
    icon: <FiDownload />,
    target: cesarolvrCV,
  },
  {
    text: "Know my career",
    nick: "k",
    icon: <FiAward />,
    target: "https://www.linkedin.com/in/cesarolvr/",
  },
  {
    text: "See my github",
    nick: "g",
    icon: <FiGithub />,
    target: "https://github.com/cesarolvr/",
  },
  {
    text: "Book a meeting",
    nick: "b",
    icon: <FiCalendar />,
    target: "https://meet.google.com/",
  },
  {
    text: "Send an email",
    nick: "e",
    icon: <FiMail />,
    target: "mailto:contact@cesarolvr.com",
  },
  {
    text: "Follow me on instagram",
    nick: "g",
    icon: <FiInstagram />,
    target: "https://www.instagram.com/cesarolvr/",
  },
  {
    text: "See my current readings",
    nick: "r",
    icon: <FiBook />,
    target: "https://goodreads.com/cesarolvr",
  },
  {
    text: "View source code",
    nick: "r",
    icon: <FiCoffee />,
    target: "https://github.com/cesarolvr/cesarolvr-www",
  },
];

export {
  bioDescription,
  careerPath,
  academyPath,
  quickActionList,
  openSourcePath,
  volunteeringPath,
  hackingPath,
};
