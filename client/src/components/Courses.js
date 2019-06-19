import React, { Component } from 'react';

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
					// farm={pic.farm}
					// server={pic.server}
					id={course.id}
					// secret={pic.secret}
					key={index}
					title={course.title}
					// description={course.description}
				/>
			));
		} else {
			// If array is empty, display NoPics component
			currentCourses = <li><p>"Nothing to see here"</p></li>;
		}

		return (
			<div className="photo-container">

				{/* Render images */}
				<ul className="course-list">{currentCourses}</ul>
			</div>
		);
	}
};