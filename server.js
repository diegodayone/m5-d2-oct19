const express = require("express") //we use express
const server = express(); //we create our instance of express
const studentService = require("./src/services/students.js") //we import our students router


server.use(express.json()) //we specify that we are gonna handle the BODY of the requests as JSON
server.use("/students", studentService) //we assign the studentRouter on /students

server.listen(3123, () => { //we run the server
    console.log("Hey man, the server is listening on 3123")
})