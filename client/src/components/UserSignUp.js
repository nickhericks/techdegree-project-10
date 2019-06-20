import React, { Component } from "react";
import { NavLink } from "react-router-dom";
// import PropTypes from "prop-types";

export default class UserSignUp extends Component {
  // static propTypes = {
  // 	addPlayer: PropTypes.func
  // }

  firstName = React.createRef();
  lastName = React.createRef();
  emailAddress = React.createRef();
  password = React.createRef();
  passwordConf = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.firstName.current.value);
    console.log(this.lastName.current.value);
    console.log(this.emailAddress.current.value);
    console.log(this.password.current.value);
    console.log(this.passwordConf.current.value);
    // this.props.addPlayer(this.emailAddress.current.value);
    e.currentTarget.reset();
  };

  render() {
    return (
      <div className="middle-section">
        <h2>Sign Up</h2>

        <form onSubmit={this.handleSubmit}>
          <div className="field-container">
            <input
              type="text"
              ref={this.firstName}
              placeholder="First Name"
            />
            <input
              type="text"
              ref={this.lastName}
              placeholder="Last Name"
            />
            <input
              type="text"
              ref={this.emailAddress}
              placeholder="Email Address"
            />
            <input
              type="text"
              ref={this.password}
              placeholder="Password"
            />
            <input
              type="text"
              ref={this.passwordConf}
              placeholder="Confirm Password"
            />
          </div>

          <ul className="button-list">
            <li className="button primary">
              <input type="submit" value="Sign Up" />
            </li>
            <li className="button secondary">
              <NavLink to={`/`}>
                <div className="button-text">
                  <span className="blue">Cancel</span>
                </div>
              </NavLink>
            </li>
          </ul>
        </form>

        <p>
          Already have a user account?{" "}
          <span>
            <NavLink to={`/signin`}>
              <span>Click here</span>
            </NavLink>
          </span>{" "}
          to sign in!
        </p>
      </div>
    );
  }
}
