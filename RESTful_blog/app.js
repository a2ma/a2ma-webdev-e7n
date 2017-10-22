var express    = require("express"),
    bodyParser = require("body-parser"),
    mongoose   = require("mongoose"),
    app        = express();


//APP CONFIG
mongoose.connect("mongodb://localhost/restful_blog_app", {useMongoClient: true});
mongoose.Promise = global.Promise;
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

//MONGOOSE SCHEMA/MODEL CONFIG
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
})

var Blog = mongoose.model("Blog", blogSchema);

//Blog.create({
//    title: "To Blog, or not to Blog?",
//    image: "https://images.unsplash.com/photo-1507237081139-5dfb209dba79?w=1460",
//    body: "The road goes ever on and on / down from the door where it began. / Now far ahead the road has gone, / And I must follow if I can..."
//});

//RESTFUL ROUTES
app.get("/", function(req, res){
    res.redirect("/blogs");
});

//INDEX ROUTE
app.get("/blogs", function(req, res){
    Blog.find({}, function(err, blogs){
        if(err){
            console.log("error");
        }else{
            res.render("index", {blogs:blogs});
        }
    });
});

//NEW ROUTE
app.get("/blogs/new", function(req, res){
    res.render("new");
});

//CREATE ROUTE
app.post("/blogs", function(req, res){
    //create the blog
    Blog.create(req.body.blog,function(err, newBlog){
        if(err){
            console.log("Error. Unable to process request.")
            console.log(err);
            res.render("new");
        }else{
            //redirect to index
            res.redirect("/blogs");
        }
    });
});

app.listen(3000, function(){
    console.log("Connection established at port 3000.")
});