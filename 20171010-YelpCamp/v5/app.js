var express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser"),
    mongoose   = require("mongoose"),
    passport   = require("passport"),
    LocalStrategy = require("passport-local"),
    Campground = require("./models/campground"),
    Comment    = require("./models/comment"),
    User       = require("./models/user"),
    seedDB     = require("./seeds");


mongoose.connect("mongodb://localhost/yelp_camp_v5", {useMongoClient: true});
mongoose.Promise = global.Promise;
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
//below line for styling
app.use(express.static(__dirname + "/public"));
seedDB();

//PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "I saw many a schooner go down on the open seas--yar",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    next();
});

//Schema setup now in ./models/campground.js

//Seed code now in seeds.js

//INDEX - show homepage
app.get("/", function(req, res){
    res.render("landing");
});

//INDEX - GET - show the existing campgrounds
app.get("/campgrounds", function(req, res){
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

//POST - add the new campground
app.post("/campgrounds", function(req, res){
    //get the data from the form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var description = req.body.description;
    var newCampground = {name: name, image: image, description: description}
    //create new campground and save to database
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log("An error has occurred.");
            console.log(err);
        }else{
            console.log(newlyCreated);
            //redirect/refresh campgrounds page
            res.redirect("/campgrounds");
        }
    })
});

//NEW - show form to create new campground
app.get("/campgrounds/new", isLoggedIn, function(req, res){
    res.render("campgrounds/new");
});

//SHOW - shows more info about specified campground
app.get("/campgrounds/:id", function(req, res){
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

//#================
//COMMENT ROUTES
//#================

app.get("/campgrounds/:id/comments/new", isLoggedIn, function(req, res){
    //find campground by id
    Campground.findById(req.params.id, function(err, campground){
        if(err){
            console.log(err)
        }else{
               res.render("comments/new", {campground: campground});
        }
    })
});

app.post("/campgrounds/:id/comments", isLoggedIn, function(req, res){
    //look up campground using id
    Campground.findById(req.params.id, function(err, campground){
       if(err){
           console.log(err);
           res.redirect("/campgrounds");
       }else{
//           console.log(req.body.comment);
           Comment.create(req.body.comment, function(err, comment){
               if(err){
                   console.log(err);
               }else{
                   campground.comments.push(comment);
                   campground.save();
                   res.redirect('/campgrounds/' + campground._id);
               }
           });
       }
    });
    //create new comment
    //connect new comment to campground
    //redirect campground show page
});

//===================
//REGISTER ROUTES
//===================

app.get("/register", function(req, res){
    res.render("register");
});

app.post("/register", function(req, res){
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render("register");
        }
        passport.authenticate("local")(req, res, function(){
           res.redirect("/campgrounds") 
        });
    });
});

//===================
//LOGIN ROUTES
//===================

app.get("/login", function(req, res){
    res.render("login");
});

app.post("/login", passport.authenticate("local", 
    {
        successRedirect: "/campgrounds",
        failureRedirect: "/login"
    }), function(req, res){
});

//===================
//LOGOUT ROUTES
//===================

app.get("/logout", function(req, res){
    req.logout();
    res.redirect("/campgrounds");
});

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
};

app.listen(3000, function(){
    console.log("YelpCamp online at port 3000")
});