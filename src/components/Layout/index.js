import * as React from "react";

// Styles
import "./index.scss";
import Modal from "../Modal";

// Contexts
export const State = React.createContext(false);

const Layout = ({ children }) => {
  const [modalIsOpened, setModalIsOpened] = React.useState(false);

  return (
    <State.Provider
      value={{
        modalIsOpened,
        setModalIsOpened,
      }}
    >
      <div className={`layout`}>
        <>
          {children}
          <Modal
            modalIsOpened={modalIsOpened}
            setModalIsOpened={setModalIsOpened}
          />
        </>
      </div>
    </State.Provider>
  );
};

export default Layout;
