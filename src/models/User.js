const { model, Schema } = require('mongoose');

const userSchema = new Schema({
    username: String,
    password: String,
    email: String,
    created_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = model('User', userSchema);