import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './HomePoem.css';

import PoemCard from '../PoemCard/PoemCard';

function HomePoem() {

    //Hooks here
    const dispatch = useDispatch();
    const poem = useSelector((store) => store.homePoemReducer);

    //Render random poem on load
    useEffect(() => {
        dispatch({ type: 'FETCH_POEM' });
    }, []);


    return (
        <div className='home-poem'>
            {poem.map((line, i) => {
                return (
                    <PoemCard line={line} key={i} />
                );
            })}
            <div className='home-button'>
                <button onClick={() => dispatch({ type: 'FETCH_POEM' })}>Get New Poem</button>
            </div>
        </div >
    );
}

export default HomePoem;