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
        <Header goBackToHome={true} />
        <main className="flex flex-col mb-10 max-w-[900px]">
          <article class="blog-intro">
            <header className="px-[5%] mb-4">
              <p className="mb-3 text-[80px]">🚗</p>
              <h3 className="about-title text-[35px] md:text-[50px] mb-5 font-black w-full leading-[60px] md:mt-0">
                The Boring Side of Modelling Databases
              </h3>
              <time datetime="2013-12-02" className="text-[18px] text-[#bbb]">
                December 02, 2013
              </time>
            </header>
            <br />
            <br />
            <div className="text-[#fff] max-w-full w-full mb-16 px-[5%] leading-[50px] text-[26px]">
              <section class="tldr text-[25px] leading-[45px]">
                <p className="mb-4">
                  <strong>TL;DR</strong>
                </p>

                <ul className="list-disc pl-8">
                  <li className="mb-4">
                    My attempt at breaking down a car into database tables
                  </li>
                  <li className="mb-4">
                    Trying to understand how different parts of a car relate to
                    each other
                  </li>
                  <li className="mb-4">
                    My confusion about normalization and why it's important
                  </li>
                  <li className="mb-4">
                    Learning that sometimes you just have to try things and see
                    what works
                  </li>
                </ul>
                <br />
              </section>
              <section class="intro-text">
                <p className="mb-4">
                  After my database modeling class, my teacher gave us a test
                  with a simple instruction: "model a car." No tips, no
                  examples, no guidance. I was completely lost, but here's what
                  I tried to figure out:
                </p>
                <p>
                  When I first started learning about database modeling, I found
                  it really confusing to translate real-world objects into
                  database structures. Let me share my attempt at understanding
                  this, using a car as our example. I'm not sure if this is the
                  right way, but it's what made sense to me.
                </p>
                <br />
                <p>
                  The first thing I tried to do was identify the basic
                  attributes of a car. I'm not sure if I got all of them, but
                  here's what I thought we might need to store:
                </p>
                <br />
                <SyntaxHighlighter
                  language="sql"
                  style={darcula}
                  className="my-4 overflow-scroll rounded-3xl"
                >
                  {`CREATE TABLE cars (
    id INT PRIMARY KEY,
    brand VARCHAR(50),
    model VARCHAR(50),
    year INT,
    color VARCHAR(20),
    price DECIMAL(10,2),
    version VARCHAR(50),
    wheels VARCHAR(50)
);`}
                </SyntaxHighlighter>
                <br />
                <p>
                  After that, I started wondering about related entities. This
                  is where I got really confused: A car seems like one thing,
                  but it's actually made up of lots of different parts. Does
                  this parts deserve a separate table? Why? What will happen if
                  we keep it in the same table? I don't get it.
                </p>
                <br />
                <p>She advised us to add more stuff:</p>
                <SyntaxHighlighter
                  language="sql"
                  style={darcula}
                  className="overflow-scroll rounded-3xl"
                >
                  {`CREATE TABLE cars (
    id INT PRIMARY KEY,
    brand VARCHAR(50),
    model VARCHAR(50),
    year INT,
    color VARCHAR(20),
    price DECIMAL(10,2),
    engine_id INT,
    wheels_id INT
);

CREATE TABLE engines (
    id INT PRIMARY KEY,
    type VARCHAR(50),
    horsepower INT,
    fuel_type VARCHAR(20)
);

CREATE TABLE wheels (
    id INT PRIMARY KEY,
    car_id INT,
    size VARCHAR(20),
    brand VARCHAR(50),
    condition VARCHAR(20)
    color VARCHAR(20),
);`}
                </SyntaxHighlighter>
                <br />
                <p>
                  I'm still trying to understand relationships between tables.
                  From what I can tell, in our car model, each car has one
                  engine (1-1 relationship?), but it can have multiple wheels
                  (1-N), and it can have different upgrades over time (also
                  1-N). Just folowing her instructions...
                </p>
                <br />
                <p>
                  As I was working on this, I started thinking about other
                  things we might need to track. Maybe things like car parts
                  inventory, service providers, insurance policies, or warranty
                  information? I'm not sure which of these are actually
                  important to include in the database. Maybe it could combine
                  more with sales department instead factory-wise concerns.
                </p>
                <br />
                <p>
                  One concept that really confused me was database
                  normalization. I think it's about organizing data efficiently
                  and maintaining data integrity, but I'm not sure I understand
                  it completely. From what I can tell, it involves getting rid
                  of duplicate data and making sure data dependencies make
                  sense, but it's still a gray area.
                </p>
                <br />
                <p>
                  I've tried to come up with some basic practices that make
                  sense to me. I start by trying to understand what information
                  we need to store, then I try to figure out how different
                  pieces relate to each other. I'm not sure about the
                  normalization rules, but I try to apply them where I think
                  they might fit. Apperently we have to think about how the
                  database might need to grow in the future, and we have to
                  prevent issues when it comes.
                </p>
                <br />
                <p>A lot of questions to ask her.</p>
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
  <title>006. The Boring Side of Modelling Databases | cesarolvr</title>
);
