import React from "react";

const Navbar = () =>

	<nav className="navbar navbar-expand-lg navbar-light bg-light">
		<a className="navbar-brand" href="/">
  	  		<img src="../assets/images/pawprint.png" width="30" height="30" alt=""></img>   
  	  	</a>
	  	<div className="collapse navbar-collapse" id="navbarSupportedContent">

	    	<ul className="navbar-nav mr-auto">
	      		<li className="nav-item">
	        		<a className="nav-link" href="/">Home </a>
	      		</li>   
	   			<li className="nav-item">
	          		<a className="nav-link" href="/formparent">Human Profile</a>
	      		</li>
	      		<li className="nav-item">
	          		<a className="nav-link" href="/formdog">Dog Profile</a>
	      		</li>
	       		<li className="nav-item">
	        		<a className="nav-link" href="/signout">Sign Out</a>
	      		</li>
	       	</ul>
	    
		    <form className="form-inline my-2 my-lg-0">
		  	    <input className="form-control mr-sm-2" type="text" placeholder="Search a Playmate" aria-label="Search">
		  	    </input>
		    	<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
		    </form>
		</div>
	</nav>

export default Navbar;