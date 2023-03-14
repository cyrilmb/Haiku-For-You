import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import axios from 'axios';

function HomePoem() {

    //Hooks here
    const dispatch = useDispatch();
    const poem = useSelector(store => store.homePoemReducer);

    //Render random poem on load
    useEffect(() => {
        dispatch({ type: 'FETCH_POEM' });
    }, []);

    console.log('pome:', poem);
    return (
        <div>


        </div>
    );
}

export default HomePoem;