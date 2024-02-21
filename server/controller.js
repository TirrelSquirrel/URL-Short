const expressAsyncHandler = require('express-async-handler')
const urlModel = require('./model');

function test(input) {    
    let res = {
        'input': input,
        'output': 'your output here'
    }
    return res;
}

const getUrl = expressAsyncHandler(async(req, res) => {

})

const postUrl = expressAsyncHandler(async(req, res) => {
    const {url} = req.body;

    if (!url) {
        res.sendStatus(400);
        throw new Error('No se ha proporcionado una URL')
    }

    const newUrl = await urlModel.create({baseUrl, shortUrl})
})

module.exports = {test, getUrl};