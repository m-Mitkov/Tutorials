const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
        unique: true
    },
    
    description: {
     type: String,
     required: true,
     maxLength: 150 
    },

    imageUrl: {
        type: String,
        required: true
    },

    duration: {
        type: String,
        required: true
    },

    createdAt: {
        type: String || Date,
        required: true
    },

    creator: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },

    users: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }]

});

module.exports = mongoose.model('Course', courseSchema);