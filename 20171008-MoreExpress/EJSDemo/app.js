var express = require("express");
var app = express();

app.use(express.static("public"));

app.set("view engine", "ejs");


app.get("/", function(req, res){
    res.render("home");
});

app.get("/welcome", function(req, res){
    res.render("welcome_all");
});

app.get("/welcome/:user", function(req, res){
    var user = req.params.user;
    res.render("welcome", {username: user});
});

app.get("/posts", function(req, res){
    var posts = [
        {title: "Post 1", author: "Susie"},
        {title: "Post 2", author: "Dan"},
        {title: "Post 3", author: "Joey"},
    ]
    
    res.render("posts", {posts: posts})
});


app.listen(3000, function(){
    console.log("Server listening on port 3000.")
});