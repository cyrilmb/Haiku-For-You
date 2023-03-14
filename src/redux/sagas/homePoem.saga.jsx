import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* HomePoem() {
    try {
        const homePoem = yield axios.get('/home-poem');
        yield put({ type: 'SET_POEM', payload: homePoem.data });
    } catch (error) {
        console.error('error in homepoem get', error);
    }
}

function* homePoemSaga() {
    yield takeLatest('FETCH_POEM', HomePoem);
}

export default homePoemSaga;