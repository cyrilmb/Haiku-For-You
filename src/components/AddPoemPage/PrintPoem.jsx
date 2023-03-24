import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

function PrintPoem({ word }) {

    const history = useHistory();
    const dispatch = useDispatch();

    const handleEditClick = () => {
        let newPoem = {
            line_1: [word[0], word[1], word[2]],
            line_2: [word[3], word[4], word[5], word[6]],
            line_3: [word[7], word[8], word[9]]
        };

        history.push({
            pathname: '/edit',
            state: { detail: newPoem }
        });
    };

    const handleDefinition = (word) => {
        console.log(word);
        dispatch({
            type: 'FETCH_DEFINITION',
            payload: word
        });
    };

    return (
        <div>
            <div>
                <span onClick={() => handleDefinition(word[0])}>{`${word[0]} `}</span>
                <span>{`${word[1]} `}</span>
                <span>{`${word[2]} `}</span>
            </div>
            <div>
                <span>{`${word[3]} `}</span>
                <span>{`${word[4]} `}</span>
                <span>{`${word[5]} `}</span>
                <span>{`${word[6]} `}</span>
            </div>
            <div>
                <span>{`${word[7]} `}</span>
                <span>{`${word[8]} `}</span>
                <span>{`${word[9]} `}</span>
            </div>
            <button onClick={handleEditClick}>Edit Your Poem</button>
        </div>
    );
}

export default PrintPoem;