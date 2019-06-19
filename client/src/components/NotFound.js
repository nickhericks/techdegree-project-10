import React from "react";
import { NavLink } from "react-router-dom";

// Component for 404 errors
const NotFound = () => {
  return (
    <div>
      <h1>Not Found</h1>
      <h3>Sorry! We could not find the page you're looking for.</h3>
      <NavLink to={`/`}>
        <div className="">Return to home page</div>
      </NavLink>
    </div>
  );
};

export default NotFound;
