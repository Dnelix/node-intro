var express = require("express");

var app = express(); // Creates an instance of the express to be used

app.use(express.static(__dirname));
app.listen(3000); //The localhost port for serving your page