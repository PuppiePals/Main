//Node Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");
var methodOverride = require("method-override");
var path = require("path");

// Requiring passport as we've configured it
var passport = require("./config/passport");

var PORT = process.env.PORT || 3000;
var db = require("./models");

var app = express();

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("client/public"));

//To keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

require("./routes/Dog-Routes.js")(app);
require("./routes/User-Routes.js");


var sequelizeForce = true;
if(process.env.PORT){
    sequelizeForce = false;
}

// Syncing our database and logging a message to the user upon success
db.sequelize.sync({ force: sequelizeForce }).then(function() {
  app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});

