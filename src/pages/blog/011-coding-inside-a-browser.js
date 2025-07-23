import * as React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";

// Components
import Header from "../../components/Header";
import Note from "../../components/Note";
import Loader from "../../components/Loader";
import Cursor from "../../components/Cursor";

// Styles
import "../../styles/global.scss";

const Post = () => {
  const [isOpened, setIsOpened] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setIsOpened(false);
    }, 800);
  }, []);

  return (
    <>
      <Cursor />
      <div className="post">
        <Loader isOpened={isOpened} duration={0.5} />
        <Header goBackToHome={true} disableScramble={true} />
        <main className="flex flex-col mb-10 max-w-[900px]">
          <article class="blog-intro">
            <header className="px-[5%] mb-4">
              <p className="mb-3 text-[80px]">🌐</p>
              <h3 className="about-title text-[35px] md:text-[50px] mb-5 font-black w-full leading-[60px] md:mt-0">
                Coding inside a browser?
              </h3>
              <time datetime="2015-06-15" className="text-[18px] text-[#bbb]">
                June 15, 2015
              </time>
            </header>
            <br />
            <br />
            <div className="text-[var(--color-total)] max-w-full w-full mb-16 px-[5%] leading-[50px] text-[26px]">
              <section class="tldr text-[25px] leading-[45px]">
                <p className="mb-4">
                  <strong>TL;DR</strong>
                </p>

                <ul className="list-disc pl-8">
                  <li className="mb-4">
                    My journey from desktop apps to web development
                  </li>
                  <li className="mb-4">
                    Discovering JavaScript and falling in love with web
                    technologies
                  </li>
                  <li className="mb-4">
                    From Visual Basic and Java to HTML, CSS, and Vanilla JS
                  </li>
                  <li className="mb-4">
                    How web development changed my perspective and skills
                  </li>
                </ul>
                <br />
              </section>
              <section class="intro-text">
                <p className="mb-4">
                  Writing this in June 2015, looking back at my journey so far
                  and getting excited about my last semester. It's crazy how
                  things change when you least expect them to.
                </p>
                <br />
                <p className="mb-4">
                  My experience until now has been all about desktop
                  applications. I was comfortable in my little bubble of Visual
                  Basic on Windows, creating Java apps locally for desktop
                  environments. No CI/CD, no remote configurations, no worries
                  about production environments.
                </p>
                <br />
                <p className="mb-4">
                  I used to ask myself: "What's the difference between coding
                  and how this app will behave in production?" Back then, it was
                  simple, you code it, you run it locally, and that's it. My
                  routine was Java, MySQL, Linux, local networks to play
                  Counter-Strike, and UML diagrams. Pretty straightforward.
                </p>
                <br />
                <p className="mb-4">
                  Then came the challenge: we had to complete our final project
                  (TCC) in a web environment. The funny thing is, our teacher
                  wasn't really adapted to the web boom that happened after
                  Node.js in 2009. So we were basically on our own, trying to
                  figure out this whole web development thing.
                </p>
                <br />
                <p className="mb-4">
                  During the vacation (December 2014 - January 2015), I decided
                  to take matters into my own hands. I bought and read this
                  book:{" "}
                  <a
                    href="https://www.amazon.com.br/JavaScript-JQuery-Interactive-Front-End-Development/dp/1118871650"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    JavaScript & jQuery: Interactive Front-End Web Development
                  </a>
                  .
                </p>
                <br />
                <p className="mb-4">
                  And then something magical happened. It all started making
                  sense to me! All those patterns I had been learning during the
                  first and second year - OOP, functional programming,
                  readability, separation of concerns - suddenly transformed
                  into something coherent in my mind. It was like all the pieces
                  of the puzzle finally fit together.
                </p>
                <br />
                <p className="mb-4">
                  Around the same time, I discovered the{" "}
                  <a
                    href="https://abduzeedo.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Abduzeedo website
                  </a>
                  . This was a game-changer because I found something that
                  combined design and programming at the same time. Until then,
                  everything I had built was using the ugly JOptionPane. But
                  suddenly, I could write code AND build pretty user interfaces!
                </p>
                <br />
                <p className="mb-4">
                  I fell in love with JavaScript, HTML, and CSS. It was like
                  discovering a whole new world. I learned how to create web
                  pages really fast with pure CSS, HTML, and Vanilla JavaScript.
                  I was consuming YouTube tutorials and online resources like
                  crazy, teaching myself everything I could.
                </p>
                <br />
                <p className="mb-4">
                  When I came back to school, something incredible happened. I
                  went from being one of the worst students to one of the best
                  ones. People started asking me to join their groups for the
                  final project. It was such a confidence boost!
                </p>
                <br />
                <p className="mb-4">
                  I really hope I can attend to everyone's expectations,
                  especially the teachers who have seen my evolution. It's
                  amazing how much you can grow when you find something that
                  truly excites you.
                </p>
                <br />
                <p className="mb-4">
                  Looking forward to my last semester with a completely
                  different perspective on programming. Who would have thought
                  that coding inside a browser could be so engaging?
                </p>
                <br />
                <p className="mb-4">See you.</p>
              </section>
            </div>
          </article>
        </main>
        <Note />
      </div>
    </>
  );
};

export default Post;

export const Head = () => (
  <>
    <title>Coding inside a browser? | cesarolvr</title>
    <meta
      name="description"
      content="My transition from desktop development to web development, discovering JavaScript and falling in love with web technologies."
    />
  </>
);
