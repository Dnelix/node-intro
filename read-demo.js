var fs = require('fs');

// First method
fs.readFile('./data1.json', 'utf-8', function(err, data){
    console.log(data);
    data = JSON.parse(data); // this is done so we can be able to get individual objects like below
    console.log(data.name);
});

// Second Method
var data = require('./data1.json');
console.log(data);
console.log(data.language)