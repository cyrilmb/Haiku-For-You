import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

function WordGenerators() {
    //Get a random word from API
    const dispatch = useDispatch();
    const random = useSelector((store) => store.randomWordReducer);

    const randomWord = () => {
        axios.get('/random-word')
            .then((response) => {
                if (response.data.results) {
                    if (response.data.results[0].definition && response.data.results[0].partOfSpeech) {
                        dispatch({
                            type: 'SET_RANDOM',
                            payload: response.data
                        });
                    } else { randomWord(); }
                } else { randomWord(); }
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const searchWord = () => {
        axios.get('/search-word')
            .then((response) => {
                console.log('search response:', response);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div>
            <button onClick={randomWord}>RANDOMIZE ME CAPN</button>
            <p>so rando: {random.word}</p>
            <p>fergalicious definition: {random.results?.[0].definition}</p>
            <p>part  of speech: {random.results?.[0].partOfSpeech}</p>
            <button onClick={searchWord}>Searchin</button>
        </div>
    );
}

export default WordGenerators;