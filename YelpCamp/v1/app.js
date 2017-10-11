var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    var campgrounds = [
        {name: "Salmon Creek", image: "url"},
        {name: "Salmon Creek", image: "url"},
        {name: "Salmon Creek", image: "url"},
        {name: "Salmon Creek", image: "url"},
        {name: "Salmon Creek", image: "url"},
    ]
});

app.listen(3000, function(){
    console.log("YelpCamp online at port 3000")
});