import * as React from "react";
import { Link } from "gatsby";

const NotFound = () => {
  return (
    <div className="not-found">
      <p>404</p>
      <Link to="/">go back to home</Link>
    </div>
  );
};

export default NotFound;
