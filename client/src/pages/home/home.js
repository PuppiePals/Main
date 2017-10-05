import React, { Component } from "react";
import "./home.css";

class HomePage extends Component {
  render() {
    return (
      <div className="container">
        <div className="row" id="upperrow"> 
          <div className="col-md-6" id="welcome">
              
              <h2>Welcome to </h2>
              <br />
              <h1>PuppyPals </h1>
          </div>
                         
          <div className="col-md-6">
            <img src="" /> 
            <h6>Insert Image Here</h6>
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