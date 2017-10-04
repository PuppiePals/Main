import React from "react"; 

const Navbar = () =>

	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		<a class="navbar-brand" href="#">
  	  		<img src="../../assets/images/pawprint.png" width="30" height="30" alt=""></img>   
  	  	</a>
	  	<div class="collapse navbar-collapse" id="navbarSupportedContent">

	    	<ul class="navbar-nav mr-auto">
	      		<li class="nav-item">
	        		<a class="nav-link" href="/">Home </a>
	      		</li>   
	   			<li class="nav-item">
	          		<a class="nav-link" href="/user">User Profile</a>
	      		</li>
	       		<li class="nav-item">
	        		<a class="nav-link" href="/signout">Sign Out</a>
	      		</li>
	       	</ul>
	    
		    <form class="form-inline my-2 my-lg-0">
		  	    <input class="form-control mr-sm-2" type="text" placeholder="Search a Playmate" aria-label="Search">
		  	    </input>
		    	<button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
		    </form>
		</div>
	</nav>

export default Navbar;