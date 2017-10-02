import React from "react";
import "./navbar.css";

const Navbar = () =>
	<nav>
		<div className="main-nav">
			<ul>
				<li><a href="/">Home</a></li>
				<li><a href="/user">User Profile</a></li>
				<li><a href="/search">Search</a></li>
				<li><a href="/signout">Sign Out</a></li>
			</ul>
		</div>
	</nav>

export default Navbar;