import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* Noun() {
    try {
        const noun = yield axios.get('/random-noun');
        console.log('NOUN', noun);
        let newNoun = noun.data[Math.floor(Math.random() * noun.data.length)];
        yield put({ type: 'SET_NOUN', payload: newNoun });
    } catch (error) {
        console.error('error in GET noun', error);
    }
}

function* Verb() {
    try {
        const verb = yield axios.get('/random-verb');
        let newVerb = verb.data[Math.floor(Math.random() * verb.data.length)];
        yield put({ type: 'SET_VERB', payload: newVerb });
    } catch (error) {
        console.error('error in GET verb', error);
    }
}

function* Adjective() {
    try {
        const adjective = yield axios.get('/random-adjective');
        let newAdjective = adjective.data[Math.floor(Math.random() * adjective.data.length)];
        yield put({ type: 'SET_ADJECTIVE', payload: newAdjective });
    } catch (error) {
        console.error('error in GET adjective', error);
    }
}

function* Adverb() {
    try {
        const adverb = yield axios.get('/random-adverb');
        let newAdverb = adverb.data[Math.floor(Math.random() * adverb.data.length)];
        yield put({ type: 'SET_ADVERB', payload: newAdverb });
    } catch (error) {
        console.error('error in GET adverb', error);
    }
}

function* Conjunction() {
    try {
        const conjunction = yield axios.get('/random-conjunction');
        yield put({ type: 'SET_CONJUNCTION', payload: conjunction.data });
    } catch (error) {
        console.error('error in GET conjunction', error);
    }
}

function* grammarSaga() {
    yield takeLatest('FETCH_NOUN', Noun);
    yield takeLatest('FETCH_VERB', Verb);
    yield takeLatest('FETCH_ADJECTIVE', Adjective);
    yield takeLatest('FETCH_ADVERB', Adverb);
    yield takeLatest('FETCH_CONJUNCTION', Conjunction);
}

export default grammarSaga;