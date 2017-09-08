//connection check
//if(jQuery){
//    alert("Great Success!");
//}else{
//    alert("You are a big fat failure.");
//}

$("div").css("background", "purple");
$(".highlight").css("width", "200px"); //or div.highlight
$("#third").css("border", "2px dotted orange");
$("div:first-of-type").css("color", "brown");
//can also be: $("div:first").css("color", "brown"); this is slower though because first-of-type is native css selector and first is built into jQuery, has to run more
