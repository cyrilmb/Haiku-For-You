import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getDefinition() {
    try {
        const definition = yield axios.get('/definition', { payload: action.payload });
        yield put({ type: 'SET_DEFINITION', payload: definition.data });
    } catch (error) {
        console.log('Error in definition saga:', error);
    }
}

function* definitionSaga() {
    yield takeLatest('FETCH_DEFINITION', getDefinition);
}

export default definitionSaga;