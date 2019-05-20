var fs = require('fs');
var promise = require('bluebird');

promise.promisifyAll(fs);

fs.readFileAsync('./data2.json')
    .then(JSON.parse)
    .then(function(val){console.log(val);})
    .catch(SyntaxError, function(e){
        console.error("Invalid JSON in file");
    })
    .catch(function(e){
        console.error("Unable to read file!");
    });