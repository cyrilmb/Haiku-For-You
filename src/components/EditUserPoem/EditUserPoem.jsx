import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useHistory } from "react-router-dom";

function EditUserPoem({ poem }) {

    //Hooks
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();

    poem = location.state.detail;
    const user = useSelector((store) => store.user);


    let [editPoem, setEditPoem] = useState({ title: poem.title, line_1: poem.line_1, line_2: poem.line_2, line_3: poem.line_3, id: poem.id });

    //Dispatch input values to be stored in db
    const addEdit = (event) => {
        event.preventDefault();
        dispatch({
            type: 'PUT_POEM',
            payload: editPoem
        });
        dispatch({
            type: 'FETCH_USER_GALLERY',
            payload: user.id
        });
        history.push({ pathname: '/user-gallery' });
    };

    return (
        <div>
            <form onSubmit={addEdit}>
                Title <br />
                <input
                    type='text'
                    defaultValue={poem.title}
                    // value={editPoem.title}
                    onChange={(event) => setEditPoem({ ...editPoem, title: event.target.value })}
                /> <br />
                Line 1 <br />
                <input
                    type='text'
                    defaultValue={poem.line_1}
                    // value={editPoem.line_1}
                    onChange={(event) => setEditPoem({ ...editPoem, line_1: event.target.value })}
                /> <br />
                Line 2 <br />
                <input
                    type='text'
                    defaultValue={poem.line_2}
                    // value={editPoem.line_2}
                    onChange={(event) => setEditPoem({ ...editPoem, line_2: event.target.value })}
                /> <br />
                Line 3 <br />
                <input
                    type='text'
                    defaultValue={poem.line_3}
                    // value={editPoem.line_3}
                    onChange={(event) => setEditPoem({ ...editPoem, line_3: event.target.value })}
                /> <br />
                <input type='submit' value='Submit Changes' />
                <button onClick={() => history.back()}>Cancel</button>
            </form>
        </div >
    );
}

export default EditUserPoem;