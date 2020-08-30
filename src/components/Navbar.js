import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav id="navbar">
			<Link to="/" className="home">
				<i className="fas fa-home fa-2x" />
			</Link>
		</nav>
	);
};
export default Navbar;

// <button
// className="button icon-left"
// onClick={this.navigateBack}>
// Back
// </button>
