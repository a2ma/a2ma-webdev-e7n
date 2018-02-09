var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo");
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
    posts: [postSchema] //not the model, the Schema
});

var User = mongoose.model("User", userSchema);



//var newUser = new User({
//    email: "radagast@maia.org",
//    name: "Radagast Brown"
//});

//var newUser = new User({
//    email: "saruman@maia.org",
//    name: "Saruman White"
//});
////
//newUser.posts.push({
//    title: "I must learn the ways of the enemy to defeate him",
//    content: "Just be a good listener and you'll pick it up in no time!",
//});

//newUser.posts.push({
//    title: "How to talk to Mice",
//    content: "Just be a good listener and you'll pick it up in no time!",
//});
//
//newUser.save(function(err, user){
//    if(err){
//        console.log("An error has occurred:");
//        console.log(err);
//    }else{
//        console.log(user);
//    }
//});

//var newPost = new Post({
//    title: "How to Skin the Cat",
//    content: "Blood and bones! Blood and skin! Eyes that bulge with fear. And wicked grins."
//});
//
//newPost.save(function(err, post){
//    if(err){
//        console.log("An error has occurred:");
//        console.log(err);
//    }else{
//        console.log(post);
//    }
//});

User.findOne({name: "Radagast Brown"},function(err, user){
    if(err){
        console.log("An error has occurred:");
        console.log(err);
    }else{
        user.posts.push({
            title: "Tremble or not?",
            content: "Tremble. Tremble! It's ok to tremble."
        });
//        user.posts.push({
//           Post.findOne({title: "How to Skin the Cat"});
//        });
        user.save(function(err, user){
            if(err){
                console.log("An error has occurred:");
                console.log(err);
            }else{
                console.log(user);
            }
        });
    }
});