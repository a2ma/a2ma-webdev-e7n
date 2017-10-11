var request = require("request");

////version on github page of request package
//request("https://google.com", function(error, response, body){
//    if(!error && response.statusCode == 200){
//        console.log(body); //shows html for google homepage
//    }
//});

////version written by colt steele
//request("https://google.com", function(error, response, body){
//    if(error){
//        console.log("Something has gone wrong.")   
//        console.log(error)   
//    }else{
//        if(response.statusCode == 200){
//            console.log(body); //shows html for google homepage
//        }
//    }
//});

//calling an API - Yahoo Weather API

request("https://query.yahooapis.com/v1/public/yql?q=select%20astronomy.sunset%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22maui%2C%20hi%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys", function(error, response, body){
    if(!error && response.statusCode == 200){
        var parsedData = JSON.parse(body);
        console.log(parsedData["query"]["results"]["channel"]["astronomy"]["sunset"]); //body shows information in JSON, but as string--therefore has to be parsed
    }
});