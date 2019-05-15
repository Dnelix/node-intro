fs = require('fs');

function fxnName(err, data){
    console.log('data:', data);
}

fs.readdir('C:/', fxnName);

console.log("this comes after");