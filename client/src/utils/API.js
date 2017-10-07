// Include the Axios library for HTTP requests
var axios = require("axios");

// Helper Functions
const API = {

  // This will return any saved articles from our database
  getDog: function() {
    return axios.get("/api/dogresults");
  },
  // This will save new articles to our database
  postDog: function(newProfile) {
    // var newProfile = { Dog_Name: Dog_Name, Age: Age, Size: Size, Sex: Sex, Personality: Personality };
    return axios.post("/api/submitdog", newProfile);
  }
}

// API.getbooks.then()
export default API;