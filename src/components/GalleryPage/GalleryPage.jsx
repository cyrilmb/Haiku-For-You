import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import PoemCard from '../PoemCard/PoemCard';

function GalleryPage() {

    const dispatch = useDispatch();
    const gallery = useSelector((store) => store.galleryReducer);

    useEffect(() => {
        dispatch({ type: 'FETCH_GALLERY' });
    }, []);

    return (
        <div>
            <h3>GALLERY</h3>
            {gallery.map((line, i) => {
                return (
                    <PoemCard line={line} key={i} />
                );
            })}
        </div>
    );
}

export default GalleryPage;