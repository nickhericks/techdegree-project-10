import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

// Import components
import CourseCard from "./CourseCard";
// import NoCourses from "./NoCourses";




export default class Courses extends Component {

  constructor() {
		super();
		this.state = {
			courses: []
		};
	} 


	componentDidMount() {
		fetch("http://localhost:5000/api/courses")
		.then(response => response.json())
		.then(responseData => {
			this.setState({ courses: responseData.courses });
			console.log(this.state.courses);
		})
		.catch(error =>
			console.log("Error fetching or parsing data", error)	
		);
	}



	render() {
		console.log(this.state.courses);
	
		// const currentCourses = this.state.courses.map( (course, index) => (
		// 	<li key={index}>{course.title}</li>
		// ));


		let currentCourses;
		// If array is not empty, iterate over it
		if (this.state.courses.length > 0) {
			currentCourses = this.state.courses.map( (course, index) => (
				<CourseCard
					id={course.id}
					key={index}
					title={course.title}
				/>
			));
		} else {
			// If array is empty, display NoPics component
			currentCourses = <li><p>"Nothing to see here"</p></li>;
		}

		return (
      <div className="photo-container">
        {/* Render images */}
        <ul className="course-list">
          {currentCourses}

          <li className="course-card" id="new-course-card">
            <NavLink to={`/courses/new`}>
              <div className="new-course-card-title">+ Add New Course</div>
            </NavLink>
          </li>
        </ul>
      </div>
    );
	}
};