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
import UpdateCourse from "./components/UpdateCourse";
import UserSignOut from "./components/UserSignOut";
import UnhandledError from "./components/UnhandledError";


export default class App extends Component {


	render() {
		return (
			<BrowserRouter>
				<Header />

				<Switch>
					<Route exact path="/" component={Courses} />
					<Route exact path="/courses/create" component={CreateCourse} />
					<Route exact path="/courses/:id" component={CourseDetail} />
					<Route exact path="/courses/:id/update" component={UpdateCourse} />
					<Route exact path="/signin" component={UserSignIn} />
					<Route exact path="/signup" component={UserSignUp} />
					<Route exact path="/signout" component={UserSignOut} />

					<Route exact path="/error" component={UnhandledError} />

					{/* Route for 404 error */}
					<Route component={NotFound} />
					
				</Switch>
			</BrowserRouter>
    );
	}
}
