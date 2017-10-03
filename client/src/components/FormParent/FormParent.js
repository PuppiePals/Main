import React from "react";

const Form_Parent = () =>
  <div className="container">
    <div className="panel panel-default">

      <div className="panel-body">

        <form id="parent_profile">
          //Name
          <label for="FName">First Name:</label><br>
          <input className="form-control" type="text" id="fname"><br>
          <label for="LName">Last Name:</label><br>
          <input className="form-control" type="text" id="lname"><br>

          //Zip
          <label for="Zip">Zip:</label><br>
          <input className="form-control" type="text" id="zip"><br>

          //Phone
          <label for="Phone">Phone:</label><br>
          <input className="form-control" type="text" id="phone"><br>

          //Email
          <label for="Email">Email:</label><br>
          <input className="form-control" type="text" id="email"><br>

          //Comments
          <br><label for="Comments">Comments:</label><br>
          <textarea className="form-control" rows="5" id="Comments"></textarea>

        </form>
      </div>
    </div>
  </div>

export default FormParent;
