import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addWord } from '../actions';

const DictionaryForm = () => {
    const [word, setWord] = useState({ spanish: '', english: '', portuguese: '' });
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (word.spanish && word.english && word.portuguese) {
            dispatch(addWord(word));
            setWord({ spanish: '', english: '', portuguese: '' });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={word.spanish}
                onChange={(e) => setWord({ ...word, spanish: e.target.value })}
                placeholder="Español"
            />
            <input
                type="text"
                value={word.english}
                onChange={(e) => setWord({ ...word, english: e.target.value })}
                placeholder="Inglés"
            />
            <input
                type="text"
                value={word.portuguese}
                onChange={(e) => setWord({ ...word, portuguese: e.target.value })}
                placeholder="Portugués"
            />
            <button type="submit">Agregar Palabra</button>
        </form>
    );
};

export default DictionaryForm;