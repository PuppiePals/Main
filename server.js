const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 3000;
const mysql = require("mysql");

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static("./client/src/pages/login"));

// Require Schemas
// var Article = require("./server/model");

//Set up sequelize here instead of mongoose.
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  // Your username
  user: "root",
  // Your password
  password: "",
  database: "puppypals_db"
})

connection.connect(function(err) {
  if (err) {
  	console.log("error loading: " + err.stack);
  } else {
  	console.log('Sequelize connection successful!');
  }
  
});





// mongoose.connect("mongodb://admin:reactrocks@ds023593.mlab.com:23593/heroku_pg676kmk");
// var db = mongoose.connection;
// db.on("error", function(err) {
//   console.log("Mongoose Error: ", err);
// });
// db.once("open", function() {
//   console.log("Mongoose connection successful.");
// });

app.listen(PORT, function() {
	console.log('🌎===> API Server new listening on Port: ' + PORT);
});