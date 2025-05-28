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
        <Loader isOpened={isOpened} duration={1} />
        <Header hideShortcut />
        <main>
          <h1 className="banner-title font-black">
            Cesar <br /> Oliveira
          </h1>
          <p className="banner-description">
            A Front-end Engineer having fun crafting cool digital experiences
          </p>
          <Shortcut text="to start" />

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
                          post.active ? "" : "-link-blocked cursor-not-allowed pointer-events-none"
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
