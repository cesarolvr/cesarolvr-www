import * as React from "react";

// Components
import Header from "../components/Header";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Shortcut from "../components/Shortcut";
import Loader from "../components/Loader";
import Cursor from "../components/Cursor";

// Styles
import "../styles/global.scss";
import "../styles/index.scss";

// Content
import { articles } from "../data/blog";
import Avatar from "../components/Avatar";

const IndexPage = () => {
  const [isOpened, setIsOpened] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsOpened(false);
    }, 1500);
  }, []);

  return (
    <>
      <Cursor />
      <div className="home">
        {/* <Loader isOpened={isOpened} duration={1} /> */}
        <Header hideShortcut />
        <main>
          <div className="avatar-section">
            <Avatar />
          </div>
          <div className="w-[90svw] z-10 pt-[100px] pointer-events-none fixed flex justify-center items-center">
            <h1 className="banner-title flex flex-col items-end h-full text-right font-bold w-[300px] flex-shrink-0">
              Cesar
              <span >Oliveira</span>
            </h1>
            <span className="w-[420px]"> </span>
            <div className="banner-description w-[350px] pr-[30px] text-right flex-shrink-0 flex justify-end flex-col items-end">
              <p className="mb-9">A <strong className="text-white">Front-end Engineer</strong> having fun crafting digital experiences</p> 
              <Shortcut text="to start" />
            </div>
          </div>

          <p className="blog-ticker-title">Last posts ↓</p>
          <div className="blog-ticker">
            {articles.map((article, index) => {
              return (
                <div
                  className="blog-ticker-wrapper"
                  key={`${article.id}-${index}`}
                >
                  {article.posts.map((post, index) => {
                    return (
                      <a
                        key={`${post.id}-${index}`}
                        href={post.link}
                        disabled={!post.active}
                        className={`blog-ticker-item ${
                          post.active
                            ? ""
                            : "-link-blocked cursor-not-allowed pointer-events-none"
                        }`}
                        title={post.active ? "Read now" : "Coming soon"}
                      >
                        <span className="emoji">{post.emoji}</span>
                        <h3>{post.title} -></h3>
                      </a>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>cesarolvr</title>;
