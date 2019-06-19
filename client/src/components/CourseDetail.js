import React, { Component } from "react";
import { NavLink } from "react-router-dom";


const CourseDetail = ({ match }) => {
  let id = match.params.id;
  return (
    <div className="main-content">
      <h2>{id} </h2>
      {/* <p>
        Introducing <strong>{name}</strong>, a teacher who loves teaching
        courses about <strong>{topic}</strong>!
      </p> */}
    </div>
  );
};

export default CourseDetail;


// export default class CourseDetail extends Component {
//   constructor() {
//     super();
//     this.state = {
//       course: {}
//     };
//   }

//   componentDidMount() {
//     fetch("http://localhost:5000/api/courses")
//       .then(response => response.json())
//       .then(responseData => {
//         this.setState({ courses: responseData.courses });
//         console.log(this.state.courses);
//       })
//       .catch(error => console.log("Error fetching or parsing data", error));
//   }

//   render() {
//     console.log(this.state.course);
//     console.log('Props', this.props);

//     let currentCourses;
//     // If array is not empty, iterate over it
//     // if (this.state.courses.length > 0) {
//     //   currentCourses = this.state.courses.map(course => (
//     //     <CourseCard id={course.id} key={course.id} title={course.title} />
//     //   ));
//     // } else {
//     //   // If array is empty, display NoPics component
//     //   // currentCourses = "";
//     // }

//     return (
//       <div className="photo-container">
//         {/* Render images */}
//         <ul className="course-list">
//           {/* {currentCourses} */}

//           <li className="course-card" id="new-course-card">
//             <NavLink to={`/courses/create`}>
//               <div className="new-course-card-title">+ Add New Course</div>
//             </NavLink>
//           </li>
//         </ul>
//       </div>
//     );
//   }
// }

