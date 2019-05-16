var express = require("express");
var app = express(); // Creates an instance of the express to be used
var fs = require('fs');

app.use(express.static(__dirname)); // Dunno, but I just added this in case

app.use('/about', function(req, res){
    console.log('User has just requested this endpoint');
    res.send('<b>Hello, Welcome to the about us page</b>');
});

app.use('/users', function(req, res){
    fs.readFile('./data1.json', 'utf-8', function(err, data){
        data = JSON.parse(data);
        res.send(data);
    });
    
});


app.listen(3000); //The localhost port for serving your page