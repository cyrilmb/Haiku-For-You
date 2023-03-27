import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './UserPoems.css';
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

    const handleDelete = async (id) => {
        if (confirm('Are you sure you want to delete?')) {
            await dispatch({
                type: 'DELETE_POEM',
                payload: id
            });
            await dispatch({
                type: 'FETCH_USER_GALLERY',
                payload: user.id
            });
            history.push('/user-gallery');
        } else {
            history.push('/user-gallery');
        }
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
            <h3 className='pageTitle'>Private Gallery</h3>
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