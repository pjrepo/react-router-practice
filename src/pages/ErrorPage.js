import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <React.Fragment>
      <h1>404</h1>
      <h2>Page not found......</h2>
      <Link to="/">Back Home</Link>
    </React.Fragment>
  );
};

export default ErrorPage;
