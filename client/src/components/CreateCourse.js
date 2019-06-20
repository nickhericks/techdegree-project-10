import React, { Component } from "react";
// import { NavLink } from "react-router-dom";

export default class CreateCourse extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     course: {},
  //     user: {}
  //   };
  // }

  // componentDidMount() {
  //   fetch(`http://localhost:5000/api/courses/${this.props.match.params.id}`)
  //     .then(response => response.json())
  //     .then(responseData => {
  //       this.setState({
  //         course: responseData.course,
  //         user: responseData.course.user
  //       });
  //       console.log(this.state.course);
  //       console.log(this.state.user);
  //     })
  //     .catch(error => console.log("Error fetching or parsing data", error));
  // }

  render() {


    return (
      <div>

        <div className="container details-page">
          <div className="details-main">
            <h2>Create Course</h2>
          </div>
        </div>

      </div>
    );
  }
}
