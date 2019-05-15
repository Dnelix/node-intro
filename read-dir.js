var fs = require('fs');

fs.readdir('C:/users/FELIX/Desktop', function(err, data){
    console.log(data);
});