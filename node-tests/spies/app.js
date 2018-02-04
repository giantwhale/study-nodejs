var db = require('./db');


module.exports.handleSignup = (email, password) => {
    // Check if the email already exists
    db.saveUser({email, password})
    // save the user to the database

    // Send the welcome email
    
};