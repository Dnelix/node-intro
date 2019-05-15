var fs = require('fs');

// First method
var pageString = '{ "name" : "Felix" }'; // notice these are all enclosed in quotes and on one line
fs.writeFile('page1.json', pageString);

// Second method
var pageString2 = {
    name : "Felix",
    age : 25,
    nation : "Canada"
}                           // the JSON.stringify method will convert these to strings
fs.writeFile('page1.json', JSON.stringify(pageString2));