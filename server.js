// Reuireing the express server
const express = require('express');

// Crating the body code parser
const bodyParser = require("body-parser");

// Intialize the Web Application Server with Express.
const app = express();

// PORT variable to specify the PORT that the server is serving.
let PORT = process.env.PORT || 3000 ;

// View Engine 
app.set('view engine', 'pug');

// Set the views
app.set("views", "./views");



// Middleware for parsing form data
app.use(bodyParser.urlencoded({ extended: true }));



// Assigning the static files to the app.
app.use (express.static("public"));


// -------------- Routes Import

// const userRoutes = require('./routes/users')

// --------------------------------------- Routes -----------------

app.get("/", (req, res) => {
    console.log('Home');
    res.render("home", { title: "Home", active: "Home" });
})

app.get("/home", (req, res) => {
    console.log('Home'); // For test only
    res.render("home", { title: "Home", active: "Home" });
})

app.get("/about", (req, res) => {
    console.log('About'); // For test only
    res.render("about", { title: "About", active: "About" });
  });
  
  app.get("/contactus", (req, res) => {
    console.log('Contact Us'); // For test only
    res.render("contactUs", { title: "Contact Us", active: "Contact Us" });
  });

  // Post a message from Contact us
  app.post("/contactus", (req, res) => {
    console.log("Contact Form Data:", req.body); // console the request body object.
    res.send(`Thank you ${req.body.name} for contacting us! We will get back to you shortly.`);
  });

  app.post("/about", (req,res) => {
    console.log ("DownLoad Button has been clicked", req.body);
    res.download('./images/AMG.jpg')
  })




// --------------------------- Starting the Server -------------------------
// Staring the application server 
app.listen(PORT, (req, res) => {
    console.log(`Server started listening to the PORT # ${PORT}`);
})