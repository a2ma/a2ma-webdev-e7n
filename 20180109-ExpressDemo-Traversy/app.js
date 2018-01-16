var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var expressValidator = require('express-validator');
var mongojs = require('mongojs');
var db = mongojs('customerapp', ['users']);
var ObjectId = mongojs.ObjectId;

var app = express();

/*
//Example of Middleware
var logger = function(req, res, next){
	console.log('Logging...');
	next();
}

app.use(logger);

*/

//view engine middleware
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//BodyParser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Middleware for static folder for CSS and other static rsrcs
//an index.html file placed in public would override the app.js
//rendering
app.use(express.static(path.join(__dirname, 'public')));

//Global Var
app.use(function(req, res, next){
    res.locals.errors = null;
    next();
});

//legacy express validator middleware: setting up error formatter
app.use(expressValidator({
    errorFormatter: function(param, msg, value) {
        var namespace = param.split('.')
        , root  = namespace.shift()
        , formParam = root;
        
        while(namespace.length) {
            formParam += '[' + namespace.shift() + ']';
        }
        return{
            param: formParam,
            msg: msg,
            value: value
        };
    }
}));

//var person = {
//	name: 'Jeff',
//	age: 30
//}
//
//var people = [
//	{
//		name: 'Jeff',
//		age: 30
//	},
//	{
//		name: 'Antoine',
//		age: 16
//	},
//	{
//		name: 'Jean-Paul',
//		age: 65
//	}
//
//]
//
//var users = [
//	{
//		id: 1,
//		first_name: 'Ron',
//		last_name: 'Swanson',
//		email: 'swanson@ron.com'
//	},
//	{
//		id: 2,
//		first_name: 'Huil',
//		last_name: 'Thespos',
//		email: 'thespos@huil.com'
//	},
//	{
//		id: 3,
//		first_name: 'Brend',
//		last_name: 'Albertson',
//		email: 'albertson@brend.com'
//	},
//	{
//		id: 4,
//		first_name: 'Bamba',
//		last_name: 'Pappi',
//		email: 'pappi@bamba.com'
//	}
//]

// app.get('/', function(req, res){
// 	res.send('Hello World');
// });

// app.get('/', function(req, res){
// 	res.json(person);
// });

app.get('/', function(req, res){
    db.users.find(function (err, docs) {
//        console.log(docs);
        res.render('index', {
            title: 'Customers',
            users: docs
        });
    });

});

app.get('/json', function(req, res){
	res.json(people);
});

app.post('/users/add', function(req, res){
    req.checkBody('first_name', 'First Name is Required').notEmpty();
    req.checkBody('last_name', 'Last Name is Required').notEmpty();
    req.checkBody('email', 'Email Address is Required').notEmpty();
    
    var errors = req.validationErrors();
    
    if(errors){
        res.render('index', {
            title: 'Customers',
            users: users,
            errors: errors
        });
    }else{
        var newUser = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email
        }
        
        db.users.insert(newUser, function(err, result){
            if(err){
                console.log(err);
            }
            res.redirect('/');
            console.log('Success');
//            console.log(newUser);
        })

    }
    

});

app.delete('/users/delete/:id', function(req, res){
    console.log('Goodbye, ' + req.params.id);     
    db.users.remove({_id: ObjectId(req.params.id)}, function(err, result){
            if(err){
                console.log(err);
            }  
            res.redirect('/');
    });

});

app.listen(3000, function(){
	console.log('Server started on port 3000')
});
