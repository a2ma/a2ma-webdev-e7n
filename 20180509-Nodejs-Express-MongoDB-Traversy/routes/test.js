const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();


function fizzBuzz() {
    const list = [];
    for (let i = 1; i <= 100; i++) {
        if (!(i % 15)) {
            list.push('FizzBuzz');
        } else if (!(i % 5)) {
            list.push('Buzz');
        } else if (!(i % 3)) {
            list.push('Fizz');
        } else {
            list.push(i);
        }
    }
    return list;
}

// test routes
router.get('/', (req, res) => {
    pageTitle = 'Test';
    res.render('test', {
        pageTitle: pageTitle,
        list: fizzBuzz()
    });
});


module.exports = router;