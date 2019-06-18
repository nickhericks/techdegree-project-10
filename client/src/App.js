import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

export default class App extends Component {

  constructor() {
		super();
		this.state = {
			gifs: [],
			loading: true,
			courses: []
		};
	} 


	componentDidMount() {
		fetch("http://localhost:5000/api/courses")
		.then(response => response.json())
		.then(responseData => {
			console.log(responseData);
			this.setState({ courses: responseData.courses });
			console.log(this.state.courses);
		})
		.catch(error =>
			console.log("Error fetching or parsing data", error)	
		);
	}




	render() {
		console.log(this.state.courses);
	
		// const numbers = this.state.courses;

		// const listItems = numbers.map( (number, index) => <li key={index}>{number}</li>);

		const currentCourses = this.state.courses.map( (course, index) => (
			<li key={index}>{course.title}</li>
		));

		return (
			<div className="App">
				<header className="App-header">
					<p>
						Edit <code>src/App.js</code> and save to reload.
					</p>
					<ul>
						{currentCourses}
					</ul>

				</header>
			</div>
		);
	}
}

// export default App;
