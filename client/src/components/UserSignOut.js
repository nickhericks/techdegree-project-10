import React from "react";
import { Redirect } from "react-router-dom";


const UserSignOut = props => {

	console.log(`Signing out`);

	// TODO: sign out authenticated user when route is requested from Header component

	



  return (
		<Redirect to='/' />
  );
};

export default UserSignOut;
