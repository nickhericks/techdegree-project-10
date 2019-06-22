import React, { Component } from "react";
const CoursesContext = React.createContext();

// export const Provider = CoursesContext.Provider;
// export const Consumer = CoursesContext.Consumer;


export class Provider extends Component {

	constructor() {
		super();
		this.state = {
			signedIn: false,
			username: '',
			password: ''
		};
	} 

	handleSignIn = (clientUsername, clientPassword) => {
		console.log(`Signing user IN`);
		this.setState({
			username: clientUsername,
			password: clientPassword,
			signedIn: true
		});
	}

	handleSignOut = () => {
		console.log(`Signing user OUT`);
		this.setState({
			username: '',
			password: '',
			signedIn: false
		});
	}


  render() {


		console.log(`CONTEXT STATE`);
		console.log(`User signed in: ${this.state.signedIn}`);
		console.log(`Username: ${this.state.username}`);
		console.log(`Password: ${this.state.password}`);


    return (
      <CoursesContext.Provider value={{
				username: this.state.username,
				password: this.state.password,
				actions: {
					signIn: this.handleSignIn,
					signOut: this.handleSignOut
				}
      }}>
        { this.props.children }
      </CoursesContext.Provider>
    );
  }  
}

export const Consumer = CoursesContext.Consumer;