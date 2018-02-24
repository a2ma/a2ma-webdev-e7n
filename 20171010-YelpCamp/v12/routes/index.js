var express = require("express");
var router  = express.Router();
var passport = require("passport");
var User = require("../models/user");

//Root route - INDEX - show homepage
router.get("/", function(req, res){
    res.render("landing");
});

//===================
//AUTHENTICATION ROUTES
//===================

//registration form
router.get("/register", function(req, res){
    res.render("register");
});

//registration logic
router.post("/register", function(req, res){
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            req.flash("error", err.message);
            return res.redirect("/register");
        }
        passport.authenticate("local")(req, res, function(){
            req.flash("success", "Welcome, " + user.username);        
            res.redirect("/campgrounds"); 
        });
    });
});

//Login form
router.get("/login", function(req, res){
    res.render("login");
});

//Login route
router.post("/login", passport.authenticate("local", 
    {
        successRedirect: "/campgrounds",
        failureRedirect: "/login"
    }), function(req, res){
});

//logout route
router.get("/logout", function(req, res){
    req.logout();
    req.flash("success", "You have successfully logged out!");
    res.redirect("/campgrounds");
});

module.exports = router;