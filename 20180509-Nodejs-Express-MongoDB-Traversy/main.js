const express           = require('express');
const exphbs            = require('express-handlebars');
const bodyParser        = require('body-parser');
const mongoose          = require('mongoose');
const methodOverride    = require('method-override');
const flash             = require('connect-flash');
const session           = require('express-session');


const app = express();

// Load Routes
const entries = require('./routes/entries');
const users   = require('./routes/users');

//Map global promise - get rid of warning (in previous 
// version of Mongoose - issue looks fixed as of 5.3.1)
// mongoose.Promise = global.Promise;
//connect to Mongoose
mongoose.connect('mongodb://localhost/scribblr-dev', {
    useNewUrlParser: true,
})
    .then(() => console.log('MongoDB connected.'))
    .catch(err => console.log(err));

// //how middleware works
// app.use(function(req, res, next){
//     console.log(Date.now());
//     req.name = 'Testy McTesterson'; //adding variable to req object
//     next();
// });

//Handlebars Middleware
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

//Index route
app.get('/', (req, res) => {
    pageTitle = 'Welcome';
    res.render('index', {
        pageTitle: pageTitle
    });
});

//Body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
//parse application/json
app.use(bodyParser.json());
// Method override middleware
app.use(methodOverride('_method'));
// express session middleware
app.use(session({
    secret: 'moribund monkey',
    resave: true,
    saveUninitialized: true,
    // cookie: { secure: true}
}));

// Connect Flash middleware
app.use(flash());


//Global Variables
var pageTitle = '';
app.use(function(req, res, next){
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
});

//about route
app.get('/about', (req, res) => {
    pageTitle = 'About';
    res.render('about', {
        pageTitle: pageTitle
    });
});

// Use routes
app.use('/entries', entries);
app.use('/users', users);

const port = 5000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});