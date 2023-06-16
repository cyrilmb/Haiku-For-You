const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
const axios = require('axios');

router.post('/', async (req, res) => {
  try {
    const options = {
      method: 'GET',
      url: `https://wordsapiv1.p.rapidapi.com/words/${req.body.word}/definitions`,
      headers: {
        'X-RapidAPI-Key': process.env.RANDOM_WORD_API_KEY,
        'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com',
      },
    };

    //   const definitionResp = await pool.query(options);
    //   res.send(definitionResp.rows);
    // } catch (error) {
    //   res.sendStatus(500);
    //   console.log('Error in definition router: ', error);
    // }

    await axios.request(options).then((response) => {
      res.send(response.data);
    });
  } catch (error) {
    console.error('error in definition router', error);
    res.sendStatus(500);
  }
});

module.exports = router;
