import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

function AddPoemPage() {
    //Hooks
    const dispatch = useDispatch();
    const noun = useSelector((store) => store.randomNounReducer);
    const verb = useSelector((store) => store.randomVerbReducer);

    const getNoun = () => {
        axios.get('/random-noun')
            .then((response) => {
                console.log('search response:', response);
                let newNoun = response.data[Math.floor(Math.random() * 100)];
                dispatch({
                    type: 'SET_NOUN',
                    payload: newNoun
                });;
            })
            .catch((error) => {
                console.error('Error in GET noun', error);
            });
    };

    const getVerb = () => {
        axios.get('/random-verb')
            .then((response) => {
                console.log('search response:', response);
                let newVerb = response.data[Math.floor(Math.random() * 100)];
                dispatch({
                    type: 'SET_VERB',
                    payload: newVerb
                });;
            })
            .catch((error) => {
                console.error('Error in GET verb', error);
            });
    };

    return (
        <div>
            <button onClick={getNoun}>Get Noun</button>
            <p>Noun: {noun}</p>
            <button onClick={getVerb}>Get Verb</button>
            <p>Verb: {verb}</p>
        </div>
    );
};

export default AddPoemPage;