console.log('Houston, we have a connection');

//as can be tested in the browser JS console:
$("h1").click(function(){
    alert("h1 was clicked");
});

//this can select all buttons and apply to each the same
//rule, whereas in normal JS a selectAll and then a 
//loop would have had to be used.
$("button").click(function(){
	alert("Stop clicking the fucking button");
});

$("button").click(function(){
	$(this).css("background", "mauve")
});

$("button").click(function(){
	var content = $(this).text();
    console.log("\"" + content + "\"" + " has been clicked.");
});

//just registering the events
$("input[type='text']").keypress(function(){
    console.log("A key has been pressed.")
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        alert("You have submitted.");
    }
    console.log("A key has been pressed.")
});
