import React, {Component} from 'react';
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";

export default class UserSignIn extends Component {
	
	// static propTypes = {
	// 	addPlayer: PropTypes.func
	// }

	emailAddress = React.createRef();
	password = React.createRef();


	handleSubmit = (e) => {
		e.preventDefault();
		console.log(this.emailAddress.current.value);
		console.log(this.password.current.value);
		// this.props.addPlayer(this.emailAddress.current.value);
		e.currentTarget.reset();
	}


	render() {
				
		return (
      <div className="middle-section">
        <h2>Sign In</h2>

        <form onSubmit={this.handleSubmit}>
          <div className="field-container">
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
          </div>

          <ul className="button-list">
            <li className="button primary">
                <input type="submit" value="Sign In" />
            </li>
            <li className="button secondary">
              <Link to={`/`}>
                <div className="button-text">
                  <span className="blue">Cancel</span>
                </div>
              </Link>
            </li>
          </ul>
        </form>

        <p>
          Don't have a user account?{" "}
          <span>
            <Link to={`/signup`}>
              <span>Click here</span>
            </Link>
          </span>{" "}
          to sign up!
        </p>
      </div>
    );
	}
}
