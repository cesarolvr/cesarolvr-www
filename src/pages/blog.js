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
import { bioDescription } from "../data";

// Styles
import "../styles/global.scss";

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

  const techArticles = [
    {
      id: "001",
      emoji: "🐢",
      title: "Embrace inefficiency",
      description:
        "An unknown printer took a galley of type and scrambled it to make a type specimen book.",
      readTime: "5 min read",
    },
    {
      id: "002",
      emoji: "🚀",
      title: "The future of JavaScript",
      description:
        "Exploring the upcoming features and improvements in the JavaScript language.",
      readTime: "8 min read",
    },
    {
      id: "003",
      emoji: "💡",
      title: "Creative coding techniques",
      description:
        "A deep dive into creative coding and how to make your projects stand out.",
      readTime: "7 min read",
    },
    {
      id: "004",
      emoji: "📚",
      title: "Study strategies for developers",
      description:
        "Effective study strategies to help you learn and retain programming concepts.",
      readTime: "6 min read",
    },
    {
      id: "005",
      emoji: "🧠",
      title: "Understanding algorithms",
      description:
        "Breaking down complex algorithms into simple, understandable steps.",
      readTime: "10 min read",
    },
  ];

  return (
    <>
      <Cursor />
      <div className="blog">
        <Loader isOpened={isOpened} duration={0.5} />
        <Header goBackToHome={true} />
        <main className="flex flex-col mb-10 max-w-full">
          <h3 className="about-title text-[50px] mb-6 font-black px-[5%] w-full mt-10 md:mt-0">
            Ideas. Opinions. Daydreams.
          </h3>
          <p className="paragraph md:w-[750px] mb-12 text-[20px] px-[5%] w-full">
            Written in first-person by me, to myself. You will find here a
            honest view of front-end, algorithms, creative development, study
            strategies and technical leadership.
          </p>
          <ul className="text-[18px] w-full">
            {techArticles.map((article) => (
              <li
                key={article.id}
                className="flex flex-col items-start group px-[5%] mb-10 pb-7 pt-2 w-full text-white hover:bg-[#fff]"
              >
                <div className="flex flex-row items-center mb-3 md:mb-0">
                  <p className="pl-0 md:pr-7 pr-5 md:pl-2 text-[54px]">
                    {article.emoji}
                  </p>
                  <p className="font-bold break-words text-[22px] md:text-[24px] group-hover:text-[#222]">
                    <span className="">{article.id}.</span> {article.title}
                  </p>
                </div>
                <div className="md:pl-[90px]">
                  <p className="text-[#777777] mb-4 text-[18px] group-hover:text-[#222] max-w-[700px] block">
                    {article.description}
                  </p>
                  <p className="text-[16px] group-hover:text-[#666] group-hover:hidden">
                    {article.readTime}
                  </p>
                  <p className="text-[16px] hidden group-hover:block group-hover:text-[#222] font-bold">
                    Read ->
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </main>
        <Note />
      </div>
    </>
  );
};

export default About;

export const Head = () => <title>Blog | cesarolvr</title>;
