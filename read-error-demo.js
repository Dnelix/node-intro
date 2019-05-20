var fs = require('fs');

fs.readFile('./data2.json', 'utf-8', function(err, data){
    if(err){
        console.error("Cannot read file!");
    } else {
        try {
            console.log(data);
            data = JSON.parse(data);
            console.log(data.name);
        } catch (e){
            console.error("Invalid JSON in file");
        }
    }
});