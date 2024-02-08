import * as React from "react";

// Styles
import "./index.scss";

// Components
import Copied from "../Copied";
import Modal from "../Modal";

// Contexts
export const State = React.createContext(false);

const Layout = ({ children }) => {
  const [modalIsOpened, setModalIsOpened] = React.useState(false);
  const [copied, setCopied] = React.useState(false);

  return (
    <State.Provider
      value={{
        modalIsOpened,
        copied,
        setModalIsOpened,
        setCopied,
      }}
    >
      <div className={`layout`}>
        <>
          {children}
          <Modal
            modalIsOpened={modalIsOpened}
            setModalIsOpened={setModalIsOpened}
            copied={copied}
            setCopied={setCopied}
          />
          {copied && <Copied />}
        </>
      </div>
      
    </State.Provider>
  );
};

export default Layout;
