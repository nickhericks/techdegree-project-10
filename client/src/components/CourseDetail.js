import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Consumer } from "./Context";
import axios from 'axios';


export default class CourseDetail extends Component {
  constructor() {
    super();
    this.state = {
			course: {},
			user: {},
			isCourseOwner: false,
    };
	}
	
	
  componentDidMount() {
    fetch(`http://localhost:5000/api/courses/${this.props.match.params.id}`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({ 
					course: responseData.course,
					user: responseData.course.user
				});
        // console.log(this.state.course);
        // console.log(this.state.user);
      })
      .catch(error => console.log("Error fetching or parsing data", error));
	}
	


  render() {
    // console.log(this.state.course);
    // console.log('Props', this.props);
    // console.log(this.props.match.params.id);

    const id = this.state.course.id;
    const title = this.state.course.title;
    const description = this.state.course.description;
    const estimatedTime = this.state.course.estimatedTime;
		const materialsNeeded = this.state.course.materialsNeeded;
		const firstName = this.state.user.firstName;
		const lastName = this.state.user.lastName;
		const courseOwner = `${firstName} ${lastName}`;



		let buttons; 		
		// If current user is owner, add 'update' and 'delete' buttons

		

    return (
      <div>
        <Consumer>
          {({ username, password, userId }) => {

							const isCourseOwner = () => {
								const ownerId = this.state.course.userId;
								const authenticatedUserId = userId;

								if(ownerId === authenticatedUserId) {
									return true;
								} else {
									return false;
								}
							}

							console.log(isCourseOwner());
							const showOwnerButtons = isCourseOwner();

							const handleDeleteCourse = () => {

								if (isCourseOwner()) {
                  console.log("deleting course");

                  axios({
                    method: "delete",
                    headers: {
                      "content-type": "application/json"
                    },
                    url: `http://localhost:5000/api/courses/${
                      this.props.match.params.id
                    }`,
                    auth: {
                      username: username,
                      password: password
                    }
                  }).catch(error => {
                    // TODO: update error handler here?
                    console.log(error.response.status);
                    console.log(error.response.data);
                    const { history } = this.props;
                    history.push("/error");
                  });

                  console.log(
                    `DELETED course #${
                      this.props.match.params.id
                    }`
                  );

                  // Send user back to previous page upon successful login
                  const { history } = this.props;
                  // const path = location.state ? location.state.prevLocation : '/';
                  history.push("/");
                } else {
                  // TODO: update what happens when not course owner
                  console.log("You do not own this course");
                }
							}


            return (
							<div className="details-subheader">
								<div className="container">
									<div className="subheader-flex">
										<ul className="button-list">
											{/* if current user is owner, add 'update' and 'delete' buttons */}
											{buttons}

											<li 
												className="button primary"
												style={{display: showOwnerButtons ? 'block' : 'none' }}
												>
												<Link to={`/courses/${id}/update`}>
													<div className="button-text">Update Course</div>
												</Link>
											</li>
											<li 
												className="button primary"
												style={{display: showOwnerButtons ? 'block' : 'none' }}
												>												<button
													onClick={handleDeleteCourse}
													className="primary"
												>
													<div className="button-text">Delete Course</div>
												</button>
											</li>
											<li className="button secondary">
												<Link to={`/`}>
													<div className="button-text">
														<span className="blue">Return to List</span>
													</div>
												</Link>
											</li>
										</ul>
									</div>
								</div>
							</div>
						);
          }}
        </Consumer>

        <div className="container page-main">
          <div className="page-left">
            <h4>Course</h4>
            <h1>{title}</h1>
            <h4>By {courseOwner}</h4>
            <p>{description}</p>
          </div>
          <div className="page-right">
            <h5>Estimated Time</h5>
            <p className="time">{estimatedTime}</p>
            <h5>Materials Needed</h5>
            <p className="materials">{materialsNeeded}</p>
          </div>
        </div>
      </div>
    );
  }
}

