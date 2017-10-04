import React from "react";

const FormDog = () =>

  <div className="container col-6">
    <div className="panel panel-default">
      <div className="panel-body">

        <div className="card">
          
          <div className="card-header">
            Create Dog Profile
          </div>
          
          <div className="card-body"> 
        
            <form id="dogprofile">
              <label htmlFor="age">Name: </label>
              <div className="col-4">
                <input className="form-control" type="text" id="age" size = "2" maxLength = "25"></input>
              </div>
                     
      
              <label htmlFor="age">Age: </label>
              <div className="col-4">
                <input className="form-control" type="text" id="age" maxLength = "2"></input>
              </div>
      
              <div className="doggender">
                <br />
                <h6 className="card-text">Gender: </h6> 
                <label className="radio-inline"> 
                  <input type="radio" className="male" />    Male    .
                </label>
                <label className="radio-inline"> 
                  <input type="radio" name="female" />    Female  
                </label>
              </div>

              <div className="dogsize">
                <br />
                <h6 className="card-text">Size: </h6>
                <label className="radio-inline">
                  <input type="radio" className="small" />    Small (1-20 lbs)    . 
                </label>
                <label className="radio-inline"> 
                  <input type="radio" className="medium" />    Medium (21-60 lbs)    .
                </label>
                <label className="radio-inline"> 
                  <input type="radio" className="large" />    Large (61 lbs and up)  
                </label>
               </div>

              <div className="dogpersonality">
                <br />
                <label htmlFor="Comments">Personality: </label>
                <textarea className="form-control" rows="4" id="Comments"></textarea>
              </div>

              <br />
              <div align="right">
                <a href="/formparent" className="btn btn-primary">Next</a>
              </div>
            </form>
          
          </div>
        </div>
      </div>
    </div>
  </div>

export default FormDog;
