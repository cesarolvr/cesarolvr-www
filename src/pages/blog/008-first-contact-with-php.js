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
          <article className="blog-intro">
            <header className="px-[5%] mb-4">
              <p className="mb-3 text-[80px]">🐘</p>
              <h3 className="about-title text-[35px] md:text-[50px] mb-5 font-black w-full leading-[60px] md:mt-0">
                First contact with PHP
              </h3>
              <time datetime="2014-02-10" className="text-[18px] text-[#bbb]">
                March 20, 2014
              </time>
            </header>
            <br />
            <br />
            <div className="text-[var(--color-total)] max-w-full w-full mb-16 px-[5%] leading-[50px] text-[26px]">
              <section className="tldr text-[25px] leading-[45px]">
                <p className="mb-4">
                  <strong>TL;DR</strong>
                </p>

                <ul className="list-disc pl-8">
                  <li className="mb-4">
                    Starting to build a website for my teacher's cake business
                  </li>
                  <li className="mb-4">
                    Learning PHP as a server-side language for web applications
                  </li>
                  <li className="mb-4">
                    Setting up a local development server with PHP's built-in server
                  </li>
                  <li className="mb-4">
                    My first "Hello, World!" in PHP and understanding the basics
                  </li>
                </ul>
                <br />
              </section>
              <section className="intro-text">
                <p className="mb-4">
                  So, I'm trying to create a website for my teacher's cake business, and I decided to dive into PHP. The reason? I was told it's a good way to build web applications (like Facebook).
                </p>
                <br />
                <p className="mb-4">
                  I started by figuring out where this code should run. That simple question always guides me when I'm programming. Where, when, how many times, and why are important things to understand before diving into the code itself.
                </p>
                <br />
                <p className="mb-4">
                  Apparently, it runs inside a server. So, I had to set up a server and then put the code inside it to be interpreted.
                </p>
                <br />
                <p className="mb-4">
                  Of course, the first thing I did was try to get something, <em>anything</em>, to show up on the screen!
                </p>
                <br />
                <p className="mb-4">
                  To do that, I created a file named <code>index.php</code> with the following content:
                </p>
                <br />
                <SyntaxHighlighter
                  language="php"
                  style={darcula}
                  className="my-4 overflow-scroll rounded-3xl"
                >
                  {`<?php
echo "Hello, World!";
?>`}
                </SyntaxHighlighter>
                <br />
                <p className="mb-4">
                  <code>echo</code> is the command that tells PHP to output the text "Hello, World!" to the browser.
                </p>
                <br />
                <p className="mb-4">
                  I discovered PHP has a built-in web server for testing purposes. It's simpler than setting up a full server stack. You can start it with this command in your project directory:
                </p>
                <br />
                <SyntaxHighlighter
                  language="bash"
                  style={darcula}
                  className="my-4 overflow-scroll rounded-3xl"
                >
                  {`php -S localhost:8000`}
                </SyntaxHighlighter>
                <br />
                <p className="mb-4">
                  Then, you can access your site at <code>http://localhost:8000</code>.
                </p>
                <br />
                <p className="mb-4">
                  With this "Hello, World!", my plan now is to discover how to generate HTML with PHP so I can actually build a website for her.
                </p>
                <br />
                <p className="mb-4">
                  No idea how to put this website online and make it accessible from outside my computer.
                </p>
                <br />
                <p className="mb-4">
                  It's a start...
                </p>
              </section>
            </div>
            <br />
            <br />

            <a href={"/blog/"} className="px-[5%] text-[16px]">
              {"<- "} Back to blog
            </a>
            <br />
            <br />
            <br />
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
    <title>First contact with PHP - Cesar Oliveira</title>
    <meta name="description" content="My first steps into PHP development, setting up a local server and creating my first web application for a cake business." />
  </>
); 