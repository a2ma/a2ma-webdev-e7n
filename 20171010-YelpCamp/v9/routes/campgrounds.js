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

//EDIT CAMPGROUND ROUTE
router.get("/:id/edit", isAuthorized, function(req, res){
    Campground.findById(req.params.id, function(err, foundCampground){
        res.render("campgrounds/edit", {campground: foundCampground});
    });
});

//UPDATE CAMPGROUND ROUTE
router.put("/:id", isAuthorized, function(req, res){
    //find and update the correct campground
    Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCampground){
       if(err){
           res.redirect("/campgrounds");
       } else{
           //redirect somewhere (show page)
           res.redirect("/campgrounds/" + req.params.id);
       }
    });

});

//DESTROY CAMPGROUND ROUTE
router.delete("/:id", isLoggedIn, isAuthorized, function(req, res){
    Campground.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.redirect('/campgrounds');
            console.log(err);
        } else {
            res.redirect('/campgrounds');            
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

function isAuthorized(req, res, next){
    //check if user logged in
    if(req.isAuthenticated()){
        Campground.findById(req.params.id, function(err, foundCampground){
            if(err){
                res.redirect("back");
            } else{
                //check if user owns the campground post      
                // console.log("foundCampground.author.id - " + foundCampground.author.id); //mongoose object
                // console.log("req.user._id - " + req.user._id); //string
                // if(foundCampground.author.id === req.user._id) //can't use this because the two comparees are of different types
                //can however use a method in mongoose
                if(foundCampground.author.id.equals(req.user._id)){
                    next();
                }else{
                    // res.send("You do not have permission to carry out the requested operation.");
                    res.redirect("back");
                }
            }
            });
    }else{
        console.log("Error. Log in to attempt that operation.")
        // res.send("Error. Log in to attempt that operation.")
        res.redirect("back");
    }
}

module.exports = router;