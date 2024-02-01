import * as React from "react";

// Styles
import "./index.scss";
import Modal from "../Modal";

const Layout = ({ children, page, modalIsOpened }) => {
  return (
    <div className={`layout ${page}`}>
      <>
        {children}
        <Modal isOpened={modalIsOpened} />
      </>
    </div>
  );
};

export default Layout;
