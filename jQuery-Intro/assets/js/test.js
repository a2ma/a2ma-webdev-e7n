console.log('Houston, we have a connection');

//as can be tested in the browser JS console:
$("h1").click(function(){
    console.log("h1 was clicked");
});

//this can select all buttons and apply to each the same
//rule, whereas in normal JS a selectAll and then a 
//loop would have had to be used.
//$("button").click(function(){
//	alert("Stop clicking the fucking button");
//});

//$("button").click(function(){
//	$(this).css("background", "mauve")
//});
//
//$("button").click(function(){
//	var content = $(this).text();
//    console.log("\"" + content + "\"" + " has been clicked.");
//});

//just registering the events
//$("input[type='text']").keypress(function(){
//    console.log("A key has been pressed.")
//});
//
//$("input[type='text']").keypress(function(event){
//    if(event.which === 13){
//        alert("You have submitted.");
//    }
//    console.log("A key has been pressed.")
//});
//
//$('button').on('dblclick', function(){
//   alert('YOU HAVE DOUBLE CLICKED!');
//});
//
//$('button').on('dragstart', function(){
//   alert('DRAG STARTED!'); 
//});
//
//$("input[type='text']").on('keypress', function(){
//   alert('KEYPRESS IN AN INPUT FIELD!'); 
//});
//
//$('h1').on('click', function(){
//   $(this).css("color", "green"); 
//});


//This would change all of the h1s
//$('h1').on('click', function(){
//   $("h1").css("color", "green"); 
//});

//$("button").on('mouseenter', function(){
//   console.log('Hover over button'); 
//});
//
//$("button").on('mouseenter', function(){
//   $(this).css("font-weight", "bold"); 
//});
//
//$("button").on('mouseleave', function(){
//   $(this).css("font-weight", "normal"); 
//});

//not working
//$("#neil").on("click", function(){
//   $("#neil").fadeOut(); 
//});

//speed can be controlled with a number in milliseconds, or 'slow', 'fast'
//$("button").on("click", function(){
//   $("div").fadeOut(); 
//});
//$("button").on("click", function(){
//    $("div").fadeOut(1000);
//    console.log('Fade has completed.') //this will be printed out before the fade is actually completed, since JS starts it and then moves on
//});

$("button").on("click", function(){
    $("div").fadeOut(1000, function(){
        console.log('Fade has completed.') //this will be printed out only once the fade is actually completed
        //could use the callback function to remove the elements that have faded out from the DOM - $(this).remove();
    });
});

$("button").on("click", function(){
   $("div").fadeToggle(); 
});

//there are also slideUp() and slideDown() and slideToggle()
