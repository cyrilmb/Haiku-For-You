import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';

function EditForm({ newPoem }) {

    //Hooks
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();

    //Props from PrintPoem through useHistory
    newPoem = location.state.detail;

    //Reducer for user info, need userID
    const user = useSelector((store) => store.user);

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
    const addEdit = (event) => {
        event.preventDefault();
        dispatch({
            type: 'ADD_POEM',
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
                    placeholder='Add your own title!'
                    onChange={(event) => setEditPoem({ ...editPoem, title: event.target.value })}
                /> <br />
                Line 1 <br />
                <input
                    type='text'
                    defaultValue={word0 + word1 + word2}
                    onChange={(event) => setEditPoem({ ...editPoem, line_1: event.target.value })}
                /> <br />
                Line 2 <br />
                <input
                    type='text'
                    defaultValue={word3 + word4 + word5 + word6}
                    onChange={(event) => setEditPoem({ ...editPoem, line_2: event.target.value })}
                /> <br />
                Line 3 <br />
                <input
                    type='text'
                    defaultValue={word7 + word8 + word9}
                    onChange={(event) => setEditPoem({ ...editPoem, line_3: event.target.value })}
                /> <br />
                <input type="submit" value="Submit Your Poem" />
            </form>
        </div>
    );
}

export default EditForm;