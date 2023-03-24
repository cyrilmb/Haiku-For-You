const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post('/', (req, res) => {
  console.log('REQ.BODAAYY', req.body.word);
  const options = {
    method: 'GET',
    url: `https://wordsapiv1.p.rapidapi.com/words/${req.body.word}/definitions`,
    headers: {
      'X-RapidAPI-Key': process.env.RANDOM_WORD_API_KEY,
      'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com',
    },
  };

  axios
    .request(options)
    .then((response) => {
      console.log(response.data);
      res.send(response.data);
    })
    .catch((error) => {
      console.error('error in definition router', error);
      res.sendStatus(500);
    });
});

module.exports = router;
