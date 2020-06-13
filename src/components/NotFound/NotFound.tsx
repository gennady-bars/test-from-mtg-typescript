import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>Page not Found</h1>
      <span>Please, go to </span>
      <Link to="/">HomePage</Link>
    </div>
  );
};

export default NotFound;
