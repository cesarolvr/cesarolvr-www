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
          <h1 className="banner-title font-black">Cesar Oliveira</h1>
          <p className="banner-description">
            A Software Engineer having fun crafting cool digital experiences
          </p>
          <Shortcut text="to start" />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>cesarolvr</title>;
