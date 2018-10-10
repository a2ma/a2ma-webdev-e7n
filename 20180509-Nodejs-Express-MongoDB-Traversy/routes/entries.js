const express = require('express');
const mongoose = require('mongoose');
const router  = express.Router();

//Load Entry Model
require('../models/Entry');
const Entry = mongoose.model('entries');
var pageTitle ='Welcome!';

//Idea Index Page
router.get('/', (req, res) => {
    pageTitle = 'Entries';
    Entry.find({})
    .sort({date:'desc'})
    .then(entries => {
        res.render('entries/index', {
            entries:entries,
            pageTitle: pageTitle
        });
    });
});

//Add entry form
router.get('/add', (req, res) => {
    pageTitle = 'Add Entry';
    res.render('entries/add', {
        pageTitle: pageTitle
    });
});


//Add entry form
router.get('/edit/:id', (req, res) => {
    pageTitle = 'Edit Entry';
    Entry.findOne({
        _id: req.params.id
    })
    .then(entry =>{
        res.render('entries/edit', {
            entry: entry,
            pageTitle: pageTitle
        });
    });
});

//Process Form
router.post('/', (req, res) => {
    let errors = [];

    if(!req.body.title){
        errors.push({text: 'Please add a title.'});
    }
    if(!req.body.article){
        errors.push({text: 'Please add an entry body.'});
    }

    if(errors.length > 0){
        res.render('/add', {
            errors: errors,
            title: req.body.title,
            article: req.body.article
        });
    } else {
        const newUser = {
            title: req.body.title,
            article: req.body.article
        }
        new Entry(newUser)
        .save()
        .then(entry => {
            req.flash('success_msg', 'Entry successfully posted.');
            res.redirect('/entries');
        })
    }
});

// Edit form process
router.put('/:id', (req, res) => {
    Entry.findOne({
        _id: req.params.id
    })
    .then(entry => {
        //new values set
        entry.title = req.body.title,
        entry.article = req.body.article;

        entry.save()
            .then(idea => {
                req.flash('success_msg', 'Entry successfully updated.');
                res.redirect('/entries');
            })
    });
});

// Delete entry
router.delete('/:id', (req, res) => {
    Entry.remove({_id: req.params.id})
    .then(() => {
        req.flash('success_msg', 'Entry successfully removed.');
        res.redirect('/entries');
    });
});

module.exports = router;