import React from "react";
import axios from "axios";

const FormParent = () =>

  <div className="container col-6">
    <div className="panel panel-default">
      <div className="panel-body">

        <div className="card">
          
          <div className="card-header">
            Create Parent Profile
          </div>
          
          <div className="card-body"> 

            <form id="parentprofile">

              <label htmlFor="parentemail">Email:</label>
              <input className="form-control" type="text" id="parentemail"></input>
              
              <br />

              <label htmlFor="parentcomments">Password:</label>
              <input className="form-control" id="parentcomments"></input>

              <br />
              <br />

              <label htmlFor="parentfirstname">First Name:</label>
              <input className="form-control" type="text" id="parentfirstname"></input>
              
               <br /> 

              <label htmlFor="parentlastname">Last Name:</label>
              <input className="form-control" type="text" id="parentlastname"></input>

              <br />

              <label htmlFor="parentzip">Zip:</label>
              <input className="form-control" type="text" id="parentzip"></input>

              <br />

              <label htmlFor="parentphone">Phone:</label>
              <input className="form-control" type="text" id="parentphone"></input>

              <br />
              <div className="row">
                <div className="col-6">
                  <a className="btn btn-secondary float-left" href="/login" role="button">Previous</a>
                </div>
              
                <div className="col-6">  
                  <a class="btn btn-primary float-right" href="/formdog" role="button">Save Profile</a>
                </div>
              </div>

            </form>
      
          </div>
        </div>
      </div>
    </div>
  </div>

export default FormParent;
