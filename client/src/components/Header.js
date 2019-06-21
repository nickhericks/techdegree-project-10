import React from "react";
import { Link } from "react-router-dom";


const Header = (props) => {



	// TODO: Add conditional to return different content below depending on if user is signed in or not
	
	// If signed in, display name and 'sign out' link

	// If not signed in, display 'sign up' and 'sign in' links




  return (
    <header>
			<div className="container header-container">

				<h1>Courses</h1>

				<nav className="main-nav">
					<ul>
						<li>
							<Link to="/signup">Sign Up</Link>
						</li>
						<li>
							<Link to="/signin">Sign In</Link>
						</li>
					</ul>
				</nav>
			</div>
    </header>
  );
};


export default Header;
