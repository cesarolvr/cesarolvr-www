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
              <p className="mb-3 text-[80px]">🗼</p>
              <h3 className="about-title text-[35px] md:text-[50px] mb-5 font-black w-full leading-[60px] md:mt-0">
                The analogy of the tower of Hanoi to programming
              </h3>
              <time datetime="2013-03-03" className="text-[18px] text-[#bbb]">
                June 10, 2013
              </time>
            </header>
            <br />
            <br />
            <div className="text-[#fff] max-w-full w-full mb-16 px-[5%] leading-[50px] text-[26px]">
              <section class="intro-text">
                <p>
                  Last week, my math teacher, who is also my logic teacher,
                  explained to me how computers follow instructions sequentially
                  using the analogy of the Tower of Hanoi.
                </p>
                <br />
                <p>
                  Finally, I adopted a mindset that allowed me to behave as if I
                  were explaining something to a kid, and walkingtrhoung slowly,
                  step by step.
                </p>
                <br />
                <p>Let's see:</p>
                <br />
                <br />
                <p>Now in Golang:</p>
                <br />
                <p>
                  Our routine is already quite abstract, making it difficult to
                  simplify things and approach them step by step. Ultimately, to
                  paraphrase her:
                  <blockquote>
                    "The computer is simply faster than you, not smarter"
                  </blockquote>
                </p>
                <br />
                <br />
                <p>Keep going...</p>
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
  <title>First Contact with Programming | cesarolvr</title>
);
