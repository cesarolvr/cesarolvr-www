import React from "react";

import Layout from "./src/components/Layout";

export const wrapPageElement = ({ element, props }) => {
  
  const { path } = props;
  return <Layout path={path}>{element}</Layout>;
};
