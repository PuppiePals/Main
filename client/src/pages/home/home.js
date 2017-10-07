import React, { Component } from "react";
import "./home.css";

class HomePage extends Component {
  render() {
    return (
      <div className="container">
        <div className="row" id="upperrow"> 
          <div className="col-md-7" id="welcome">
            <br/>
            PuppyPals
          </div>
                         
          <div className="col-md-5">
            <img src="http://res.cloudinary.com/time2emit/image/upload/v1507255761/play2_bktdj9.png" width="300" height="300" />
          </div>        
        </div>
        
      
        <div className="row" id="lowerrow">

          <h2>Finding a playmate for your pup has never been easier!</h2>
          <br />

          <h2> Click log in to get started! </h2>
        </div>

        <div align="center">
          <a href="/login" className="btn btn-primary">Log in</a>
        </div>

      </div>
            
    );
  }
}


export default HomePage;