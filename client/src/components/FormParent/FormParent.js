import React from "react";
// import 

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

              <label htmlFor="parentfirstname">First Name:</label>
              <input className="form-control" type="text" id="parentfirstname"></input>
          
              <label htmlFor="parentlastname">Last Name:</label>
              <input className="form-control" type="text" id="parentlastname"></input>

              <label htmlFor="parentzip">Zip:</label>
              <input className="form-control" type="text" id="parentzip"></input>

              <label htmlFor="parentphone">Phone:</label>
              <input className="form-control" type="text" id="parentphone"></input>

              <label htmlFor="parentemail">Email:</label>
              <input className="form-control" type="text" id="parentemail"></input>

              <label htmlFor="parentcomments">Comments:</label>
              <textarea className="form-control" rows="4" id="parentcomments"></textarea>

              <br />
              <div className="row">
                <div className="col-6">
                  <a className="btn btn-secondary float-left" href="/formdog" role="button">Previous</a>
                </div>
              
                <div className="col-6">  
                  <a class="btn btn-primary float-right" href="/formsearch" role="button">Save Profile</a>
                </div>
              </div>

            </form>
      
          </div>
        </div>
      </div>
    </div>
  </div>

export default FormParent;
