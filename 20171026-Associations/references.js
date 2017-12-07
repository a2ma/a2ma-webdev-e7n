var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_references", {useMongoClient: true});
mongoose.Promise = global.Promise;

//POST- title, content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

var Post = mongoose.model("Post", postSchema);

//USER - email, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        }
    ]
});

var User = mongoose.model("User", userSchema);

//User.create({
//   email: "philomena@myth.org",
//    name: "Philomena Hump"
//});
//
//Post.create({
//    title: "How to Make Crops Grow Marvelously!",
//    content: "Manure, manure, manure! Cannot stress that shit enough! Get nose-clamps and start shoveling!"
//}, function(err, post){
//    User.findOne({email: "philomena@myth.org"}, function(err, foundUser){
//        if(err){
//            console.log(err);
//        }else{
//            foundUser.posts.push(post);
////            console.log(post);
//            foundUser.save(function(err, data){
//                if(err){
//                    console.log(err);
//                }else{
//                    console.log(data);
//                }
//            });
//        }
//    });
//});

//find user, find all posts for user
User.findOne({email: "philomena@myth.org"}).populate("posts").exec(function(err, user){
    if(err){
        console.log(err);
    }else{
        console.log(user);
    }
});