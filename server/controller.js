const expressAsyncHandler = require('express-async-handler')

function shortURL(input) {    
    let res = {
        'input': input,
        'output': 'your output here'
    }
    return res;
}

function getUrl(input) {

}

module.exports = {shortURL, getUrl};