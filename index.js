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
fileSystem.mkdir("noddy",function(err, result){
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
/*const http = require("http");

http.createServer((request, response) => {
  console.log(request.headers);
  response.end("Hello Noddy!!");
}).listen(3000);*/


// as long as it is not the root route, an error will be shown (i.e. the "hello all...")
/*const http = require("http");

http.createServer((request, response) => {
  if(request.url === "/") {
    response.end("Hello Noddy!!");
  }
  else {
    response.end("Hello all, this is not the root route")
  }
}).listen(3000);*/


//<----------------------------------------------------------------------------------------------------------------------------------------------->

//REST API

//RE -> REpresentational
//S -> State (the data)
//T -> Transfer

//Representing data by sharing after processing

//<----------------------------------------------------------------------------------------------------------------------------------------------->

const express = require("express");

//We need to initialise express and thus seen in the line below
const noddy = express();

//the line below is just to ask it to be expressed in a json format
noddy.use(express.json());

//HTTPS METHODS -> GET POST PUT DELETE
//GET -> To retrieve any data
//POST -> To send a data to the server
//PUT -> To Update an existing data
//DELETE -> to delete an existing data

//the "/" is the route that we want it to be displayed in
//the (request,response) is the callback method
noddy.get("/",(request,response) => {
  return response.json({data: "Hello guys!!"});
});



//the colon before the id just informs the code that the id is a variable and can be dynamically changed.
noddy.get("/b/:id",(req,res) => {
  const students = [
    {
      id:1,
      name:"Student1"
    },
    {
      id:2,
      name:"Student2"
    },
    {
      id:3,
      name:"Student3"
    },
    {
      id:4,
      name:"Student4"
    },
    {
      id:5,
      name:"Student5"
    }
  ]

// the studentID goes through the request from the url and checks for the id number
  const studentID = req.params.id;
  //the parseInt just converts the string to a int
  const getStudent = students.filter((student) => student.id === parseInt(studentID));
  return res.json({data: getStudent});
});




noddy.listen(3000, () => {
  console.log("Server on port 3000 is up and running");
});
