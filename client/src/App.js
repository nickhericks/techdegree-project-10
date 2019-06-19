import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

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
		console.log(this.state.signedIn);
	

		return (
      <BrowserRouter>
        <Header />

        <div className="app-container">

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

            {/* Route for search queries */}
            {/* <Route path="/search/:topic" render={ () =>
							(this.state.loading) 
							? <p>Loading...</p>
							: <Gallery pictures={this.state.results} query={this.state.searchTerm} />
						} /> */}

            {/* Route for 404 error */}
            <Route component={NotFound} />
          </Switch>

        </div>
      </BrowserRouter>
    );
	}
}
