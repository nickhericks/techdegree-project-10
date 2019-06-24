import React, { Component } from 'react';
import { Link } from "react-router-dom";

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
			// console.log(this.state.courses);
		})
		.catch(error =>
			console.log("Error fetching or parsing data", error)	
		);
	}



	render() {
	
		let currentCourses;
		// If array is not empty, iterate over it
		if (this.state.courses.length > 0) {
			currentCourses = this.state.courses.map( course => (
				<CourseCard
					id={course.id}
					key={course.id}
					title={course.title}
				/>
			));
			console.log(currentCourses);
		} else {
			// If array is empty, display NoPics component
			// currentCourses = "";
		}

		return (
      <div className="container">
        <ul className="course-list">
          {currentCourses}

          <li className="course-card" id="new-course-card">
            <Link to={`/courses/create`}>
              <div className="new-course-card-title">Add New Course</div>
            </Link>
          </li>
        </ul>
      </div>
    );
	}
};