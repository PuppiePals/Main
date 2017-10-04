import React from "react";
// import 

const SignIn = () =>

  <div className="container col-6">
    <div className="panel panel-default">
      <div className="panel-body">

        <div className="card">
          
          <div className="card-header">
            Sign In
          </div>
          
          <div className="card-body"> 

            <form id="SignIn">

              <label htmlFor="email">Email:</label>
              <input className="form-control" type="text" id="parentfirstname"></input>
          
              <label htmlFor="password">Password:</label>
              <input className="form-control" type="text" id="parentlastname"></input>

              <br />

            </form>
      
          </div>
        </div>
      </div>
    </div>
  </div>

export default SignIn;
