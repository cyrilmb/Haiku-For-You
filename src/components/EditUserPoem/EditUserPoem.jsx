import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from "react-router-dom";

function EditUserPoem({ poem }) {

    //Hooks
    const dispatch = useDispatch();
    const location = useLocation();

    poem = location.state.detail;

    let [newPoem, setNewPoem] = useState({ title: '', line_1: '', line_2: '', line_3: '' });

    //Handle changes to inputs in form
    const handleChange = (event, key) => {
        setNewPoem({ ...newPoem, [key]: event.target.value });
    };

    //Dispatch input values to be stored in db
    const addNewPoem = (event) => {
        event.preventDefault();
        dispatch({
            type: 'POST_POEM',
            payload: newPoem
        });
    };

    return (
        <div>
            <form onSubmit={addNewPoem}>
                Title <br />
                <input
                    type='text'
                    placeholder={poem.title}
                    value={newPoem.title}
                    onChange={(e) => handleChange(e, 'title')}
                /> <br />
                Line 1 <br />
                <input
                    type='text'
                    defaultValue={poem.line_1}
                    value={newPoem.line_1}
                    onChange={(e) => handleChange(e, 'line_1')}
                /> <br />
                Line 2 <br />
                <input
                    type='text'
                    placeholder={poem.line_2}
                    value={newPoem.line_2}
                    onChange={(e) => handleChange(e, 'line_2')}
                /> <br />
                Line 3 <br />
                <input
                    type='text'
                    placeholder={poem.line_3}
                    value={newPoem.line_3}
                    onChange={(e) => handleChange(e, 'line_3')}
                /> <br />
                <input type='submit' value='Submit Changes' />
                <button onClick={() => history.back()}>Cancel</button>
            </form>
        </div >
    );
}

export default EditUserPoem;