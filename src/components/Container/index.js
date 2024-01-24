import * as React from "react";

const containerStyles = {
  maxWidth: "930px",
  width: "90vw",
  margin: "auto",
};

const Container = ({ children }) => {
  return <div className="container" style={containerStyles}>{children}</div>;
};

export default Container;
