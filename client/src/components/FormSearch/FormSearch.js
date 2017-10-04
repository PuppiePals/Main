import React from "react";

const FormSearch = () =>
  <div className="container col-6">
    <div className="panel panel-default">
      <div className="panel-body">
        <div className="card">
          <div className="card-header">
            Search a Playmate
          </div>

          <div className="card-body">
            
            <form id="dogprofile">
          
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

                  <label htmlFor="Zip">Zip:</label>
                  <div className="col-4">
                    <input className="form-control" type="text" id="zip" maxLength="5" />
                  </div>
                  
                  <br />
                  <div className="row">
                    <div className="col-6">
                      <a className="btn btn-secondary float-left" href="/formparent" role="button">Previous</a>
                    </div>
                  
                    <div className="col-6">  
                      <a class="btn btn-primary float-right" href="/searchresults" role="button">Search</a>
                    </div>
                  </div>
          

        </form>
          </div>
        </div>
      </div>
    </div>
  </div>


export default FormSearch;
