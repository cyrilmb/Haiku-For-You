const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', (req, res) => {
  const options = {
    method: 'GET',
    url: 'https://wordsapiv1.p.rapidapi.com/words/',
    params: {
      page: '1',
      limit: '100',
      partOfSpeech: 'noun',
      hasDetails: 'definition',
      syllablesMax: '4',
      frequencyMin: '3',
    },
    headers: {
      'X-RapidAPI-Key': process.env.RANDOM_WORD_API_KEY,
      'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com',
    },
  };

  axios
    .request(options)
    .then((response) => {
      let resp = response.data;
      console.log(resp.results.data);
      res.send(resp.results.data);
    })
    .catch((error) => {
      console.error('Error in GET noun API', error);
      res.sendStatus(500);
    });
});

module.exports = router;
