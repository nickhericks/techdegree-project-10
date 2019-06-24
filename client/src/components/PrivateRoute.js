import React from "react";
import { Link } from "react-router-dom";
import { Consumer } from "./Context";

const Header = () => {
  return (
    <Consumer>
      {({ signedIn, name }) => {


        let linkOne = signedIn ? "" : "/signup";
        let linkTwo = signedIn ? "/signout" : "/signin";
        let textOne = signedIn ? `Welcome, ${name}` : "Sign Up";
        let textTwo = signedIn ? "Sign Out" : "Sign In";




        return (
          <header>
            <div className="container header-container">
              <h1>Courses</h1>
              <nav className="main-nav">
                <ul>
                  <li>
                    <Link to={linkOne}>{textOne}</Link>
                  </li>
                  <li>
                    <Link to={linkTwo}>{textTwo}</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
        );
      }}
    </Consumer>
  );
};

export default Header;
