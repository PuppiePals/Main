import React from "react";

const Form_Search = () =>
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
              <label><input type="radio" name="sizeradio">Small(1 lbs - 20 lbs)</label>
            </div>
            <div className="radio">
              <label><input type="radio" name="sizeradio">Medium(21 lbs - 60 lbs)</label>
            </div>
            <div className="radio">
              <label><input type="radio" name="sizeradio">Large(60 lbs and up)</label>
            </div>


          //Zip
          <label for="Zip">Zip:</label><br>
          <input className="form-control" type="text" id="zip"><br>

        </form>
      </div>
    </div>
  </div>

export default FormSearch;
