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
			password: '',
			user: ''
		};
	} 

	handleSignIn = (clientUsername, clientPassword, props) => {
		console.log(`Signing user IN`);
		this.setState({
			signedIn: true,
			username: clientUsername,
			password: clientPassword,
			// TODO: add user data from response object after checking database for authorized user
			user: '___________'
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
			username: '',
			password: '',
			user: ''
		});
	}


  render() {


		console.log(`CONTEXT STATE`);
		console.log(`SIGNED IN: ${this.state.signedIn}`);
		console.log(`USERNAME: ${this.state.username}`);
		console.log(`PASSWORD: ${this.state.password}`);
		console.log(`USER: ${this.state.user}`);


    return (
      <CoursesContext.Provider value={{
				signedIn: this.state.signedIn,
				username: this.state.username,
				password: this.state.password,
				user: this.state.user,
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