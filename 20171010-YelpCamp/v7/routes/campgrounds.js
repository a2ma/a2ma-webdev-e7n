var express = require("express");
var router  = express.Router();
var Campground = require("../models/campground");


//INDEX - GET - show the existing campgrounds
router.get("/", function(req, res){
    //get all campgrounds from DB
    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log("An error has occurred.");
            console.log(err);
        }else{
            res.render("campgrounds/index", {campgrounds:allCampgrounds});
        }
    });
});

//CREATE - add the new campground
router.post("/", isLoggedIn, function(req, res){
    //get the data from the form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var description = req.body.description;
    var author = {
        id: req.user._id,
        username: req.user.username
    }
    var newCampground = {name: name, image: image, description: description, author: author}
    //create new campground and save to database
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log("An error has occurred.");
            console.log(err);
        }else{
//            console.log(newlyCreated);
            console.log(newlyCreated)
            //redirect/refresh campgrounds page
            res.redirect("/campgrounds");
        }
    })
});

//NEW - show form to create new campground
router.get("/new", isLoggedIn, function(req, res){
    res.render("campgrounds/new");
});

//SHOW - shows more info about specified campground
router.get("/:id", function(req, res){
    //find campground with requested ID
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if(err){
            console.log(err);
        }else{
            console.log(foundCampground);
            //render template with requested campground
            res.render("campgrounds/show", {campground: foundCampground});
        }
    });
});


//middleware
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
};

module.exports = router;