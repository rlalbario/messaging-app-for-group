const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
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
        required: false
    },
    imageUrl: {
        type: String
    },
    status: {
        type: String,
        required: true,
        default : 'inactive'
    },
    dateCreated: {
        type: Date,
        default: Date.now
    },
    dateUpdated: {
        type: Date
    }
});
module.exports = mongoose.model('User', userSchema);