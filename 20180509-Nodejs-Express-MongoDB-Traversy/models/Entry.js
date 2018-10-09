const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Schema creation
const EntrySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    article: {
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

mongoose.model('entries', EntrySchema);