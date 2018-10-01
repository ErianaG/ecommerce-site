const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    dropdown: {
        type: String,
        required: false
    },
    comments: {
        type: String,
        required: false
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = {
    User
};