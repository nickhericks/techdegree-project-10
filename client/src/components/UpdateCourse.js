import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class UpdateCourse extends Component {
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


  titleRef = React.createRef();
  descriptionRef = React.createRef();
  timeRef = React.createRef();
  materialsRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.title.current.value);
    console.log(this.description.current.value);
    console.log(this.time.current.value);
    console.log(this.materials.current.value);
    // this.props.addPlayer(this.emailAddress.current.value);

    // TODO: Make POST request with data to REST API

    e.currentTarget.reset();
  };

  render() {

    // const id = this.state.course.id;
    const title = this.state.course.title;
    const description = this.state.course.description;
    const estimatedTime = this.state.course.estimatedTime;
    const materialsNeeded = this.state.course.materialsNeeded;
    const firstName = this.state.user.firstName;
    const lastName = this.state.user.lastName;
    const courseOwner = `${firstName} ${lastName}`;


    return (
      <div className="container no-subheader">
        <form onSubmit={this.handleSubmit}>
          <h2>Update Course</h2>

          <div className="page-main">
            <div className="page-left">
              <h4>Course</h4>
              <h1 className="field-container">
                <input
                  className="title"
                  type="text"
                  ref={this.titleRef}
                  value={title}
                />
              </h1>
              <h4>By {courseOwner}</h4>
              <p className="field-container">
                <textarea
                  id="description"
                  rows="10"
                  ref={this.descriptionRef}
                  value={description}
                />
              </p>
            </div>
            <div className="page-right">
              <h5>Estimated Time</h5>
              <p className="field-container">
                <input 
									type="text" 
									ref={this.timeRef} 
									value={estimatedTime} 
								/>
              </p>
              <h5>Materials Needed</h5>
              <p className="field-container">
                <input
                  type="text"
                  ref={this.materialsRef}
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
