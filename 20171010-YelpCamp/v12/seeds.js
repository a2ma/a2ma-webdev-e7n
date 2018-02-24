var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest",
        image: "http://www.weatherwizkids.com/wp-content/uploads/2015/02/cirrus1.jpg",
        description: "The clouds come here to rest their weary wings. Come rest with them. The clouds come here to rest their weary wings. Come rest with them. The clouds come here to rest their weary wings. Come rest with them. The clouds come here to rest their weary wings. Come rest with them. The clouds come here to rest their weary wings. Come rest with them. The clouds come here to rest their weary wings. Come rest with them. The clouds come here to rest their weary wings. Come rest with them. The clouds come here to rest their weary wings. Come rest with them. The clouds come here to rest their weary wings. Come rest with them. The clouds come here to rest their weary wings. Come rest with them. The clouds come here to rest their weary wings. Come rest with them. The clouds come here to rest their weary wings. Come rest with them. The clouds come here to rest their weary wings. Come rest with them."
    },
    {
        name: "Hunter's Retreat",
        image: "http://www.weatherwizkids.com/wp-content/uploads/2015/02/cirrus1.jpg",
        description: "When the hounds grow weary, let them frolic by the creeks at Hunter's Retreat. When the hounds grow weary, let them frolic by the creeks at Hunter's Retreat. When the hounds grow weary, let them frolic by the creeks at Hunter's Retreat. When the hounds grow weary, let them frolic by the creeks at Hunter's Retreat. When the hounds grow weary, let them frolic by the creeks at Hunter's Retreat. When the hounds grow weary, let them frolic by the creeks at Hunter's Retreat. When the hounds grow weary, let them frolic by the creeks at Hunter's Retreat. When the hounds grow weary, let them frolic by the creeks at Hunter's Retreat. When the hounds grow weary, let them frolic by the creeks at Hunter's Retreat. When the hounds grow weary, let them frolic by the creeks at Hunter's Retreat. When the hounds grow weary, let them frolic by the creeks at Hunter's Retreat. When the hounds grow weary, let them frolic by the creeks at Hunter's Retreat. When the hounds grow weary, let them frolic by the creeks at Hunter's Retreat. When the hounds grow weary, let them frolic by the creeks at Hunter's Retreat."
    },
    {
        name: "Salmon Creek",
        image: "http://www.weatherwizkids.com/wp-content/uploads/2015/02/cirrus1.jpg",
        description: "Catch a salmon, but be wise--and canny, lest some bear come by and catch you, for a turn. Catch a salmon, but be wise--and canny, lest some bear come by and catch you, for a turn. Catch a salmon, but be wise--and canny, lest some bear come by and catch you, for a turn. Catch a salmon, but be wise--and canny, lest some bear come by and catch you, for a turn. Catch a salmon, but be wise--and canny, lest some bear come by and catch you, for a turn. Catch a salmon, but be wise--and canny, lest some bear come by and catch you, for a turn. Catch a salmon, but be wise--and canny, lest some bear come by and catch you, for a turn. Catch a salmon, but be wise--and canny, lest some bear come by and catch you, for a turn. Catch a salmon, but be wise--and canny, lest some bear come by and catch you, for a turn. Catch a salmon, but be wise--and canny, lest some bear come by and catch you, for a turn."
    }
];

function seedDB() {
    //erase campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("Campgrounds database has been cleared.")
        
        //add campgrounds
        //Colt Steele says this had to be moved into callback
        //to ensure that removal is finished before addition is started;
        //however, I wasn't having problems with that
        //I moved it here anyway.
        
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err);
                }else{
                    console.log("Added campground.");
                    
                    //create a comment
                    Comment.create(
                        {
                            text: "Great experience, 10/10 would do it again.",
                            author: "Sophocles"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            }else{
                                campground.comments.push(comment);
                                campground.save();
                                console.log("created new comment")
                            }
                        }                    
                    );
                }
            })
        })
    })
    
}

module.exports = seedDB;