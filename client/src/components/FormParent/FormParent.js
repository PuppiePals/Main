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

              <label htmlFor="FName">First Name:</label>
              <input className="form-control" type="text" id="fname"></input>
          
              <label for="LName">Last Name:</label>
              <input className="form-control" type="text" id="lname"></input>

              <label for="Zip">Zip:</label>
              <input className="form-control" type="text" id="zip"></input>

              <label for="Phone">Phone:</label>
              <input className="form-control" type="text" id="phone"></input>

              <label for="Email">Email:</label>
              <input className="form-control" type="text" id="email"></input>

              <label htmlFor="Comments">Comments:</label>
              <textarea className="form-control" rows="4" id="Comments"></textarea>

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
