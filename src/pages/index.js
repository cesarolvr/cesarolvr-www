import * as React from "react";

// Components
import Header from "../components/Header";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Shortcut from "../components/Shortcut";
import Loader from "../components/Loader";

// Styles
import "../styles/global.scss";
import "./index.scss";

const IndexPage = () => {
  const [isOpened, setIsOpened] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsOpened(false);
    }, 3000);
  }, []);

  return (
    <div className="home">
      <Loader isOpened={isOpened} />
      <Header hideShortcut />
      <main>
        <Container>
          <h1 className="banner-title">cesar oliveira</h1>
          <h2 className="banner-subtitle">
            tech lead at{" "}
            <a target="_blank" href="https://itau.com.br">
              itaú
            </a>
          </h2>
          <p className="banner-description">
            and having fun creating cool digital experiences
          </p>
          <Shortcut text="to find what you are looking for" onClick={f=>f} />
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>cesarolvr</title>;
