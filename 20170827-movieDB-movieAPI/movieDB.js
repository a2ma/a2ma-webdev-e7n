alert("connected");

var movies = [
  {
    name: "In Bruges",
    haveWatched: true,
    rating: 5
  },
  {
    name: "7 Psychopaths",
    haveWatched: true,
    rating: 5
  },
  {
    name: "Mulholland Drive",
    haveWatched: false,
    rating: 5
  }
]

console.log(movies);

function buildString(movie){
  var result = "You have ";
  if (movie.haveWatched){
    result += "watched ";
  }else{
    result += "not seen ";
  }
  result += "\"" + movie.name + "\" - " +  movie.rating + " stars.";
  return result;
}
movies.forEach(function(movie){
  console.log(buildString(movie));
})
