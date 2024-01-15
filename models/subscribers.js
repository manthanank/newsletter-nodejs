const mongoose = require('mongoose');

const Subscribers = mongoose.model('subscribers', {
    email: { type: String }
});

module.exports = Subscribers;