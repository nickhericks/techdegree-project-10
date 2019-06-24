import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Consumer } from "./Context";

const PrivateRoute = ({ component: Component, path }) => {
  return (
		<Route 
			path={path}
			render={() => (
				<Consumer>
					

				</Consumer>
			)}
		/>
  );
};

export default PrivateRoute;
