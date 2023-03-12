const express = require('express');
const router = express.Router();
const axios = require('axios');

const options = {
    method: 'GET',
    url: 'https://wordsapiv1.p.rapidapi.com/words/',
    params: { partofspeech: 'verb', limit: '50' },
    headers: {
        'X-RapidAPI-Key': 'bf2a6c716amshe85260a4557e4d0p1f5e22jsndac4f673e7e4',
        'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
    }
};

axios.request(options).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});

module.exports = router;
