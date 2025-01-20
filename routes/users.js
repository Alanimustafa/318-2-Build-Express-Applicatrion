// All Users Routes

// Reauiring Express
const express = require('express'); 

// Creating a userRoute mini application
const router = express();

//Creating the user router routes

router.route("/")
    .get((req,res) => {
        res.send('GET for users received')
    })
    .post((req,res) => {
        res.send('Create User (POST) received')
    })
    .put((req,res) => {
        res.send('Edit User (PUT) received')
    })
    .delete((req,res) => {
        res.send('DELETE User (DELETE) Received')
    })

module.exports = router;