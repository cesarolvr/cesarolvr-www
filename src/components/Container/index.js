import * as React from "react";

const containerStyles = {
  maxWidth: "930px",
  width: "90vw",
  margin: "auto",
};

const Container = ({ children }) => {
  return <div style={containerStyles}>{children}</div>;
};

export default Container;
