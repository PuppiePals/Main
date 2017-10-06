import mysql from "mysql";


//Create the connection info for the sql database
var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "",
	database: puppypals_db
})

connection.connect(function(err) {
	if (err) throw err;
	start();
});