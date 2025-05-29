import * as React from "react";

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
              <p className="mb-3 text-[80px]">🚀</p>
              <h3 className="about-title text-[35px] md:text-[50px] mb-4 font-black w-full md:mt-0 leading-[60px]">
                001. Starting...
              </h3>
              <time datetime="2013-02-03" className="text-[18px] text-[#bbb]">
                February 3, 2013
              </time>
            </header>
            <br />
            <br />
            <div className="text-[var(--color-total)] max-w-full w-full mb-16 px-[5%] leading-[50px] text-[26px]">
              <section class="intro-text">
                <p>
                  Today, February 3, 2013, marks the beginning of my career in
                  technology.
                </p>
                <br />
                <p>
                  I have just started learning programming and will document
                  everything here. My primary intention is to log this journey
                  for my future self. Additionally, this text may help someone
                  in the future who is going through the same steps as I am.
                </p>
                <br />
                <p>
                  All texts here will be <strong>pragmatic</strong>,{" "}
                  <strong>simple</strong>, and possibly <strong>written in the
                  past first person</strong>, as if I were writing for
                  my future self.
                </p>
                <br />
                <p>
                  All posts will include <strong>TLDR lists</strong> as a
                  summary at the beginning, <strong>graph and charts</strong>{" "}
                  when relevant, <strong>images</strong>, <strong>draws</strong>
                  , along with personal opinions (sometimes completely
                  incorrect).
                </p>
                <br />
                <p>
                  I am not yet sure what will happen or which path I will
                  choose. However, making a prediction, this blog probably will
                  focus on: <strong>software development</strong> in general,{" "}
                  <strong>algorithms</strong>, specific
                  technologies like <strong>languages, libs or frameworks</strong>, <strong>career-related topics</strong>,{" "}
                  <strong>game development</strong> and <strong>web
                  development</strong>,
                </p>
                <br />
                <p>Hope you comeback.</p>
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

export const Head = () => <title>001. Starting... | cesarolvr</title>;
