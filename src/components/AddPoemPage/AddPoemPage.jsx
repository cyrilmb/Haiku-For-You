import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

function AddPoemPage() {
    //Hooks
    const dispatch = useDispatch();


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
                console.error(error);
            });
    };

    return (
        <div>
            <button onClick={getNoun}>Get Noun</button>

        </div>
    );
};

export default AddPoemPage;