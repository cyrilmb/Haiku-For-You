import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useHistory } from "react-router-dom";

function EditUserPoem({ poem }) {

    //Hooks
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();

    poem = location.state.detail;

    let [newPoem, setNewPoem] = useState({ title: '', line_1: '', line_2: '', line_3: '', id: poem.id });

    //Handle changes to inputs in form
    // const handleChange = (event, key) => {
    //     setNewPoem({ ...newPoem, [key]: event.target.value });
    // };

    //Dispatch input values to be stored in db
    const addNewPoem = (event) => {
        event.preventDefault();
        dispatch({
            type: 'PUT_POEM',
            payload: newPoem
        });
        history.push({ pathname: '/user-gallery' });
    };

    return (
        <div>
            <form onSubmit={addNewPoem}>
                Title <br />
                <input
                    type='text'
                    defaultValue={poem.title}
                    // value={newPoem.title}
                    onChange={(event) => setNewPoem({ ...newPoem, title: event.target.value })}
                /> <br />
                Line 1 <br />
                <input
                    type='text'
                    defaultValue={poem.line_1}
                    // value={newPoem.line_1}
                    onChange={(event) => setNewPoem({ ...newPoem, line_1: event.target.value })}
                /> <br />
                Line 2 <br />
                <input
                    type='text'
                    defaultValue={poem.line_2}
                    // value={newPoem.line_2}
                    onChange={(event) => setNewPoem({ ...newPoem, line_2: event.target.value })}
                /> <br />
                Line 3 <br />
                <input
                    type='text'
                    defaultValue={poem.line_3}
                    // value={newPoem.line_3}
                    onChange={(event) => setNewPoem({ ...newPoem, line_3: event.target.value })}
                /> <br />
                <input type='submit' value='Submit Changes' />
                <button onClick={() => history.back()}>Cancel</button>
            </form>
        </div >
    );
}

export default EditUserPoem;