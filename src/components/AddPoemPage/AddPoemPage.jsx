import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

function AddPoemPage() {
    //Hooks
    const dispatch = useDispatch();

    //parts of speech
    const noun = useSelector((store) => store.randomNounReducer);
    const verb = useSelector((store) => store.randomVerbReducer);
    const adjective = useSelector((store) => store.randomAdjectiveReducer);
    const adverb = useSelector((store) => store.randomAdverbReducer);
    const conjunction = useSelector((store) => store.randomConjunctionReducer);
    const preposition = useSelector((store) => store.randomPrepositionReducer);
    const helpingVerb = useSelector((store) => store.randomHelpingVerbReducer);
    const pronoun = useSelector((store) => store.randomPronounReducer);
    const determiner = useSelector((store) => store.randomDeterminerReducer);

    let [newPoem, setNewPoem] = useState([]);

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
    const getDeterminer = () => {
        dispatch({ type: 'FETCH_DETERMINER' });
    };

    useEffect(() => {
        getNoun();
        getVerb();
        getAdjective();
        getAdverb();
        getConjunction();
        getPreposition();
        getHelpingVerb();
        getPronoun();
        getDeterminer();
    }, []);

    const addNoun = () => {
        getNoun();
        setNewPoem([...newPoem, `${noun} `]);
    };
    const addVerb = () => {
        getVerb();
        setNewPoem([...newPoem, `${verb} `]);
    };
    const addAdjective = () => {
        getAdjective();
        setNewPoem([...newPoem, `${adjective} `]);
    };
    const addAdverb = () => {
        getAdverb();
        setNewPoem([...newPoem, `${adverb} `]);
    };
    const addConjunction = () => {
        getConjunction();
        setNewPoem([...newPoem, `${conjunction} `]);
    };
    const addPreposition = () => {
        getPreposition();
        setNewPoem([...newPoem, `${preposition} `]);
    };
    const addHelpingVerb = () => {
        getHelpingVerb();
        setNewPoem([...newPoem, `${helpingVerb} `]);
    };
    const addPronoun = () => {
        getPronoun();
        setNewPoem([...newPoem, `${pronoun} `]);
    };
    const addDeterminer = () => {
        getDeterminer();
        setNewPoem([...newPoem, `${determiner} `]);
    };

    let [structure, setStructure] = useState([]);

    const generate = () => {
        if (structure.length = 0) {
            setStructure([...structure, Math.floor(Math.random() * 9) + 1]);
        }
    };

    const translate = () => {
        structure.map((int, i) => {
            if (int == 1) {
                addNoun();
            } else if (int == 2) {
                addVerb();
            } else if (int == 3) {
                addAdjective();
            } else if (int == 4) {
                addAdverb();
            } else if (int == 5) {
                addConjunction();
            } else if (int == 6) {
                addPreposition();
            } else if (int == 7) {
                addHelpingVerb();
            } else if (int == 8) {
                addPronoun();
            } else if (int == 9) {
                addDeterminer();
            }
            return (
                newPoem
            );
        });
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
            <button onClick={getDeterminer}>Get Determiner</button>
            <p>Determiner: {determiner}</p>
            {/* <button onClick={newSentence}>Get Sentence</button>
            <p>Did it?: {newPoem}</p> */}
        </div>
    );
};

export default AddPoemPage;