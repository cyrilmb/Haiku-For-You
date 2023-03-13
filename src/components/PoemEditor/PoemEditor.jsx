import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function PoemEditor() {
    let [newPoem, setNewPoem] = useState({ title: '', line_1: '', line_2: '', line_3: '' });

    const handleChange = (event, key) => {
        setNewPoem({ ...newPoem, [key]: event.target.value });
    };

    const;

    return (
        <div>
            <input type="text" />
        </div>
    );
}

export default PoemEditor;