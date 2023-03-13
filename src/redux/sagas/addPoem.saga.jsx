import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//dont forget to add the put here to call the get to render? or will it render on reroute?
function* addToGallery(action) {
    try {
        yield axios.post('/poem', action.payload);
    } catch (error) {
        console.error('error in POST poem:', error);
    }
}

function* addNewPoemSaga() {
    yield takeLatest('ADD_POEM', addToGallery);
}

export default addNewPoemSaga;