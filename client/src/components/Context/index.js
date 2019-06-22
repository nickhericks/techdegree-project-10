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
				console.log(response.data);
				let name = `${response.data.firstName} ${response.data.lastName}`;
				console.log(name);
				this.setState({
          signedIn: true,
          username: response.data.emailAddress,
          password: clientPassword,
					name: name,
					userId: response.data.id
        });
			})
			.catch(error => {
				console.log("No matching user", error);
				alert("No matching user", error);
				// TODO: update error handler here?
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
		console.log(`NAME: ${this.state.name}`);
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