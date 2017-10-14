var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

var campgrounds = [
    {name: "Salmon Creek", image: "https://www.nps.gov/brca/planyourvisit/images/camper-tent_001.jpg"},
    {name: "Crater Lake National Park", image: "https://upload.wikimedia.org/wikipedia/commons/0/05/Biskeri-_Camping_I_IMG_7238.jpg"},
    {name: "Joshua Tree National Park", image: "https://upload.wikimedia.org/wikipedia/commons/0/05/Biskeri-_Camping_I_IMG_7238.jpg"},
    {name: "Grand Canyon National Park", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Fairy_Meadows_Camping.jpg/640px-Fairy_Meadows_Camping.jpg"},
    {name: "Death Valley National Park", image: "https://www.nps.gov/havo/planyourvisit/images/Namakanipaio_960.jpg"},
]

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    res.render("campgrounds", {campgrounds:campgrounds});
});

app.post("/campgrounds", function(req, res){
    //get the data from the form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    
    var newCampground = {name: name, image: image}
    
    campgrounds.push(newCampground);
    //redirect/refresh campgrounds page
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});

app.listen(3000, function(){
    console.log("YelpCamp online at port 3000")
});