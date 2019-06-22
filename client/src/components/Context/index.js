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

	handleSignIn = () => {
		console.log(`handleSignIn is running`);
	}

	handleSignOut = () => {
		console.log(`handleSignOut is running!`);
	}


  render() {
    return (
      <CoursesContext.Provider value={{
				username: this.state.username,
				password: this.state.password,
				actions: {
					addPlayer: this.handleAddPlayer,
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