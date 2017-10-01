const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 3000;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static("./client/src/pages/login"));

//Set up sequelize here instead of express.

app.listen(PORT, function() {
	console.log('🌎===> API Server new listening on Port: ' + PORT);
});