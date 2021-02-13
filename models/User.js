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

    courses: [{
        _id: mongoose.Types.ObjectId,
        ref: 'Course'
    }]
});

module.exports = mongoose.model('User', userSchema);