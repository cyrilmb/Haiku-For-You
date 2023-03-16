import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import PoemCard from '../PoemCard/PoemCard';

function UserPoems() {
    //HOOKS!
    const dispatch = useDispatch();
    const gallery = useSelector((store) => store.galleryReducer);
    const user = useSelector((store) => store.user);
    const history = useHistory();

    useEffect(() => {
        dispatch({
            type: 'FETCH_USER_GALLERY',
            payload: user.id
        });
    }, []);

    const handleDelete = (id) => {
        dispatch({
            type: 'DELETE_POEM',
            payload: id
        });
        dispatch({
            type: 'FETCH_USER_GALLERY',
            payload: user.id
        });
    };

    const handleEdit = (poem) => {
        console.log(poem);
        history.push({
            pathname: '/edit-user',
            state: { detail: poem }
        });
    };

    return (
        <div>
            <h3>GALLERY</h3>
            {gallery.map((line, i) => {
                return (
                    <div key={i}>
                        <PoemCard line={line} />
                        <button onClick={() => handleEdit(line)}>Edit</button>
                        <button onClick={() => handleDelete(line.id)}>Delete</button>
                    </div>
                );
            })}
        </div >
    );
}

export default UserPoems;