import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import HomePoem from '../HomePoem/HomePoem';

function GalleryPage() {

    const dispatch = useDispatch();
    const gallery = useSelector((store) => store.galleryReducer);

    useEffect(() => {
        dispatch({ type: 'FETCH_GALLERY' });
    }, []);

    return (
        <div>
            <h3>GALLERY</h3>
            {gallery.map((poem, i) => {
                return (
                    <HomePoem poem={poem} key={i} />
                );
            })}
        </div>
    );
}

export default GalleryPage;