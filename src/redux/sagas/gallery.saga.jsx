import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* Gallery() {
    try {
        const gallery = yield axios.get('/gallery');
        yield put({ type: 'SET_GALLERY', payload: gallery.data });
    } catch (error) {
        console.error('error in gallery GET', error);
    }
}

function* UserGallery(action) {
    try {
        const gallery = yield axios.get(`/user-gallery/${action.payload}`);
        yield put({ type: 'SET_GALLERY', payload: gallery.data });
    } catch (error) {
        console.error('error in user-gallery GET', error);
    }
}

function* gallerySaga() {
    yield takeLatest('FETCH_GALLERY', Gallery);
    yield takeLatest('FETCH_USER_GALLERY', UserGallery);
}

export default gallerySaga;