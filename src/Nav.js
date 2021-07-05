import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

export default function Nav() {

	const mystyle={
		color:"grey",
		textDecoration:"none",
		fontWeight:"700px",
		fontSize:'1.5em',
	}

	return (
		<nav>
			<Link style={mystyle} to="/">
			<h3>VINAYKART</h3>	
			</Link>
			<ul className="links">
				<Link style={mystyle} to="/about">
				<li>About</li>
				</Link>
				<Link style={mystyle} to="/shop">
				<li>Shop</li>
				</Link>
			</ul>
		</nav>
	)
}