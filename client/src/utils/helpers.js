// Include the Axios library for HTTP requests
var axios = require("axios");

// Helper Functions
var helpers = {

  // This will return any saved articles from our database
  getDog: function() {
    return axios.get("/api/dogresults")
      .then(function(results) {
        console.log("axios results", results);
        return results;
      });
  },
  // This will save new articles to our database
  postDog: function(Dog_Name, Age, Size, Sex, Personality) {
    var newProfile = { Dog_Name: Dog_Name, Age: Age, Size: Size, Sex: Sex, Personality: Personality };
    return axios.post("/api/submitdog", newProfile)
      .then(function(response) {
        console.log("axios results", response.data._id);
        return response.data._id;
      });
  }
}


// We export the helpers function
module.exports = helpers;
