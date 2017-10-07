import React, { Component } from "react";
import helpers from "../../utils/helpers.js";
import ViewProfile from "../../components/ViewProfile"
var dogroutes = require("/../../routes/Dog-Routes.js");

class PlayMateDescriptionPage extends Component {
  render() {
    return (
       <ViewProfile
       	 Dog_Name={"Rosa"}
       	 Age={dogroutes.Dogs.Age}
       	 Size={"S"}
       	 Sex={"Male"}
       	 Personality={"IDK"}
       	 />
    );
  }
}


export default PlayMateDescriptionPage;