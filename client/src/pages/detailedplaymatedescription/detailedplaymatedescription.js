import React, { Component } from "react";
import ViewProfile from "../../components/ViewProfile";
var API = require("../../utils/API.js");


class PlayMateDescriptionPage extends Component {

	// state = {
	// 	Dog_Name: "",
	// 	Age: "",
	// 	Size: "",
	// 	Sex: "",
	// 	Personality: ""
	// }

	// ComponentDidMount() {
	// 	this.loadDogs();
	// }

	loadDogs = () => {
		API.getDog()
			.then(res =>
				console.log(res));
			// .catch(err => console.log(err)); 	// this.setState({ Dog_Name: res.data, Age: res.data})
				// )
	}

	// handleInputChange = event => {
	// 	const { name, value } = event.target;
	// 	this.setState({
	// 		[name] : value
	// 	})
	// }

  render() {
    return (
       <ViewProfile
       	 // Dog_Name={this.state.Dog_Name}
       	 // Age={this.state.Age}
       	 // Size={this.state.Size}
       	 // Sex={this.state.Sex}
       	 // Personality={this.state.Personality}
       	 />
    );
  }
}


export default PlayMateDescriptionPage;