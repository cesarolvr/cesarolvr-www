import * as React from "react";

// Components
import Header from "../components/Header";
import Container from "../components/Container";
import Footer from "../components/Footer";

// Styles
import "../styles/global.scss";

const IndexPage = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <h1 className="banner-title">cesar oliveira</h1>
          <h2 className="banner-subtitle">
            tech lead at <a href="https://itau.com.br">Itaú</a>
          </h2>
          <p className="banner-description">
            and having fun creating cool digital experiences
          </p>
          <div className="banner-control">
            <p>command</p>
            <p>+</p>
            <p>P</p>
            <p>👀</p>
          </div>

        </Container>
      </main>
      <Footer />
    </>
  );
};

export default IndexPage;

export const Head = () => <title>cesarolvr.com</title>;
