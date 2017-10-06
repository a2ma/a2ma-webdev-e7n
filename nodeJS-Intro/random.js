var randomData = require("faker");

function printRandomData(lines){
    console.log("====================")
    console.log("WELCOME TO MY SHOP")
    console.log("====================")
//  var product = randomData.commerce.productName();
//  var price = randomData.commerce.price();
//  console.log((product) + " - " + (price));
    
//    var iterations = prompt("How many products would you like to retrieve with price data?")
//    console.log(randomData.commerce.productName());
    
    for(var i = 0; i < lines; i++){
        var product = randomData.commerce.productName();
        var price = randomData.commerce.price();
        console.log((product) + " - $" + (price));
    }
};

printRandomData(10);

//    console.log("====================");
//    console.log("WELCOME TO MY SHOP");
//    console.log("====================");
//console.log(randomData.commerce.productName() + " - $" + randomData.commerce.price());
//    
//for(var i = 0; i > 10; i++){ //took me ages to realize the running condition was an i > 10
////    var product = randomData.commerce.productName();
////    var price = randomData.commerce.price();
//    console.log(randomData.commerce.productName() + " - $" + randomData.commerce.price());
//}
