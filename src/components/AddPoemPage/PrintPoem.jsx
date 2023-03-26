import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './PrintPoem.css';


function PrintPoem({ word }) {

    const history = useHistory();
    const dispatch = useDispatch();

    const definitionArr = useSelector((store) => store.definitionReducer);

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

    const handleDefinition = async (word) => {
        await dispatch({
            type: 'FETCH_DEFINITION',
            payload: { word }
        });
        // await showDefinition(definition);
        console.log(definitionArr);
        // let definition = JSON.stringify(definitionArr.definitions[0].definition);

        for await (let def of definitionArr.definitions) {
            let newDef = JSON.stringify(def.definition);
            // let newDefArr = [];
            // newDefArr.push(newDef);
            console.log(newDef);
        };

        // await alert(

        // );

    };

    // const showDefinition = (definition) => {
    //     alert(definition.definitions);
    // };

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
        </div>
    );
}

export default PrintPoem;