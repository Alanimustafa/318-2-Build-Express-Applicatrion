// Reuireing the express server
const express = require('express');

// Intialize the Web Application Server with Express.
const app = express();

// PORT variable to specify the PORT that the server is serving.
let PORT = process.env.PORT || 3000 ;

// View Engine 
app.set('view engine', 'pug');

// Set the views
app.set("views", "./views");

// Staring app server 
app.listen(PORT, (req, res) => {
    console.log(`Server started listening to the PORT # ${PORT}`);
})


app.use (express.static("public"));


// -------------- Routes Import

// const userRoutes = require('./routes/users')

// --------------------------------------- Routes -----------------

app.get("/", (req, res) => {
    console.log("This is the main Route");
    res.send('This is the main Route');
})