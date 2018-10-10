const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Schema creation
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

// from StackExchange: Mongoose is trying to be smart. You can however force it to be whatever you want:

// var dataSchema = new Schema({..}, { collection: 'data' })

mongoose.model('users', UserSchema);