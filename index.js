//PORT
//Entry point for our server
//Gateway through which external services can enter your server
//e.g. of external services (databases, authentication, security services)
//REMEMBER: you cannot let two different servers utilise the same port



//HEADERS --> additional coded information
// A -----------> B




//HTTPS STATUS CODE
//This is a numeric code to define some situation
//e.g. success - 200,
//failure - 404 (not available) - 401 (not authorised) - 403 (authorised but forbidden),
//server error - 500


//JSON
//It is a shortened format to exchange information/data between two servers
//present in an object format and in the object format it is present in key-value pairs


//filesystem (one of the internal packages)
//fs is the official name for the file system
//require is one of the keyword to import the external/internal modules to node


//the fileSystem.writeFile() is used to create a file and the method fileSystem.unlink is used to remove the file
//first callback method is the name of the file, second is the text inside the file, callback function (it has error and result)


/*
const fileSystem = require("fs");
fileSystem.unlink("noddy.txt",function(err, result){
  if(err){
    console.log(err);
  }
});*/ 


//to create a folder named noddy, we use the following code below
//the fileSystem.mkdir() is used to create a folder and fileSystem.rmdir() is used to remove the folder

/*
const fileSystem = require("fs");
fileSystem.rmdir("noddy",function(err, result){
  if(err){
    console.log(err);
  }
});*/

//to check the operating system and the bit version
/*const operatingSystem = require("os");
console.log(operatingSystem.arch());
console.log(operatingSystem.platform());*/


//http
//the method to create a port and a local server
const http = require("http");

http.createServer((request, response) => {
  console.log(request.headers);
  response.end("Hello Noddy!!");
}).listen(3000);
