//Use Express middleware to manage incoming requests and 
//dispatch them to corresponding behaviours
const express = require('express');

//Create an application 
const app = express();

const PORT = process.env.PORT || 3000;

//Send back a raw message every time the server got an 
//incoming request
app.get('*', (req, res) => {

    res.send('Express response');

});

//Listen on the port 3000
app.listen(PORT);

//Print out where the server is
console.log("Server is running on port: " + PORT);

