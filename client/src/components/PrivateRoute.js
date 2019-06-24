import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Consumer } from "./Context";

const PrivateRoute = ({ component: Component, path }) => {
  return (
    <Route
      path={path}
      render={(props) => (
        <Consumer>
          {({ signedIn }) =>
            signedIn ? (
              <Component  {...props} />
            ) : (
              <Redirect
                to={{
                  pathname: "/signin",
									state: { previousPage: path }
                }}
              />
            )
          }
        </Consumer>
      )}
    />
  );
};

export default PrivateRoute;
