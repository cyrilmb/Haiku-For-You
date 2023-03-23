import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import PrintPoem from './PrintPoem';

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

    let newPoem = [];

    const addNoun = () => {
        if (newPoem.includes(`${noun[0]}`)) {
            newPoem.push(`${noun[1]}`);
        } else {
            newPoem.push(`${noun[0]}`);
            getNoun();
        }
    };

    const addVerb = () => {
        if (newPoem.includes(`${verb[0]}`)) {
            newPoem.push(`${verb[1]}`);
        } else {
            newPoem.push(`${verb[0]}`);
            getVerb();
        };
    };
    const addAdjective = () => {
        if (newPoem.includes(`${adjective[0]}`)) {
            newPoem.push(`${adjective[1]}`);
        } else {
            newPoem.push(`${adjective[0]}`);
            getAdjective();
        }
    };
    const addAdverb = () => {
        if (newPoem.includes(`${adverb[0]}`)) {
            newPoem.push(`${adverb[1]}`);
        } else {
            newPoem.push(`${adverb[0]}`);
            getAdverb();
        }
    };
    const addConjunction = () => {
        if (newPoem.includes(`${conjunction[0]}`)) {
            newPoem.push(`${conjunction[1]}`);
        } else {
            newPoem.push(`${conjunction[0]}`);
            getConjunction();
        }
    };
    const addPreposition = () => {
        if (newPoem.includes(`${preposition[0]}`)) {
            newPoem.push(`${preposition[1]}`);
        } else {
            newPoem.push(`${preposition[0]}`);
            getPreposition();
        }
    };
    const addHelpingVerb = () => {
        if (newPoem.includes(`${helpingVerb[0]}`)) {
            newPoem.push(`${helpingVerb[1]}`);
        } else {
            newPoem.push(`${helpingVerb[0]}`);
            getHelpingVerb();
        }
    };

    const addPronoun = () => {
        if (newPoem.includes(`${pronoun[0]}`)) {
            newPoem.push(`${pronoun[1]}`);
        } else {
            newPoem.push(`${pronoun[0]}`);
            getPronoun();
        }
    };

    const addDeterminer = () => {
        if (newPoem.includes(`${determiner[0]}`)) {
            newPoem.push(`${determiner[1]}`);
        } else {
            newPoem.push(`${determiner[0]}`);
            getDeterminer();
        }
    };

    let structure = [];

    const generate = () => {
        if (structure.length === 0) {
            structure.push(Math.floor(Math.random() * 9) + 1);
            generate();
        } else if (structure.length === 10) {
            translate(structure);
        } else if (structure[structure.length - 1] === 1) {
            let nextInt = [2, 3, 4, 6, 7];
            let randInt = nextInt[Math.floor(Math.random() * nextInt.length)];
            structure.push(randInt);
            generate();
        } else if (structure[structure.length - 1] === 2) {
            let nextInt = [1, 3, 4, 5, 6, 8, 9];
            let randInt = nextInt[Math.floor(Math.random() * nextInt.length)];
            structure.push(randInt);
            generate();
        } else if (structure[structure.length - 1] === 3) {
            let nextInt = [1, 2, 4, 5, 6, 8, 9];
            let randInt = nextInt[Math.floor(Math.random() * nextInt.length)];
            structure.push(randInt);
            generate();
        } else if (structure[structure.length - 1] === 4) {
            let nextInt = [1, 2, 3, 5, 6, 8, 9];
            let randInt = nextInt[Math.floor(Math.random() * nextInt.length)];
            structure.push(randInt);
            generate();
        } else if (structure[structure.length - 1] === 5) {
            let nextInt = [3, 4, 6, 8, 9];
            let randInt = nextInt[Math.floor(Math.random() * nextInt.length)];
            structure.push(randInt);
            generate();
        } else if (structure[structure.length - 1] === 6) {
            let nextInt = [1, 3, 4, 8, 9];
            let randInt = nextInt[Math.floor(Math.random() * nextInt.length)];
            structure.push(randInt);
            generate();
        } else if (structure[structure.length - 1] === 7) {
            let nextInt = [2, 4, 5, 8, 9];
            let randInt = nextInt[Math.floor(Math.random() * nextInt.length)];
            structure.push(randInt);
            generate();
        } else if (structure[structure.length - 1] === 8) {
            let nextInt = [1, 3, 4, 5, 6, 7];
            let randInt = nextInt[Math.floor(Math.random() * nextInt.length)];
            structure.push(randInt);
            generate();
        } else if (structure[structure.length - 1] === 9) {
            let nextInt = [1, 3, 4, 7];
            let randInt = nextInt[Math.floor(Math.random() * nextInt.length)];
            structure.push(randInt);
            generate();
        };
    };

    const [printPoem, setPrintPoem] = useState([]);

    const translate = (numberPoem) => {
        for (let int of numberPoem) {
            if (int === 1) {
                addNoun();
            } else if (int === 2) {
                addVerb();
            } else if (int === 3) {
                addAdjective();
            } else if (int === 4) {
                addAdverb();
            } else if (int === 5) {
                addConjunction();
            } else if (int === 6) {
                addPreposition();
            } else if (int === 7) {
                addHelpingVerb();
            } else if (int === 8) {
                addPronoun();
            } else if (int === 9) {
                addDeterminer();
            }

        };
        setPrintPoem([newPoem]);
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
            <button onClick={generate}>Get Sentence</button>
            <p>Did it?:</p>

            {printPoem.map((word, i) => {
                return (<p key={i}> {`${word}`} </p>);
            })}


        </div>
    );
};

export default AddPoemPage;