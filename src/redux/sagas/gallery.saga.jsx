import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* Gallery() {
    try {
        const gallery = yield axios.get('/gallery');
        yield put({ type: 'SET_GALLERY', payload: gallery.data });
    } catch (error) {
        console.error('error in gallery get', error);
    }
}

function* gallerySaga() {
    yield takeLatest('FETCH_GALLERY', Gallery);
}

export default gallerySaga;