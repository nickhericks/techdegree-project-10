# Project 10 - Full Stack JavaScript Techdegree

### Full Stack App with React and a REST API
This application provides a way for users to administer a school database containing information about courses.

---

<img src="https://res.cloudinary.com/dtqevfsxh/image/upload/v1561495239/portfolio/fullStackApp1.png" width="899px">

---

<img src="https://res.cloudinary.com/dtqevfsxh/image/upload/v1561495240/portfolio/fullStackApp2.png" width="899px">

---

<img src="https://res.cloudinary.com/dtqevfsxh/image/upload/v1561495239/portfolio/fullStackApp3.png" width="899px">

---

## View project
1. Download this repo.
2. Navigate to the project's `api` directory in the command line/terminal.
3. Run 'npm install'.
4. Run 'npm seed' to seed the SQLite database.
5. Run 'npm start' to start the REST API server.
6. Visit http://localhost:5000/ in your web browser to test the REST API.
7. Navigate to the project's `client` directory in the command line/terminal.
8. Run 'npm install'.
9. Run 'npm start'.
10. Run 'npm start' to start the application.
11. Visit http://localhost:3000/ in your web browser to view the application.

<!-- TODO: Set up live version using Heroku -->

<!-- :mag: Live version available at [nickhericks.github.io/techdegree-project-6/](https://nickhericks.github.io/techdegree-project-6/) -->

## Project objective
In this project, I created a full stack application that provides a way for users to administer a school database containing information about courses. Users can interact with the database by retrieving a list of courses, viewing details for a specific course, as well as creating, updating and deleting courses from the database. Users are required to create an account and log-in to make changes to the database.

The project uses a REST API that I created in a [previous project](https://github.com/nickhericks/techdegree-project-9).


## Techniques and tools
- **Express.js**  -  web application framework
- **Sequelize ORM**  -  mapping between JavaScript objects and SQLite
- **DB Browser for SQLite**  -  viewing SQLite database tables
- **Postman**  -  REST API route testing
- **express-validator**  -  database validation
- **bcryptjs**  -  password hashing
- **basic-auth**  -  parsing authorization header
- **cors**  -  enable all CORS requests
- **React Context API**  -  managing application's global state
- **react-router-dom**  -  application routing
- **create-react-app**  -  initial React project setup
- **react-markdown**  -  rendering markdown formatted text
- **axios**  -  Promise-based HTTP requests

## Code example
The `Courses` component makes a new fetch GET request to the REST API each time the page is loaded and returns a list of all courses, which is then set in component state. We map over the 'courses' array in our component state and use the `CourseCard` component to create the new `currentCourses` array (an array of <li> elements). All CourseCards are then rendered, along with a link to add a new course.

```javascript
import React, { Component } from 'react';
import { Link } from "react-router-dom";

// Import components
import CourseCard from "./CourseCard";

export default class Courses extends Component {
  constructor() {
    super();
    this.state = {
      courses: []
    };
  } 

  componentDidMount() {
    fetch("http://localhost:5000/api/courses")
      .then(response => response.json())
      .then(responseData => {
        this.setState({ 
          courses: responseData.courses 
        });
    })
    .catch( () => {
      const { history } = this.props;
      history.push("/error");
    });
  }

  render() {
    // Assign variable for list of current courses
    let currentCourses;
    // Update array using courses in component state
    currentCourses = this.state.courses.map( course => (
      <CourseCard
        id={course.id}
        key={course.id}
        title={course.title}
      />
    ));
    return (
      <div className="container">
        <ul className="course-list">
          {currentCourses}
          {/* Display 'Add New Course' card */}
          <li className="course-card" id="new-course-card">
            <Link to={`/courses/create`}>
              <div className="new-course-card-title">Add New Course</div>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
};
```

## Acknowledgements
This project was built as part of the [Full Stack JavaScript Techdegree](https://join.teamtreehouse.com/techdegree/) offered by [Treehouse](https://teamtreehouse.com) :raised_hands:

Also, a big thank you to the creators and maintainers of [Node.js](https://nodejs.org/en/), [Express](https://expressjs.com/), and all the other open source projects used in this project. 👍