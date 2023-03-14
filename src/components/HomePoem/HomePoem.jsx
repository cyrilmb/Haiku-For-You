import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function HomePoem() {

    //Hooks here
    const dispatch = useDispatch();
    const poem = useSelector((store) => store.homePoemReducer);

    //Render random poem on load
    useEffect(() => {
        dispatch({ type: 'FETCH_POEM' });
    }, []);

    console.log('poem:', poem);

    return (
        <div>
            {poem.map((line, i) => {
                return (
                    <div key={i}>
                        <h3>{line.title}</h3>
                        <p>{line.line_1}</p>
                        <p>{line.line_2}</p>
                        <p>{line.line_3}</p>
                        <p>-- {line.username} || {new Date(line.date).toISOString().split("T")[0]}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default HomePoem;