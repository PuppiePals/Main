  // import React, { Component } from "react";
  // //need axios at the level, normally component, where the info is rendered
  // //the route has to already be defined in express (separate file)
  // //can have another file called APIs which have the call API functions so
  // //you only need to call them in this file

  // import axios from "axios";

  // class SearchResultsPage extends Component {
  //   constructor(props);
  //   super(props);
  //     this.state = {
  //       puppylist: []
  //   }
  //   componentDidMount = () => {
  //     var self = this;
  //     API.getpics().then(docs)==>(
  //       this.setState({houses: docs.data}));
  //   }
  //   callAPI = () => {
  //     axios.get("/allpuppies").then((response)=>{
  //       this.setState({puppylist: response.data})
  //     })
  //   }
  //   render() {
  //     return (
  //        <div className="container">
  //          <div className="row">
  //            <div className="col-md-6">
  //              <div className="Jumbotron">
  //                <h1>Welcome to SearchResultsPage</h1>

  //              </div>
  //              <div className="form">
  //                <div className="formbtn">
  //                  Submit Here
  //                </div>
  //             </div>
  //            </div>
  //          </div>
  //      </div>
  //     );
  //   }
  // }


  // export default SearchResultsPage;

import React, { Component } from "react";
import SearchResults from "../../components/PlaymateSearchResults";

class SearchResultsPage extends Component {

render() {
    return (
      <div>
      <SearchResults />
      </div>
    );

  }
}


export default SearchResultsPage;