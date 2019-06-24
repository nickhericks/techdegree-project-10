import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Consumer } from "./Context";
import axios from "axios";

export default class CreateCourse extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

	
	title = React.createRef();
	description = React.createRef();
	time = React.createRef();
	materials = React.createRef();




	render() {
     return (
			<Consumer>
				{ ({ username, password, name, userId, actions }) => {

					let errors;


					const handleSubmit = e => {
						e.preventDefault();

						// Assign field values to variables
						const courseTitle = this.title.current.value;
						const courseDescription = this.description.current.value;
						const courseEstimatedTime = this.time.current.value;
						const courseMaterialsNeeded = this.materials.current.value;


						// Send POST request to create course
						axios({
              method: "post",
              url: 'http://localhost:5000/api/courses',
              responseType: "json",
              auth: {
								username: username,
								password: password
              },
              data: {
                title: courseTitle,
								description: courseDescription,
								estimatedTime: courseEstimatedTime,
								materialsNeeded: courseMaterialsNeeded,
								userId: userId
              }
            })
						.then( response => {
							console.log(`CREATED COURSE: ${courseTitle}`);
							const { history } = this.props;
							history.push(`/courses/${response.data.id}`);
						})
						.catch(error => {
							console.log(error.response.status);
							
							// if user not signed in
							if (error.response.status === 401) {
								console.log(`You must sign in first`);
								const { history } = this.props;
								history.push("/signin");
							}

							// if validation error (empty required fields)
							if (error.response.status === 400) {
								errors = error.response.data.errors;

								console.log(`Number of errors: ${errors.length}`);
							}
							
						});







					};


					return (
            <div className="container no-subheader">
              <form onSubmit={handleSubmit}>
                <h2>Create Course</h2>

                <div className="page-main">
                  <div className="page-left">
                    <h4>Course</h4>
                    <h1 className="field-container">
                      <input
                        className="title"
                        type="text"
                        ref={this.title}
                        placeholder="Course title..."
                      />
                    </h1>
                    <h4>By {name}</h4>
                    <p className="field-container">
                      <textarea
                        id="description"
                        rows="12"
                        ref={this.description}
                        placeholder="Course description..."
                      />
                    </p>
                  </div>
                  <div className="page-right">
                    <h5>Estimated Time</h5>
                    <p className="field-container">
                      <input
                        type="text"
                        ref={this.time}
                        placeholder="Hours"
                      />
                    </p>
                    <h5>Materials Needed</h5>
                    <p className="field-container">
                      <textarea
                        rows="9"
                        ref={this.materials}
                        placeholder="List materials..."
                      />
                    </p>
                  </div>
                </div>

                <ul className="button-list">
                  <li className="button primary">
                    <input type="submit" value="Update Course" />
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
            </div>
          );
				}}
			</Consumer>
    );
  }
}
