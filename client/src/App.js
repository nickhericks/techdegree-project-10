import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

export default class App extends Component {

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
	
		const currentCourses = this.state.courses.map( (course, index) => (
			<li key={index}>{course.title}</li>
		));

		return (
			<div className="App">
				<header className="App-header">

					<ul>
						{ currentCourses }
					</ul>

				</header>
			</div>
		);
	}
}
