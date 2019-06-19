import React from "react";
import { NavLink } from "react-router-dom";

// import PropTypes from "prop-types";

const Header = (props) => {
  return (
    <header>
			<div className="container header-container">

				<h1>Courses</h1>

				<nav className="main-nav">
					<ul>
						<li>
							<NavLink to="/signup">Sign Up</NavLink>
						</li>
						<li>
							<NavLink to="/signin">Sign In</NavLink>
						</li>
					</ul>
				</nav>
			</div>
    </header>
  );
};

// Header.propTypes = {
//   players: PropTypes.arrayOf(PropTypes.object),
//   title: PropTypes.string
// };

// Header.defaultProps = {
//   title: "Scoreboard"
// };

export default Header;
