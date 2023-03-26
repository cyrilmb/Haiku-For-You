import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getDefinition(action) {
    try {
        const definition = yield axios.post('/definition', action.payload);
        yield put({ type: 'SET_DEFINITION', payload: definition.data });
    } catch (error) {
        console.log('Error in definition saga:', error);
    }
}

function* definitionSaga() {
    yield takeLatest('FETCH_DEFINITION', getDefinition);
}

export default definitionSaga;