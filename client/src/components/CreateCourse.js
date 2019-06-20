import React, { Component } from "react";
import { NavLink } from "react-router-dom";

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


	handleSubmit = (e) => {
		e.preventDefault();
		console.log(this.emailAddress.current.value);
		console.log(this.password.current.value);
		// this.props.addPlayer(this.emailAddress.current.value);
		e.currentTarget.reset();
	}



  render() {
 

		// TODO: update courseOwner to be currently authenticated user
    const courseOwner = ``;


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
                <textarea 
									id="description"
									rows="10"
                  ref={this.description}
                  placeholder="Course description..."
                />
              </p>
            </div>
            <div className="page-right">
              <h5>Estimated Time</h5>
              <p className="field-container" id="time">
                <input 
									type="text" 
									ref={this.time} 
									placeholder="Hours" />
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