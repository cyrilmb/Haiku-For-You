import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

function AddPoemPage() {
    //Hooks
    const dispatch = useDispatch();
    const noun = useSelector((store) => store.randomNounReducer);
    const verb = useSelector((store) => store.randomVerbReducer);
    const adjective = useSelector((store) => store.randomAdjectiveReducer);
    const adverb = useSelector((store) => store.randomAdverbReducer);
    const conjunction = useSelector((store) => store.randomConjunctionReducer);
    const preposition = useSelector((store) => store.randomPrepositionReducer);
    const helpingVerb = useSelector((store) => store.randomHelpingVerbReducer);
    const pronoun = useSelector((store) => store.randomPronounReducer);


    const getNoun = () => {
        dispatch({ type: 'FETCH_NOUN' });
    };

    const getVerb = () => {
        dispatch({ type: 'FETCH_VERB' });
    };

    const getAdjective = () => {
        dispatch({ type: 'FETCH_ADJECTIVE' });
    };

    const getAdverb = () => {
        dispatch({ type: 'FETCH_ADVERB' });
    };

    const getConjunction = () => {
        dispatch({ type: 'FETCH_CONJUNCTION' });
    };

    const getPreposition = () => {
        dispatch({ type: 'FETCH_PREPOSITION' });
    };

    const getHelpingVerb = () => {
        dispatch({ type: 'FETCH_HELPING_VERB' });
    };

    const getPronoun = () => {
        dispatch({ type: 'FETCH_PRONOUN' });
    };

    return (
        <div>
            <button onClick={getNoun}>Get Noun</button>
            <p>Noun: {noun}</p>
            <button onClick={getVerb}>Get Verb</button>
            <p>Verb: {verb}</p>
            <button onClick={getAdjective}>Get Adjective</button>
            <p>Adjective: {adjective}</p>
            <button onClick={getAdverb}>Get Adverb</button>
            <p>Adverb: {adverb}</p>
            <button onClick={getConjunction}>Get Conjunction</button>
            <p>Conjunction: {conjunction}</p>
            <button onClick={getPreposition}>Get Preposition</button>
            <p>Preposition: {preposition}</p>
            <button onClick={getHelpingVerb}>Get Helping Verb</button>
            <p>Helping Verb: {helpingVerb}</p>
            <button onClick={getPronoun}>Get Pronoun</button>
            <p>Pronoun: {pronoun}</p>
        </div>
    );
};

export default AddPoemPage;