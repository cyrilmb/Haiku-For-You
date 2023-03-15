import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function EditForm() {

    //Hooks
    const dispatch = useDispatch();
    let [newPoem, setNewPoem] = useState({ title: '', line_1: '', line_2: '', line_3: '' });

    //Handle changes to inputs in form
    const handleChange = (event, key) => {
        setNewPoem({ ...newPoem, [key]: event.target.value });
    };

    //Dispatch input values to be stored in db
    const addNewPoem = (event) => {
        event.preventDefault();
        dispatch({
            type: 'ADD_POEM',
            payload: newPoem
        });
    };

    return (
        <div>
            <form onSubmit={addNewPoem}>
                <input
                    type='text'
                    placeholder='title'
                    value={newPoem.title}
                    onChange={(e) => handleChange(e, 'title')}
                />
                <input
                    type='text'
                    placeholder='line 1'
                    value={newPoem.line_1}
                    onChange={(e) => handleChange(e, 'line_1')}
                />
                <input
                    type='text'
                    placeholder='line 2'
                    value={newPoem.line_2}
                    onChange={(e) => handleChange(e, 'line_2')}
                />
                <input
                    type='text'
                    placeholder='line 3'
                    value={newPoem.line_3}
                    onChange={(e) => handleChange(e, 'line_3')}
                />
                <input type="submit" value="Submit Your Poem" />
            </form>
        </div>
    );
}

export default EditForm;