import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './PrintPoem.css';


function PrintPoem({ word }) {

    const history = useHistory();
    const dispatch = useDispatch();

    const definitionObj = useSelector((store) => store.definitionReducer);
    const definitionArr = definitionObj?.definitions;
    console.log('global defArr', definitionArr);

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

    const [newDefArr, setNewDefArr] = useState([]);

    const handleDefinition = async (word) => {
        setNewDefArr([]);
        dispatch({
            type: 'FETCH_DEFINITION',
            payload: { word }
        });
        setNewDefArr(definitionArr);
        console.log(newDefArr);
    };



    return (
        <div>
            <div className='poem-line'>
                <span onClick={() => handleDefinition(word[0])}>{`${word[0]} `}</span>
                <span onClick={() => handleDefinition(word[1])}>{`${word[1]} `}</span>
                <span onClick={() => handleDefinition(word[2])}>{`${word[2]} `}</span>
            </div>
            <div className='poem-line'>
                <span onClick={() => handleDefinition(word[3])}>{`${word[3]} `}</span>
                <span onClick={() => handleDefinition(word[4])}>{`${word[4]} `}</span>
                <span onClick={() => handleDefinition(word[5])}>{`${word[5]} `}</span>
                <span onClick={() => handleDefinition(word[6])}>{`${word[6]} `}</span>
            </div>
            <div className='poem-line'>
                <span onClick={() => handleDefinition(word[7])}>{`${word[7]} `}</span>
                <span onClick={() => handleDefinition(word[8])}>{`${word[8]} `}</span>
                <span onClick={() => handleDefinition(word[9])}>{`${word[9]} `}</span>
            </div>
            <p></p>
            <button onClick={handleEditClick}>Edit Your Poem</button>

            {definitionObj?.definitions ?
                <p>Defintion: {definitionObj?.definitions[0]?.definition}</p> : {}
            }
        </div>
    );
}

export default PrintPoem;