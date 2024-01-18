import * as React from "react";

// Components
import Header from "../components/Header";
import Container from "../components/Container";

// Styles
import "../styles/global.scss";

const IndexPage = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <p>teste</p>
        </Container>
      </main>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
