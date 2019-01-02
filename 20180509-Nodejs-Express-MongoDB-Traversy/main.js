const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');


const app = express();


// Load Routes
const entries = require('./routes/entries');
const users = require('./routes/users');
const test = require('./routes/test');

// Load Database URI
const db = require('./config/database');

// Passport Config
require('./config/passport')(passport);

//Map global promise - get rid of warning (in previous 
// version of Mongoose - issue looks fixed as of 5.3.1)
// mongoose.Promise = global.Promise;
//connect to Mongoose
mongoose.connect(db.mongoURI, {
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

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
// Static folder middleware
app.use(express.static(path.join(__dirname, 'public')));
// Method override middleware
app.use(methodOverride('_method'));
// express session middleware
app.use(session({
    secret: 'moribund monkey',
    resave: true,
    saveUninitialized: true,
    // cookie: { secure: true}
}));

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect Flash middleware
app.use(flash());

//Global Variables
var pageTitle = '';
app.use(function (req, res, next) {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    res.locals.user = req.user || null;
    next();
});

//Index route
app.get('/', (req, res) => {
    pageTitle = 'Welcome';
    res.render('index', {
        pageTitle: pageTitle
    });
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
app.use('/test', test);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});