import React, { Component } from "react";
import { Link } from "react-router-dom";


export default class CourseDetail extends Component {
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
	
	handleDeleteCourse = () => {
		console.log(`About to delete course #${this.props.match.params.id}`);


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
        <div className="details-subheader">
          <div className="container">
            <div className="subheader-flex">


              <ul className="button-list">
                {/* if current user is owner, add 'update' and 'delete' buttons */}
                {buttons}

                <li className="button primary">
                  <Link to={`/courses/${id}/update`}>
                    <div className="button-text">Update Course</div>
                  </Link>
                </li>
                <li className="button primary">
                  <Link to={`/`}>
                    <div className="button-text">Delete Course</div>
                  </Link>
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

