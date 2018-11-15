const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const router = express.Router();

// Load user model
require('../models/User');
const User = mongoose.model('users');

var pageTitle = 'Welcome!';

// User login route
router.get('/login', (req, res) => {
    res.render('users/login', {
        pageTitle: pageTitle
    });
});

// User register route
router.get('/register', (req, res) => {
    res.render('users/register', {
        pageTitle: pageTitle
    });
});

// Login Form POST
router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/entries',
        failureRedirect: '/users/login',
        failureFlash: true
    })(req, res, next);
});

// Logout Form GET
router.get('/logout', (req, res) => {
    req.logout();
    req.flash('success_msg', 'You have successfully logged out.');
    res.redirect('/users/login');
});

// Register Form POST Processing
router.post('/register', (req, res) => {
    let errors = [];

    if (req.body.password != req.body.password2) {
        errors.push({ text: 'Passwords do not match.' });
    }
    if (req.body.password.length < 8) {
        errors.push({ text: 'Passwords must be at least 8 characters long.' });
    }
    if (errors.length > 0) {
        res.render('users/register', {
            errors: errors,
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            password2: req.body.password2,
            pageTitle: pageTitle
        });
    } else {
        User.findOne({ email: req.body.email })
            .then(user => {
                if (user) {
                    req.flash('error_msg', 'Email already registered. Please try again with a different email.');
                    res.render('users/register', {
                        errors: errors,
                        name: req.body.name,
                        email: req.body.email,
                        password: req.body.password,
                        password2: req.body.password2,
                        pageTitle: pageTitle
                    });
                } else {
                    const newUser = new User({
                        name: req.body.name,
                        email: req.body.email,
                        password: req.body.password,
                        password2: req.body.password2
                    });
                    bcrypt.genSalt(10, (err, salt) => {
                        bcrypt.hash(newUser.password, salt, (error, hash) => {
                            if (err) throw err;
                            newUser.password = hash;
                            newUser.save()
                                .then(user => {
                                    req.flash('success_msg', 'You are now registered and can log in.');
                                    res.redirect('/users/login');
                                })
                                .catch(err => {
                                    console.log(err);
                                    return;
                                })
                        });
                    });
                }
            });
    }
});

module.exports = router;