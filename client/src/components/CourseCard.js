import React from "react";
import { NavLink } from "react-router-dom";

const CourseCard = ({ id, title }) => {
  return (
    <li className="course-card" key={id}>
      <NavLink to={`/courses/${id}`}>
        <div className="">Course</div>
        <div className="course-card-title">{title}</div>
      </NavLink>
    </li>
  );
};

export default CourseCard;
