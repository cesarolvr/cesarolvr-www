import * as React from "react";

// Components
import Header from "../components/Header";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Shortcut from "../components/Shortcut";

// Styles
import "../styles/global.scss";
import "./index.scss";

const IndexPage = () => {
  return (
    <>
      <Header hideShortcut />
      <main className="home">
        <Container>
          <h1 className="banner-title">cesar oliveira</h1>
          <h2 className="banner-subtitle">
            tech lead at <a href="https://itau.com.br">itaú</a>
          </h2>
          <p className="banner-description">
            and having fun creating cool digital experiences
          </p>
          <Shortcut text="to find what you are looking for" />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default IndexPage;

export const Head = () => <title>cesarolvr.com</title>;
