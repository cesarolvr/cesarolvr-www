import React from "react";

import Layout from "./src/components/Layout";
import Cursor from "./src/components/Cursor";

export const wrapPageElement = ({ element, props }) => {
  const { path } = props;
  return <Layout path={path}>{element}<Cursor /></Layout>;
};
