import React from "react";

const Form_Dog = () =>
  <div className="container">
    <div className="panel panel-default">

      <div className="panel-body">
        <form id="dog_profile">
          //Age
          <label for="age">Age:</label><br>
          <input className="form-control" type="text" id="age"><br>
          //Weight Range
            // <select data-placeholder="" className="chosen-select" id="age">
            // <option value="">Select an option</option>
            // <option value="S">Small(1lbs - 20lbs)</option>
            // <option value="Y">Medium(21lbs - 60lbs)</option>
            // <option value="O">Large(61lbs and up)</option>
            // </select>
            //Male or Female
            <div className="radio">
              <label><input type="radio" name="mfradio">Male</label>
            </div>
            <div className="radio">
              <label><input type="radio" name="mfradio">Female</label>
            </div>

            <div className="radio">
              <label><input type="radio" name="sizeradio">Small(1 lb - 20 lbs)</label>
            </div>
            <div className="radio">
              <label><input type="radio" name="sizeradio">Medium(21 lbs - 60 lbs)</label>
            </div>
            <div className="radio">
              <label><input type="radio" name="sizeradio">Large(60 lbs and up)</label>
            </div>


          //Personality
          <br><label for="Comments">Personality:</label><br>
          <textarea className="form-control" rows="5" id="Comments"></textarea>

        </form>
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

export default FormDog;
