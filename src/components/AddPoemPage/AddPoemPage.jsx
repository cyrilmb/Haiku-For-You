import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

function AddPoemPage() {
    //Hooks
    const dispatch = useDispatch();
    const noun = useSelector((store) => store.randomNounReducer);

    console.log('NOUN', noun);

    const getNoun = () => {
        axios.get('/random-noun')
            .then((response) => {
                console.log('search response:', response);
                dispatch({
                    type: 'SET_NOUN',
                    payload: response.data
                });;
            })
            .catch((error) => {
                console.error('Error in GET noun', error);
            });
    };

    return (
        <div>
            <button onClick={getNoun}>Get Noun</button>
            <p>Noun: {noun[1]}</p>
        </div>
    );
};

export default AddPoemPage;