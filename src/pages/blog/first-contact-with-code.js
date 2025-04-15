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
              <p className="mb-3 text-[80px]">💻</p>
              <h3 className="about-title text-[35px] md:text-[50px] mb-5 font-black w-full leading-[60px] md:mt-0">
                First contact with code
              </h3>
              <time datetime="2013-03-03" className="text-[18px] text-[#bbb]">
                April 5, 2013
              </time>
            </header>
            <br />
            <br />
            <div className="text-[#fff] max-w-full w-full mb-16 px-[5%] leading-[50px] text-[26px]">
              <section class="intro-text">
                <p>
                  Today marks one month since I started studying programming.
                </p>
                <br />
                <p>
                  Everything has been quite challenging, and it seems that I am not well-suited for this course.
                </p>
                <br />
                <p>
                  As context, my mother forced me that I enroll in this public technical school in our state. 
                  This decision will help reduce expenses and, of course, assist me in entering the job market. 
                  She chose the course for me: <strong>Computing</strong>, and it's weird because I didn't even have a computer at home.
                  So I entered the course completely raw.
                </p>
                <br />
                <p>
                  This school combines traditional high school subjects with specialized computer science courses. 
                  Consequently, in addition to physics, chemistry, and mathematics, the curriculum also includes{" "}
                  <strong>computer fundamentals</strong>, <strong>database modeling</strong>,{" "}
                  <strong>networks</strong>, <strong>robotics</strong>,{" "}
                  <strong>programming logic</strong>, <strong>programming languages</strong>,{" "}
                  <strong>algorithms and data structures</strong>, among others.
                </p>
                <br />
                <p>
                  I am lucky to have friends who are already "indie hackers" and are well-versed in technology, 
                  which allows them to assist me.
                </p>
                <br />
                <p>
                  I don't think this is the right fit for me, but I will continue since I don't have the time 
                  to pivot and explore other areas.
                </p>
                <br />
                <p>
                  I will continue studying, even if I do not fully understand the whole and the purpose of programming.
                </p>
                <br />
                <p>
                  Wish me luck!
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

export const Head = () => <title>First Contact with Programming | cesarolvr</title>;
