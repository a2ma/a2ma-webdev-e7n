console.log("Connected");

$("ul").on("click", "li", function(){ //this previously was a click, carried out directly on the li
    $(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
       $(this).remove; 
    });
    event.stopPropagation();
});


$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        //grab new todo text from input field, store in variable
        var todoText = $(this).val();
        //clear the actual field
        $(this).val("");
        //create new todo li from todoText
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
    }
});

$(".fa-pencil-square-o").click(function(){
    $("input[type='text']").fadeToggle();
});


//When an li is clicked, turns grey and crossed out

//$("li").click(function(){
//    $(this).css("color", "grey");
//    $(this).css("text-decoration", "line-through");
//});

//instead of doing the code above, one can use an object with key value pairs to specify all the style changes at once:
//$("li").click(function(){
//    $(this).css({
//       color: "gray",
//       textDecoration: "line-through" 
//    });
//});

//to toggle, can use if else setup
//$("li").click(function(){
////    console.log($(this).css("color"));
//    if($(this).css("color") === "rgb(128, 128, 128)"){ //first used "gray," but the color is measured in the browser as RGB value, not name
//    //if li is already gray
//        $(this).css({
//            color: "black",
//            textDecoration: "none" 
//        });
//    }
//    else{
//    //else if already gray
//        //turn it gray and cross out
//        $(this).css({
//           color: "gray",
//           textDecoration: "line-through" 
//        });
//    }
//});

//the above code works...but is too lengthy. To shorten, a simple css class toggle can be applied.

//$("span").click(function(event){
//    $(this).parent().fadeOut.remove();
//    event.stopPropagation();
//});

//with click the code works for the existing li's at runtime, but is not applied to
//added li's, because click was used, while 'on' applies to existing and future. However, when using
//on, only elements that all exist at runtime may be used; if only a few li's exist at first 
//and have the on applied to them, it will still work only on them--what needs to be targeted is the ul
//holding the li's, since it already all exists--and, the li's can be specified within the callback method.