const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', (req, res) => {
  const options = {
    method: 'GET',
    url: 'https://wordsapiv1.p.rapidapi.com/words/',
    params: {
      page: `${Math.floor(Math.random() * 53) + 1}`,
      limit: '100',
      partOfSpeech: 'verb',
      hasDetails: 'definition',
      syllablesMax: '4',
      frequencyMin: '2',
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
      // console.log(resp);
      res.send(resp.results.data);
    })
    .catch((error) => {
      console.error('Error in GET verb API', error);
      res.sendStatus(500);
    });
});

module.exports = router;
