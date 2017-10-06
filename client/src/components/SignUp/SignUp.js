import React from "react";
// import 

const SignUp = () =>

  <div className="container col-6">
    <div className="panel panel-default">
      <div className="panel-body">

        <div className="card">
          
          <div className="card-header">
            Sign Up
          </div>
          
          <div className="card-body"> 

            <form id="SignUp">

              <label htmlFor="firstname">First Name:</label>
              <input 
                className="form-control" 
                type="text" 
                id="userfirstname"></input>

              <label htmlFor="lastname">Last Name:</label>
              <input className="form-control" type="text" id="userlastname"></input>

              <label htmlFor="email">Email:</label>
              <input className="form-control" type="text" id="useremail"></input>
          
              <label htmlFor="password">Password:</label>
              <input className="form-control" type="text" id="userpassword"></input>

              <br />

              <a href="/formdog" className="btn btn-primary">Register</a>

            </form>
      
          </div>
        </div>
      </div>
    </div>
  </div>

export default SignUp;
