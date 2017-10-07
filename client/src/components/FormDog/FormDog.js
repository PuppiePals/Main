import React from "react";
import axios from "axios";

const FormDog = props =>

  <div className="container col-6">
    <div className="panel panel-default">
      <div className="panel-body">

        <div className="card">
          
          <div className="card-header">
            Create Dog Profile
          </div>
          
          <div className="card-body"> 
        
            <form id="dogprofile">
              <label htmlFor="dogname">Name: </label>
              <div className="col-4">
                <input className="form-control" type="text" id="dogname" size = "2" maxLength = "25" {...props} />
              </div>              
      
              <label htmlFor="dogage">Age: </label>
              <div className="col-4">
                <input className="form-control" type="text" id="dogage" maxLength = "2"></input>
              </div>
      
              <div className="doggender">
                <br />
                <h6 className="card-text">Gender: </h6> 
                <label className="radio-inline"> 
                  <input type="radio" id="dogmale" />    Male    .
                </label>
                <label className="radio-inline"> 
                  <input type="radio" id="dogfemale" />    Female  
                </label>
              </div>

              <div className="dogsize">
                <br />
                <h6 className="card-text">Size: </h6>
                <label className="radio-inline">
                  <input type="radio" id="dogsmall" />    Small (1-20 lbs)    . 
                </label>
                <label className="radio-inline"> 
                  <input type="radio" id="dogmedium" />    Medium (21-60 lbs)    .
                </label>
                <label className="radio-inline"> 
                  <input type="radio" id="doglarge" />    Large (61 lbs and up)  
                </label>
               </div>

              <div className="dogpersonality">
                <br />
                <label htmlFor="dogcomments">Personality: </label>
                <textarea className="form-control" rows="4" id="dogcomments"></textarea>
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
