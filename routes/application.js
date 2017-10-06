//Here is where we need to define our functions to call in the other pages.
var mysql = require("mysql");

//Create the connection info for the sql database
var connection = mysql.createConnection({
	host: "127.0.0.1",
	port: 3306,
	user: "root",
	password: "",
	database: puppypals_db
})



connection.connect(function(err) {
	if (err) throw err;
	var db = connection.database;
	app.get("/api/dogresults", function(req, res) {
		console.log("Yay, connection!" + res);
		console.log(db);
	});
	
});



// module.exports = function(app) {
// 	//GET
// 	app.get("/api/dogresults", function(req, res) {
// 		console.log(res.json());
// 	});

// 	//POST


// }