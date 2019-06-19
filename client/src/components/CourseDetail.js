import React, { Component } from "react";
import { NavLink } from "react-router-dom";


export default class CourseDetail extends Component {
  constructor() {
    super();
    this.state = {
      course: {}
    };
  }

  componentDidMount() {
    fetch(`http://localhost:5000/api/courses/${this.props.match.params.id}`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({ course: responseData.course });
        console.log(this.state.course);
      })
      .catch(error => console.log("Error fetching or parsing data", error));
  }

  render() {
    console.log(this.state.course);
    console.log('Props', this.props);
    console.log(this.props.match.params.id);

    const title = this.state.course.title;
    const description = this.state.course.description;

		let materials;

		let buttons; 		
		// If current user is owner, add 'update' and 'delete' buttons

		

    return (
      <div>
        <div className="details-subheader">

        <ul className="details-buttons">
					{/* if current user is owner, add 'update' and 'delete' buttons */}
					{buttons}

          <li className="button" id="return-btn">
            <NavLink to={`/`}>
              <div className="">Return to List</div>
            </NavLink>
          </li>
        </ul>

				</div>
        <div className="details-page">
          <div className="details-main">
            <h4>Course</h4>
            <h1>{title}</h1>
						{/* <h4>{this.state.course.user.firstName}</h4> */}
						<p>{description}</p>
          </div>
          <div className="details-side">
						<h5>Estimated Time</h5>
						<p>14 hours</p>
						<h5>Materials Needed</h5>
						<ul>
							{materials}
						</ul>
					</div>
        </div>
      </div>
    );
  }
}

