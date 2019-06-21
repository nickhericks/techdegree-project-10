import React from "react";
import { Redirect } from "react-router-dom";


const UserSignOut = props => {

	console.log(`Signing out`);



  return (
		<Redirect to='/' />
  );
};

export default UserSignOut;
