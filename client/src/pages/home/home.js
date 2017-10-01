import React, { Component } from "react";

class HomePage extends Component {
  render() {
    return (
       <div className="container">
         <div className="row">
           <div className="col-md-6">
             <div className="Jumbotron">
               <h1>Welcome to HomePage</h1>
             </div>
             <div className="form">
               <div className="formbtn">
                 Submit Here
               </div>
            </div>
           </div>
         </div>
     </div>
    );
  }
}


export default HomePage;