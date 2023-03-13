const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://wordsapiv1.p.rapidapi.com/words/',
        params: { partofspeech: verb, limit: '50', page: '4' },
        headers: {
            'X-RapidAPI-Key': process.env.RANDOM_WORD_API_KEY,
            'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
        }
    };

    axios
        .request(options)
        .then((response) => {
            let resp = response.data;
            console.log(resp);
            res.send(resp);
        })
        .catch((error) => {
            console.error(error);
            res.sendStatus(500);
        });
});


module.exports = router;
