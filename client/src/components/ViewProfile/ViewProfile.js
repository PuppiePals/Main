import React from "react";

const ViewProfile = props =>

  <div className="container col-6">
    <div className="panel panel-default">
      <div className="panel-body">

        <div className="card">
          
          <div className="card-header">
            View Dog Profile
          </div>
          
          <div className="card-body"> 
        
            <div id="dogname"> {props.Age}</div>
          
          </div>
        </div>
      </div>
    </div>
  </div>

export default ViewProfile;
