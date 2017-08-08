// npm install nodemon
// This makes it so we dont have to restarrt the server every time we make a change
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

var PORT = process.env.PORT || 8080;
// BodyParser makes it possible for our server to interpret data sent to it.

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);



// to catch the sumbission we use app.post
// express-validator can be used to validate emails in an express application, just install it like anything else npm install express-validator

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});