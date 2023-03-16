import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* allGallery() {
    try {
        const gallery = yield axios.get('/gallery');
        yield put({ type: 'SET_GALLERY', payload: gallery.data });
    } catch (error) {
        console.error('error in gallery GET', error);
    }
}

function* userGallery(action) {
    try {
        const gallery = yield axios.get(`/user-gallery/${action.payload}`);
        yield put({ type: 'SET_GALLERY', payload: gallery.data });
    } catch (error) {
        console.error('error in user-gallery GET', error);
    }
}

function* deletePoem(action) {
    try {
        yield axios.delete(`/user-gallery/${action.payload}`);
    } catch (error) {
        console.log('Error in DELETE poem saga', error);
    }
}

function* gallerySaga() {
    yield takeLatest('FETCH_GALLERY', allGallery);
    yield takeLatest('FETCH_USER_GALLERY', userGallery);
    yield takeLatest('DELETE_POEM', deletePoem);
}

export default gallerySaga;