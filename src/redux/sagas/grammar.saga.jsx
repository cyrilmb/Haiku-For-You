import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* Noun() {
    try {
        const noun = yield axios.get('/random-noun');
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

function* Preposition() {
    try {
        const preposition = yield axios.get('/random-preposition');
        yield put({ type: 'SET_PREPOSITION', payload: preposition.data });
    } catch (error) {
        console.error('error in GET preposition', error);
    }
}

function* HelpingVerb() {
    try {
        const helping_verb = yield axios.get('/random-helping-verb');
        yield put({ type: 'SET_HELPING_VERB', payload: helping_verb.data });
    } catch (error) {
        console.error('error in GET helping_verb', error);
    }
}

function* Pronoun() {
    try {
        const pronoun = yield axios.get('/random-pronoun');
        yield put({ type: 'SET_PRONOUN', payload: pronoun.data });
    } catch (error) {
        console.error('error in GET pronoun', error);
    }
}

function* Determiner() {
    try {
        const determiner = yield axios.get('/random-determiner');
        yield put({ type: 'SET_DETERMINER', payload: determiner.data });
    } catch (error) {
        console.error('error in GET determiner', error);
    }
}

function* grammarSaga() {
    yield takeLatest('FETCH_NOUN', Noun);
    yield takeLatest('FETCH_VERB', Verb);
    yield takeLatest('FETCH_ADJECTIVE', Adjective);
    yield takeLatest('FETCH_ADVERB', Adverb);
    yield takeLatest('FETCH_CONJUNCTION', Conjunction);
    yield takeLatest('FETCH_PREPOSITION', Preposition);
    yield takeLatest('FETCH_HELPING_VERB', HelpingVerb);
    yield takeLatest('FETCH_PRONOUN', Pronoun);
    yield takeLatest('FETCH_DETERMINER', Determiner);

}

export default grammarSaga;