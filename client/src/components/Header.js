import React from "react";
import { NavLink } from "react-router-dom";

// import PropTypes from "prop-types";

// import Stats from "./Stats";
// import Stopwatch from "./Stopwatch";

const Header = (props) => {
  return (
    <header>
			<div className="appContainer">

				{/* <Stats players={players} /> */}

				<h1>Courses</h1>

				<nav className="main-nav">
					<ul>
						<li>
							<NavLink to="/mountains">Mountains</NavLink>
						</li>
						<li>
							<NavLink to="/dogs">Dogs</NavLink>
						</li>
						<li>
							<NavLink to="/sunset">Sunset</NavLink>
						</li>
					</ul>
				</nav>
  );
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
