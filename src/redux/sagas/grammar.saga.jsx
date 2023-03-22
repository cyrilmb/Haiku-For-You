import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* Noun() {
    try {
        const noun = yield axios.get('/random-noun');
        const noun2 = yield axios.get('/random-noun');
        let newNoun = noun.data[Math.floor(Math.random() * noun.data.length)];
        let newNoun2 = noun2.data[Math.floor(Math.random() * noun2.data.length)];
        yield put({ type: 'SET_NOUN', payload: [newNoun, newNoun2] });
    } catch (error) {
        console.error('error in GET noun', error);
    }
}

function* Verb() {
    try {
        const verb = yield axios.get('/random-verb');
        const verb2 = yield axios.get('/random-verb');
        let newVerb = verb.data[Math.floor(Math.random() * verb.data.length)];
        let newVerb2 = verb2.data[Math.floor(Math.random() * verb2.data.length)];
        yield put({ type: 'SET_VERB', payload: [newVerb, newVerb2] });
    } catch (error) {
        console.error('error in GET verb', error);
    }
}

function* Adjective() {
    try {
        const adjective = yield axios.get('/random-adjective');
        const adjective2 = yield axios.get('/random-adjective');
        let newAdjective = adjective.data[Math.floor(Math.random() * adjective.data.length)];
        let newAdjective2 = adjective2.data[Math.floor(Math.random() * adjective2.data.length)];
        yield put({ type: 'SET_ADJECTIVE', payload: [newAdjective, newAdjective2] });
    } catch (error) {
        console.error('error in GET adjective', error);
    }
}

function* Adverb() {
    try {
        const adverb = yield axios.get('/random-adverb');
        const adverb2 = yield axios.get('/random-adverb');
        let newAdverb = adverb.data[Math.floor(Math.random() * adverb.data.length)];
        let newAdverb2 = adverb2.data[Math.floor(Math.random() * adverb2.data.length)];
        yield put({ type: 'SET_ADVERB', payload: [newAdverb, newAdverb2] });
    } catch (error) {
        console.error('error in GET adverb', error);
    }
}

function* Conjunction() {
    try {
        const conjunction = yield axios.get('/random-conjunction');
        const conjunction2 = yield axios.get('/random-conjunction');
        yield put({ type: 'SET_CONJUNCTION', payload: [conjunction.data, conjunction2.data] });
    } catch (error) {
        console.error('error in GET conjunction', error);
    }
}

function* Preposition() {
    try {
        const preposition = yield axios.get('/random-preposition');
        const preposition2 = yield axios.get('/random-preposition');
        yield put({ type: 'SET_PREPOSITION', payload: [preposition.data, preposition2.data] });
    } catch (error) {
        console.error('error in GET preposition', error);
    }
}

function* HelpingVerb() {
    try {
        const helping_verb = yield axios.get('/random-helping-verb');
        const helping_verb2 = yield axios.get('/random-helping-verb');
        yield put({ type: 'SET_HELPING_VERB', payload: [helping_verb.data, helping_verb2.data] });
    } catch (error) {
        console.error('error in GET helping_verb', error);
    }
}

function* Pronoun() {
    try {
        const pronoun = yield axios.get('/random-pronoun');
        const pronoun2 = yield axios.get('/random-pronoun');
        yield put({ type: 'SET_PRONOUN', payload: [pronoun.data, pronoun2.data] });
    } catch (error) {
        console.error('error in GET pronoun', error);
    }
}

function* Determiner() {
    try {
        const determiner = yield axios.get('/random-determiner');
        const determiner2 = yield axios.get('/random-determiner');
        yield put({ type: 'SET_DETERMINER', payload: [determiner.data, determiner2.data] });
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