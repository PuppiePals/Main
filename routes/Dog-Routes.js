var db = require("../models");


module.exports = function(app) {
	//GET
	app.get("/api/dogresults", function(req, res) {
		db.Dogs.findAll({}).then(function(dbResponse) {
			var dogObj = {
				Dogs: dbResponse
			};
			console.log(JSON.stringify(dogObj));
			// res.render("Dogs", dogObj);
		});
	});

	//POST
	app.post("/api/submitdog", function(req,res) {
		var newDog = {
	            Dog_Name: JSON.stringify(req.body.Dog_Name),
	            Age: JSON.stringify(req.body.Age),
	            Size: JSON.stringify(req.body.Size),
	            Sex: JSON.stringify(req.body.Sex),
	            Personality: JSON.stringify(req.body.Personality)
	        }
	        	db.Dogs.create(newDog).then(function (err, dbNewDog) {
	        		if (err) {
	        			console.log(err);
	        		} else {
	        			console.log("Created new dog" + dbNewDog);
	        		}
	            	// res.redirect("/" + dbNewDog.id);
	            	//Need to determine the path for the next page to redirect to///
	       });
    	});

	};



//Here is where we need to define our functions to call in the other pages.
// var mysql = require("mysql");
// var express = require("express");
// //Create the connection info for the sql database
// var connection = mysql.createConnection({
// 	host: "127.0.0.1",
// 	port: 3306,
// 	user: "root",
// 	password: "",
// 	database: "puppypals_db"
// })

// connection.connect(function(err) {
// 	if (err) throw err;
// 	var db = connection.database;
// 	app.get("/api/dogresults", function(req, res) {
// 		console.log("Yay, connection!" + res);
// 		console.log(db);
// 	});
	
// });





// 	//POST


// }