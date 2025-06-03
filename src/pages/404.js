import * as React from "react";
import { Link } from "gatsby";

// Styles
import "../styles/notfound.scss";

// Components
import Loader from "../components/Loader";

const NotFound = () => {
  return (
    <div className="not-found">
      <Loader isOpened={true} linkBack={true} limit={404} numberSize="!text-[100px]" />
      <Link to="/">go back to cesarolvr.com</Link>
    </div>
  );
};

export const Head = () => <title>Nothing here | cesarolvr</title>;

export default NotFound;
