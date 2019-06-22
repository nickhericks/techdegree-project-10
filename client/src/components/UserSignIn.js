import React, {Component} from 'react';
import { Link } from "react-router-dom";
import { Consumer } from "./Context";


export default class UserSignIn extends Component {
	

	emailAddress = React.createRef();
	password = React.createRef();


	render() {
				
		return (
			<Consumer>
				{ ({ actions }) => {


					const handleSubmit = e => {
						e.preventDefault();
						console.log(this.emailAddress.current.value);
						console.log(this.password.current.value);
						actions.signIn(
              this.emailAddress.current.value,
              this.password.current.value
            );
						e.currentTarget.reset();
					};

					return (
						<div className="middle-section">
							<h2>Sign In</h2>

							<form onSubmit={handleSubmit}>
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
				}}
			</Consumer>
    );
	}
}
