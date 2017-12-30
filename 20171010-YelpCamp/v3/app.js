var express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser"),
    mongoose   = require("mongoose"),
    Campground = require("./models/campground"),
    seedDB     = require("./seeds");


mongoose.connect("mongodb://localhost/yelp_camp_v3", {useMongoClient: true});

mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

seedDB();

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
            res.render("index", {campgrounds:allCampgrounds});
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
app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
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
            res.render("show", {campground: foundCampground});
        }
    });

});

app.listen(3000, function(){
    console.log("YelpCamp online at port 3000")
});


//campgrounds.push(newCampground); //used for the array that was used before the database

//Campground.create({
//    name: "Salmon Creek", 
//    image: "https://www.nps.gov/brca/planyourvisit/images/camper-tent_001.jpg"
//}, function(err, newCamp){
//    if(err){
//        console.log("An error has occurred.")
//        console.log(err);
//    }else{
//        console.log("New campground added.");
//        console.log(newCamp);
//    }
//});
//
//Campground.create({
//    name: "Crater Lake National Park", 
//    image: "https://upload.wikimedia.org/wikipedia/commons/0/05/Biskeri-_Camping_I_IMG_7238.jpg"
//}, function(err, newCamp){
//    if(err){
//        console.log("An error has occurred.")
//        console.log(err);
//    }else{
//        console.log("New campground added.");
//        console.log(newCamp);
//    }
//});
//
//Campground.create({
//    name: "Joshua Tree National Park", 
//    image: "https://upload.wikimedia.org/wikipedia/commons/0/05/Biskeri-_Camping_I_IMG_7238.jpg"
//}, function(err, newCamp){
//    if(err){
//        console.log("An error has occurred.")
//        console.log(err);
//    }else{
//        console.log("New campground added.");
//        console.log(newCamp);
//    }
//});

//var campgrounds = [
//    {name: "Salmon Creek", image: "https://www.nps.gov/brca/planyourvisit/images/camper-tent_001.jpg"},
//    {name: "Crater Lake National Park", image: "https://upload.wikimedia.org/wikipedia/commons/0/05/Biskeri-_Camping_I_IMG_7238.jpg"},
//    {name: "Joshua Tree National Park", image: "https://upload.wikimedia.org/wikipedia/commons/0/05/Biskeri-_Camping_I_IMG_7238.jpg"},
//    {name: "Grand Canyon National Park", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Fairy_Meadows_Camping.jpg/640px-Fairy_Meadows_Camping.jpg"},
//    {name: "Death Valley National Park", image: "https://www.nps.gov/havo/planyourvisit/images/Namakanipaio_960.jpg"},
//]

//Campground.create({
//    name: "Salmon Creek", 
//    image: "https://www.nps.gov/brca/planyourvisit/images/camper-tent_001.jpg",
//    description: "This is a charming locale, guaranteed to give you that authentic outdoors experience you need to unwind and connect with nature!"
//}, function(err, newCamp){
//    if(err){
//        console.log("An error has occurred.")
//        console.log(err);
//    }else{
//        console.log("New campground added.");
//        console.log(newCamp);
//    }
//});