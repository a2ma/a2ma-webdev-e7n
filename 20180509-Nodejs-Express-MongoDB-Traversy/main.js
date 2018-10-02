const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

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
    const title = 'Welcome';
    res.render('index', {
        title: title
    });
});

//about route
app.get('/about', (req, res) => {
    const title = 'About';
    res.render('about', {
        title: title
    });
});

const port = 5000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});