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
        <main className="flex flex-col mb-10 max-w-full">
          <p className="px-[5%] mb-3 text-[80px]">🐢</p>
          <h3 className="about-title px-[5%] text-[50px] mb-2 font-black w-full md:mt-0">
            Embrace inefficiency
          </h3>
          <div className="text-[#fff] max-w-full w-full px-[5%] leading-10 ">
            <p className=" mb-14 text-[20px] max-w-[750px] pr-10 w-full">
              Written in first-person by me, to myself. You will find here a
              honest view of front-end.
            </p>
            <p className="text-[#fff] mb-12 text-[20px] max-w-[750px] ">
              In a world that constantly pushes for speed and efficiency, it can
              be refreshing to take a step back and embrace inefficiency.
              Sometimes, the best ideas and solutions come from taking the long
              way around, allowing for creativity and innovation to flourish.
            </p>
            <blockquote className="text-[#fff] mb-12 text-[20px] max-w-[750px]  ">
              "Efficiency is doing things right; effectiveness is doing the
              right things." - Peter Drucker
            </blockquote>
            <p className="text-[#fff] mb-12 text-[20px] max-w-[750px]  ">
              Embracing inefficiency means allowing yourself the time to think,
              to ponder, and to explore different possibilities. It means not
              rushing to the quickest solution, but rather taking the time to
              find the best solution. This can lead to more thoughtful and
              well-rounded outcomes.
            </p>
            <ul className="list-disc pl-8 mb-12 text-[20px] max-w-[750px]">
              <li>Encourages creativity and innovation</li>
              <li>Leads to more thoughtful solutions</li>
              <li>Allows for personal growth and development</li>
            </ul>
            <p className="text-[#fff] mb-12 text-[20px] max-w-[750px]  ">
              So next time you find yourself in a rush, take a moment to slow
              down and embrace inefficiency. You might be surprised at the
              positive outcomes that can result from taking your time.
            </p>
          </div>
          <br />
          <br />
          <br />
          <br />

          <a href={""} className="px-[5%] text-[18px]">
            {'<- '} Back to blog
          </a>
          <br />
          <br />
          <br />
        </main>
        <Note />
      </div>
    </>
  );
};

export default Post;

export const Head = () => <title>Cesinha | cesarolvr</title>;
