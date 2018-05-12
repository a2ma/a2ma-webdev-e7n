const express = require('express');
const mongoose = require('mongoose');

const hostname = '127.0.0.1';
const port = 3000;
const app = express();

//connect to mongoose, then catch promise - can use callbacks too
mongoose.connect(`mongodb://${hostname}/ejournal-dev`)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));
//, { useMongoClient: true} - removed because not needed 5.x+
//also removed: mongoose.Promise = global.Promise; //no warning in absence

app.set("view engine", "ejs");

app.get('/', (req, res) => {
    res.render('home.ejs');
});

app.get('/about', (req, res) => {
    res.render('about.ejs');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});