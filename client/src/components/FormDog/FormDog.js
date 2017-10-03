import React from "react";

const FormDog = () =>

  <div className="container">
    <div className="panel panel-default">
      <div className="panel-body">

        <form id="dog_profile">
          
          <label htmlFor="age">Age: </label>
          <input className="form-control" type="text" id="age"></input>
              
          <div className="doggender">
            <label>Male: </label>
            <input type="radio" name="male"></input>

            <label>Female: </label>
            <input type="radio" name="female"></input>
          </div>

          <div className="dogsize">
            <label>Small (1-20 lbs) </label>
            <input type="radio" name="small"></input>

            <label>Medium (21-60 lbs) </label>
            <input type="radio" name="medium"></input>
        
            <label>Large (61 lbs and up) </label>
            <input type="radio" name="large"></input>
          </div>

          <label htmlFor="Comments">Personality: </label>
          <textarea className="form-control" rows="5" id="Comments"></textarea>
        
          <button type="button" id="formdog">Done</button>

        </form>

      </div>
    </div>
  </div>

export default FormDog;
