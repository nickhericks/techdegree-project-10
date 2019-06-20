import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Import components
import Header from './components/Header';
import Courses from './components/Courses';
import CourseDetail from './components/CourseDetail';
import NotFound from './components/NotFound';
import UserSignIn from "./components/UserSignIn";
import UserSignUp from "./components/UserSignUp";
import CreateCourse from "./components/CreateCourse";
// import UpdateCourse from "./components/UpdateCourse";
// import UserSignOut from "./components/UserSignOut";


export default class App extends Component {
  constructor() {
		super();
		this.state = {
			signedIn: false,
			username: '',
			password: ''
		};
	} 


	// componentDidMount() {
	// 	fetch("http://localhost:5000/api/courses")
	// 	.then(response => response.json())
	// 	.then(responseData => {
	// 		this.setState({ courses: responseData.courses });
	// 		console.log(this.state.courses);
	// 	})
	// 	.catch(error =>
	// 		console.log("Error fetching or parsing data", error)	
	// 	);
	// }


	render() {
		// console.log(this.state.signedIn);
	

		return (
      <BrowserRouter>
        <Header />

        <Switch>
          <Route exact path="/" render={() => <Courses />} />
          {/* 						
						<Route exact path="/dogs" render={ () =>
							(this.state.loading) 
							? <p>Loading...</p>
							: <Gallery pictures={this.state.dogResults} query='dogs' />
						} />
						<Route exact path="/sunset" render={ () =>
							(this.state.loading) 
							? <p>Loading...</p>
							: <Gallery pictures={this.state.sunsetResults} query='sunset' />
						} /> */}

          {/* Route for course details */}
          <Route exact path="/courses/create" component={CreateCourse} />

          {/* Route for course details */}
          <Route exact path="/courses/:id" component={CourseDetail} />

          {/* Route for user sign in */}
          <Route exact path="/signin" component={UserSignIn} />

          {/* Route for user sign up */}
          <Route exact path="/signup" component={UserSignUp} />

          {/* Route for 404 error */}
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
	}
}
