//alert("بسم الله الرحمن الرحيم");
//Takes name and age

//alert("Hello world, from JS");
//var user1Name = prompt("Welcome, user. What is your first name?");
//alert("Hello " + user1Name);
//console.log(user1Name);
//
//var user2Name = prompt("What is your last name?");
//alert("Name recorded: " + user1Name + " " + user2Name);
//console.log(user2Name);
//
//var age = prompt("How old are you, " + user1Name + "? Don't worry, I'm not a stalker. Honest.");
//alert("User age recorded: " + age);
//console.log(age);
//
//alert("Welcome, " + user1Name + " " + user2Name + ". You are " + age + " years old. Congrats.");

//finds age (approximate--come back and find exact age)

//alert("Enter your birthdate to find out your approximate age in days: ");

var ageraw =  prompt("Enter your age in years to find your approximate age in days: ");
console.log(ageraw + " years old.");

var agecooked = ageraw * 365.25;

alert("You are roughly " + agecooked + " days old.");
console.log(agecooked + " days old.");