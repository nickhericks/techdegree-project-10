import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Consumer } from "./Context";
import axios from "axios";

export default class UpdateCourse extends Component {
  constructor() {
    super();
    this.state = {
			title: '',
			description: '',
			estimatedTime: '',
			materialsNeeded: '',
			id: null,
			userId: null,
			firstName: '',
			lastName: '',
			emailAddress: ''
    };
	}
	
  componentDidMount() {
    fetch(`http://localhost:5000/api/courses/${this.props.match.params.id}`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          title: responseData.course.title,
          description: responseData.course.description,
          estimatedTime: responseData.course.estimatedTime,
          materialsNeeded: responseData.course.materialsNeeded,
          id: responseData.course.id,
          userId: responseData.course.userId,
          firstName: responseData.course.user.firstName,
          lastName: responseData.course.user.lastName,
          emailAddress: responseData.course.user.emailAddress
        });
        console.log(this.state.title);
      })
      .catch(error => console.log("Error fetching or parsing data", error));
  }


	handleValueChange = (e) => {
			console.log(e.target.name);
			console.log(e.target.value);

			let name = e.target.name;
			let value = e.target.value;

			this.setState({
				[name]: value
			});
		}


  handleSubmit = e => {
		e.preventDefault();
		

    // TODO: Make POST request with data to REST API

    e.currentTarget.reset();
  };

  render() {

    // const id = this.state.course.id;
    const title = this.state.title;
    const description = this.state.description;
    const estimatedTime = this.state.estimatedTime;
    const materialsNeeded = this.state.materialsNeeded;
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    const courseOwner = `${firstName} ${lastName}`;


    return (

			// TODO: Turn this component into a Consumer






      <div className="container no-subheader">
        <form onSubmit={this.handleSubmit}>
          <h2>Update Course</h2>

          <div className="page-main">
            <div className="page-left">
              <h4>Course</h4>
              <h1 className="field-container">
                <input
									name="title"
                  className="title"
                  type="text"
                  onChange={this.handleValueChange}
                  value={title}
                />
              </h1>
              <h4>By {courseOwner}</h4>
              <p className="field-container">
                <textarea
                  id="description"
									name="description"
                  rows="10"
                  onChange={this.handleValueChange}
                  value={description}
                />
              </p>
            </div>
            <div className="page-right">
              <h5>Estimated Time</h5>
              <p className="field-container">
                <input
                  type="text"
									name="estimatedTime"
                  onChange={this.handleValueChange}
                  value={estimatedTime}
                />
              </p>
              <h5>Materials Needed</h5>
              <p className="field-container">
                <input
                  type="text"
									name="materialsNeeded"
                  onChange={this.handleValueChange}
                  value={materialsNeeded}
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
  }
}
