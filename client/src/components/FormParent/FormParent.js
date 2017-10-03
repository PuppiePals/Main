import React from "react";

const FormParent = () =>

  <div className="container">
    <div className="panel panel-default">
      <div className="panel-body">

        <form id="parent_profile">

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
          <textarea className="form-control" rows="5" id="Comments"></textarea>

          <button type="button" id="formparent">Done</button>

        </form>
      
      </div>
    </div>
  </div>

export default FormParent;
