import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import PoemCard from '../PoemCard/PoemCard';

function UserPoems() {
    return (
        <h3>Your Poems</h3>
    );
}

export default UserPoems;