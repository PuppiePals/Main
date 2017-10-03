import React from "react";

const FormDog = () =>

  <div className="container">
    <div className="panel panel-default">
      <div className="panel-body">

        <div className="card">
          
          <div className="card-header">
            Create Dog Profile
          </div>
          
          <div className="card-body"> 
        
            <form>
              <label htmlFor="age">Name: </label>
              <div className="col-4">
                <input className="form-control" type="text" id="age" size = "2" maxlength = "25"></input>
              </div>
            </form>
                
            <form>
              <label htmlFor="age">Age: </label>
              <div className="col-4">
                <input className="form-control" type="text" id="age" maxlength = "2"></input>
              </div>
            </form>

            <div className="doggender">
              <form>
                <br />
                <h6 className="card-text">Gender: </h6> 
                <label className="radio-inline"> 
                  <input type="radio" className="male" />    Male    .
                </label>
                <label className="radio-inline"> 
                  <input type="radio" name="female" />    Female  
                </label>
              </form>
            </div>

            <div className="dogsize">
              <form>
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
              </form>  

            </div>

            <div className="dogpersonality">
              <form>
                <br />
                <label htmlFor="Comments">Personality: </label>
                <textarea className="form-control" rows="4" id="Comments"></textarea>
              </form>
            </div>

            <br />
            <a href="/formparent" className="btn btn-primary">Done</a>

          </div>
        </div>

        </div>
    </div>
  </div>

export default FormDog;
