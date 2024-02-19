const mongoose = require('mongoose');

const urlModel = mongoose.Schema({
    baseUrl: {type: String, required: true},
    shortenUrl: {type: String, required: true}
})

const Url = mongoose.model('Url', urlModel)

module.exports = Url;