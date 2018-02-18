//all middleware in yelpcamp project grouped here
var middlewareObj = {};


middlewareObj.isAuthorizedCampground = function(req, res, next){
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
                //checking here if user owns campground
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

middlewareObj.isAuthorizedComment = function(req, res, next){
    //check if user logged in
    if(req.isAuthenticated()){
        Comment.findById(req.params.comment_id, function(err, foundComment){
            if(err){
                res.redirect("back");
            } else{
                //does user own comment?
                if(foundComment.author.id.equals(req.user._id)){
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


middlewareObj.isLoggedIn = function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
};

module.exports = middlewareObj;