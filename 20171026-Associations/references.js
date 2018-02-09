var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_references");
mongoose.Promise = global.Promise;


//A2MA: where post schema and model used to be
var Post = require("./models/post");

//A2MA: where user schema and model used to be
var User = require("./models/user");

User.create({
   email: "philomena@myth.org",
    name: "Philomena Hump"
});

Post.create({
    title: "How to Make Enemies and Alienate People pt3",
    content: "Manure, manure, manure! Cannot stress that shit enough! Get nose-clamps and start shoveling!"
}, function(err, post){
    User.findOne({email: "philomena@myth.org"}, function(err, foundUser){
        if(err){
            console.log(err);
        }else{
            foundUser.posts.push(post._id); //for mongodb 3.6 / mongoose 5.0.0
//            foundUser.posts.push(post);
//            console.log(post);
            foundUser.save(function(err, data){
                if(err){
                    console.log(err);
                }else{
                    console.log(data);
                }
            });
        }
    });
});

//find user, find all posts for user
//User.findOne({email: "philomena@myth.org"}).populate("posts").exec(function(err, user){
//    if(err){
//        console.log(err);
//    }else{
//        console.log(user);
//    }
//});