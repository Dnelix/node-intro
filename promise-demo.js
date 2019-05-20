var promise = new Promise(function (resolve, reject){
    resolve(); //This function would be called if your code executes successfully
    //reject(); //This function would be called if your code execution failes
});
promise.then(function(){
    console.log("OKAY!!!"); //Do something here if code execution is successful. i.e: if resolve()
})
.catch(function(){
    console.error("Failed!"); //Do something here (throw an error) if it fails. i.e: if reject()
});