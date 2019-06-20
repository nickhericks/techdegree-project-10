import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class CreateCourse extends Component {
  constructor() {
    super();
    this.state = {
      course: {},
      user: {}
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
        console.log(this.state.course);
        console.log(this.state.user);
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

		// TODO: update courseOwner to be currently authenticated user
    const courseOwner = `${firstName} ${lastName}`;


    return (
      <div className="container no-subheader">
        <form onSubmit={this.handleSubmit}>
          <h2>Create Course</h2>

          <div className="page-main">
            <div className="page-left">
              <h4>Course</h4>
              <h1 className="field-container">
                <input
                  type="text"
                  ref={this.title}
                  placeholder="Course title..."
                />
              </h1>
              <h4>By {courseOwner}</h4>
              <p className="field-container">
                <input
                  type="text"
                  ref={this.description}
                  placeholder="Course description..."
                />
              </p>
            </div>
            <div className="page-right">
              <h5>Estimated Time</h5>
              <p className="field-container" id="time">
                <input type="text" ref={this.time} placeholder="Hours" />
              </p>
              <h5>Materials Needed</h5>
              <p className="field-container" id="materials">
                <input
                  type="text"
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
              <NavLink to={`/`}>
                <div className="button-text">
                  <span className="blue">Cancel</span>
                </div>
              </NavLink>
            </li>
          </ul>
        </form>
      </div>
    );
  }
}
