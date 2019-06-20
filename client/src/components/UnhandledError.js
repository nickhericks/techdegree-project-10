import React from "react";
import { NavLink } from "react-router-dom";

// Component for letting the user know that
// they can't access the requested page.
const UnhandledError = () => {
  return (
    <div className="container">
      <h1>Error</h1>
      <h3>Sorry! We just encountered an unexpected error.</h3>
      <NavLink to={`/`}>
        <div className="">Return to home page</div>
      </NavLink>
    </div>
  );
};

export default NotFound;
