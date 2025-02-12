import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addWord } from '../../dictionary/actions';
import '../styles/dictionary.css';

const AddWordModal = ({ onClose }) => {
    const [word, setWord] = useState({ spanish: '', english: '', portuguese: '' });
    const dispatch = useDispatch();

    const handleAdd = () => {
        if (word.spanish && word.english && word.portuguese) {
            dispatch(addWord(word));
            onClose();
        }
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Agregar Palabra</h2>
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
                <button onClick={handleAdd}>Agregar</button>
                <button onClick={onClose}>Cerrar</button>
            </div>
        </div>
    );
};

export default AddWordModal; 