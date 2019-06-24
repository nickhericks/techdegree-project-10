import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Consumer } from "./Context";
import axios from "axios";


export default class UserSignUp extends Component {

	  constructor() {
		super();
		this.state = {
			errors: [],
			errorAlerts: []
		};
	} 

  firstName = React.createRef();
  lastName = React.createRef();
  emailAddress = React.createRef();
  password = React.createRef();
  passwordConf = React.createRef();

  render() {
    return (
			<Consumer>
				{ ({ actions }) => {

					const handleSubmit = e => {
						e.preventDefault();

						this.setState({
							errors: [],
							errorAlerts: []
						});

						// Assign values to variables
						const userFirstName = this.firstName.current.value;
						const userLastName = this.lastName.current.value;
						const userEmailAddress = this.emailAddress.current.value;
						const userPassword = this.password.current.value;
						const userPasswordConf = this.passwordConf.current.value;

						// Check password and passwordConf match
						if (userPassword !== userPasswordConf) {
							console.log('Password value does not match Password Confirmation value');

							let passwordMatchValidation = <li className="validation-error" key="1000">'Password value does not match Password Confirmation value'</li>
							
							
							this.setState(prevState => ({
								errorAlerts: [
									...prevState.errorAlerts,
									[
										passwordMatchValidation
									]
								]
							}));


						} else {
							// send POST request to create new user
							axios({
								method: 'post',
								url: 'http://localhost:5000/api/users',
								data: {
									firstName: userFirstName,
									lastName: userLastName,
									emailAddress: userEmailAddress,
									password: userPassword
								}
							})
							.then( response => {
								// After user is created, sign in new user
								actions.signIn(
									userEmailAddress,
									userPassword,
									this.props
								);
							})
							.catch(error => {
								console.log(error.response.data);
								console.log(error.response.data.errors);
								
								if (error.response.status === 400) {
									// if multiple errors return, it is due to input validation
									if (error.response.data.errors) {
                    // update array of errors, use to display messages to user
                    let newErrors = error.response.data.errors;

										console.log(newErrors);

										this.setState({
											errors: newErrors
										});


										console.log(this.state.errors);
										console.log(this.state.errorAlerts);
										console.log(`Number of errors: ${this.state.errors.length}`);


										console.log(this.state.errors.length);

										let errorAlertMessages = this.state.errors.map(
                      (error, index) => (
                        <li className="validation-error" key={index}>
                          {error}
                        </li>
                      )
                    );
										
										this.setState({ errorAlerts: errorAlertMessages });


										console.log(this.state.errorAlerts);



                  } else {
										// error is due to email already existing
										// do no tell user email already exists, route to error page
                    const { history } = this.props;
                    history.push("/error");
                  }
								}
							});
						}

							// if user already exists, 
								// give error
								// route to error page?
							// if user does not exist, 
								// user is created
								// sign in user
								// route to previous page?

					};






					return (
						<div className="middle-section">
							<h2>Sign Up</h2>

							<ul>
								{this.state.errorAlerts}
							</ul>

							<form onSubmit={handleSubmit}>
								<div className="field-container">
									<input
										type="text"
										ref={this.firstName}
										placeholder="First Name"
										autoFocus
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
										<Link to={`/`}>
											<div className="button-text">
												<span className="blue">Cancel</span>
											</div>
										</Link>
									</li>
								</ul>
							</form>

							<p>
								Already have a user account?{" "}
								<span>
									<Link to={`/signin`}>
										<span>Click here</span>
									</Link>
								</span>{" "}
								to sign in!
							</p>
						</div>
					);
				}}
			</Consumer>
    );
  }
}
