import React from "react";
import { NavLink } from "react-router-dom";

// Component for 404 errors
const NotFound = () => {
  return (
    <div>
      <h3>The page your requested does not exist</h3>
      <NavLink to={`/`}>
        <div className="">Return to home page</div>
      </NavLink>
    </div>
  );
};

export default NotFound;
