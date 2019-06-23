import React, { Component } from "react";
import axios from 'axios';
const CoursesContext = React.createContext();

// export const Provider = CoursesContext.Provider;
// export const Consumer = CoursesContext.Consumer;


export class Provider extends Component {

	constructor() {
		super();
		this.state = {
			signedIn: false,
			username: '',
			password: '',
			name: '',
			userId: null
		};
	} 

	handleSignIn = (clientUsername, clientPassword, props) => {

		// TODO: Add fetch request, with a .then statement if user exists, .catch if not

		// console.log(clientUsername);
		// console.log(clientPassword);

		axios({
			method: 'get',
			url: 'http://localhost:5000/api/users',
			responseType: 'json',
			auth: {
				username: clientUsername,
				password: clientPassword
			}
		})
			.then( response => {
				let user = response.data;
				let fullName = `${user.firstName} ${user.lastName}`;
				this.setState({
          signedIn: true,
          username: user.emailAddress,
          password: clientPassword,
          name: fullName,
          userId: user.id
        });
			})
			.catch(error => {
				// TODO: update error handler here?
				console.log(error.response.data);
				console.log(error.response.status);
				console.log(error.response.headers);
				if (error.response.status = 401) {
					const { history } = props;
					history.push("/error");
				}
				
			});
		// Send user back to previous page upon successful login
		const { history, location } = props;
		// const path = location.state ? location.state.prevLocation : '/';
		history.push('/');
	}


	handleSignOut = () => {
		console.log(`Signing user OUT`);
		this.setState({
      signedIn: false,
      username: "",
      password: "",
			name: "",
			userId: null
    });
	}


  render() {

		console.log(`CONTEXT STATE`);
		console.log(`SIGNED IN: ${this.state.signedIn}`);
		console.log(`USERNAME: ${this.state.username}`);
		console.log(`PASSWORD: ${this.state.password}`);
		console.log(`FULL NAME: ${this.state.name}`);
		console.log(`USER ID: ${this.state.userId}`);


    return (
      <CoursesContext.Provider
        value={{
          signedIn: this.state.signedIn,
          username: this.state.username,
          password: this.state.password,
          name: this.state.name,
          userId: this.state.userId,
          actions: {
            signIn: this.handleSignIn,
            signOut: this.handleSignOut
          }
        }}
      >
        {this.props.children}
      </CoursesContext.Provider>
    );
  }  
}

export const Consumer = CoursesContext.Consumer;