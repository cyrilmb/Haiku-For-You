import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';

import axios from 'axios';
import './EditForm.css';

function EditForm({ newPoem }) {

    //Hooks
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();

    //Props from PrintPoem through useHistory
    newPoem = location.state.detail;

    console.log(newPoem);

    //Reducer for user info, need userID
    const user = useSelector((store) => store.user);

    //Reducer to Get a random word
    const random = useSelector((store) => store.randomWordReducer);

    //track inline edits to state
    const [editPoem, setEditPoem] = useState({
        title: newPoem.title,
        line_1: newPoem.line_1,
        line_2: newPoem.line_2,
        line_3: newPoem.line_3
    });

    let word0 = `${newPoem.line_1[0]} `;
    let word1 = `${newPoem.line_1[1]} `;
    let word2 = `${newPoem.line_1[2]} `;
    let word3 = `${newPoem.line_2[0]} `;
    let word4 = `${newPoem.line_2[1]} `;
    let word5 = `${newPoem.line_2[2]} `;
    let word6 = `${newPoem.line_2[3]} `;
    let word7 = `${newPoem.line_3[0]} `;
    let word8 = `${newPoem.line_3[1]} `;
    let word9 = `${newPoem.line_3[2]} `;

    //Dispatch input values to be stored in db
    const addEdit = async (event) => {
        event.preventDefault();
        await dispatch({
            type: 'ADD_POEM',
            payload: editPoem
        });

        await dispatch({
            type: 'FETCH_USER_GALLERY',
            payload: user.id
        });

        history.push({ pathname: '/user-gallery' });
    };

    //TODO :: Make Saga for this GET !!
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
    // console.log(`${newPoem.line_1}`);
    // console.log(JSON.stringify(newPoem.line_1).length);
    return (
        <div>
            <h3 className='pageTitle'>Edit Form</h3>
            <form onSubmit={addEdit}>
                Title <br />
                <input
                    type='text'
                    placeholder='Add your own title!'
                    onChange={(event) => setEditPoem({ ...editPoem, title: event.target.value })}
                /> <br />
                Line 1 <br />
                <input
                    type='text'
                    defaultValue={word0 + word1 + word2}
                    onChange={(event) => setEditPoem({ ...editPoem, line_1: event.target.value })}
                    // this is not working great, also does not listen for change, which would be nice
                    style={{ width: `${JSON.stringify(newPoem.line_1).length - 9}ch` }}
                /> <br />
                Line 2 <br />
                <input
                    type='text'
                    defaultValue={word3 + word4 + word5 + word6}
                    onChange={(event) => setEditPoem({ ...editPoem, line_2: event.target.value })}
                    // this is not working great, also does not listen for change, which would be nice
                    style={{ width: `${JSON.stringify(newPoem.line_2).length - 11}ch` }}
                /> <br />
                Line 3 <br />
                <input
                    type='text'
                    defaultValue={word7 + word8 + word9}
                    onChange={(event) => setEditPoem({ ...editPoem, line_3: event.target.value })}
                    // this is not working great, also does not listen for change, which would be nice
                    style={{ width: `${JSON.stringify(newPoem.line_3).length - 9}ch` }}
                /> <br />
                <input type="submit" value="Submit Your Poem" />
            </form>
            <p>Need some inspiration? </p>
            <p>Click here to get a random word!</p>
            <button onClick={randomWord}>Get a Word</button>
            <p>Result: {random.word}</p>
            <p>Definition: {random.results?.[0].definition}</p>
            <p>Part  of Speech: {random.results?.[0].partOfSpeech}</p>
        </div>
    );
}

export default EditForm;