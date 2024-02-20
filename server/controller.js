const expressAsyncHandler = require('express-async-handler')

function test(input) {    
    let res = {
        'input': input,
        'output': 'your output here'
    }
    return res;
}

function getUrl(input) {

}


function newUrl(input) {
    
} 
module.exports = {test, getUrl};