const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    createdCourses: [{
        type: mongoose.Types.ObjectId,
        ref: 'Course'
    }],

    courses: [{
        type: mongoose.Types.ObjectId,
        ref: 'Course'
    }]
});

module.exports = mongoose.model('User', userSchema);