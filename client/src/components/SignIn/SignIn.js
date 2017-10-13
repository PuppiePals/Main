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

              <a href="/formsearch" className="btn btn-primary">Log In</a>

              <br />
              <br />

              <h5> No Account Yet? Click Sign Up!</h5>
              <a href="/formparent" className="btn btn-primary">Sign Up</a>

              <br />

            </form>
      
          </div>
        </div>
      </div>
    </div>
  </div>

export default SignIn;
