import React from "react";
import "./Footer.css";

const Footer = () =>

		<footer className="footer">
			<center>
			<div className="container">
				<div className="row">
					<div className="col-sm-1" id="yelp">
						<a href="https://www.yelp.com/">
							<img src="http://res.cloudinary.com/time2emit/image/upload/v1507162161/yelp_uv1usf.png" width="30" height="30" alt="" />
						</a>
					</div>				
					<div className="col-sm-1" id="facebook">
						<a href="https://www.facebook.com/">
							<img src="http://res.cloudinary.com/time2emit/image/upload/v1507174113/facebook-256_u436kk.png" width="30" height="30" alt=""/>
						</a>
					</div>	
					<div className="col-sm-1" id="twitter">
						<a href="https://twitter.com/">
							<img src="http://res.cloudinary.com/time2emit/image/upload/v1507162161/twitter_eucoog.png" width="30" height="30" alt="" />
						</a>
					</div>
				</div>
			</div>
			</center>
		</footer>

export default Footer;