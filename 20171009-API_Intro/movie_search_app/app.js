var express = require("express");
var request = require("request");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("search");
//   res.send("Welcome to the Movie Database") 
//     <a href='results'><button>Click Here to start</button></a>
});

app.get("/results", function(req, res){
    var searchTerm = req.query.search_term;
    var url = "http://www.omdbapi.com/?s=" + searchTerm + "&apikey=thewdb"; 
    request(url, function(error, response, body){
        if(!error && response.statusCode == 200){
            var parsedData = JSON.parse(body);
            console.log(parsedData);
//            res.send(parsedData);
            res.render("results", {parsedData: parsedData});
        }
    });
});

app.listen(3000, function(){
    console.log("Movie App connected at port 3000");
});
