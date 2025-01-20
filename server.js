// Reuireing the express server
const express = require('express');

// Intialize the Web Application Server with Express.
const app = express();

// PORT variable to specify the PORT that the server is serving.
let PORT = process.env.PORT || 3000 ;

// View Engine 
app.set('view engine', 'pug');

// Staring app server 
app.listen(PORT, (req, res) => {
    console.log(`Server started listening to the PORT # ${PORT}`);
})