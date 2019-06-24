import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Consumer } from "./Context";

const PrivateRoute = ({ component: Component, path }) => {
  return (
		<Route 
			path={path}
			render={() => (
				<Consumer>
					{ ({ signedIn }) => (

						signedIn ? (

							<Component />

						) : (

							<Redirect to={{
								pathname: '/signin',
								state: {prevLocation: path}
							}} 
							/>
						)


					)}
				</Consumer>
			)}
		/>
  );
};

export default PrivateRoute;
