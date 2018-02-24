var Campground = require("../models/campground");
var Comment = require("../models/comment");

//all middleware in yelpcamp project grouped here
var middlewareObj = {};


middlewareObj.isAuthorizedCampground = function(req, res, next){
    //check if user logged in
    if(req.isAuthenticated()){
        Campground.findById(req.params.id, function(err, foundCampground){
            if(err){
                req.flash("error", "An error occured. Please try again later or contact an administrator.");
                res.redirect("back");
            } else{
                if(!foundCampground){
                    req.flash("error", "Requested item not found. Please go back to the list or check your entered URL.");
                    return res.redirect("back");
                }
                
                //checking here if user owns campground
                
                if(foundCampground.author.id.equals(req.user._id)){
                    next();
                }else{
                    req.flash("error", "You do not have permission to carry out the requested operation.");
                    res.redirect("back");
                }
            }
        });
    }else{
        req.flash("error", "Log in to do that!");
        console.log("Error. Please log in to attempt that operation.");
        res.redirect("back");
    }
}

middlewareObj.isAuthorizedComment = function(req, res, next){
    //check if user logged in
    if(req.isAuthenticated()){
        Comment.findById(req.params.comment_id, function(err, foundComment){
            if(err){
                req.flash("error", "An error occured. Please try again later or contact an administrator.");                
                res.redirect("back");
            } else{
                //does user own comment?
                if(foundComment.author.id.equals(req.user._id)){
                    next();
                }else{
                    req.flash("error", "You do not have permission to carry out the requested operation.");                    
                    res.redirect("back");
                }
            }
            });
    }else{
        console.log("Error. Log in to attempt that operation.");
        res.redirect("back");
    }
}


middlewareObj.isLoggedIn = function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash("error", "Please log in to do that.");
    res.redirect("/login");
};

module.exports = middlewareObj;