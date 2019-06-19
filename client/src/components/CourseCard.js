import React from "react";
import { NavLink } from "react-router-dom";

const CourseCard = ({ id, key, title }) => {
  return (
    <li className="course-card" key={key}>
      <NavLink to={`/courses/${id}`}>
        <div className="">Course</div>
        <div className="course-card-title">{title}{id}</div>
      </NavLink>
    </li>
  );
};

export default CourseCard;
