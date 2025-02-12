import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeWord } from '../actions';
import '../styles/dictionary.css';

const RemoveWordModal = ({ onClose }) => {
    const [word, setWord] = useState('');
    const dispatch = useDispatch();

    const handleRemove = () => {
        if (word.trim()) {
            dispatch(removeWord(word));
            onClose();
        }
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Eliminar Palabra</h2>
                <input
                    type="text"
                    value={word}
                    onChange={(e) => setWord(e.target.value)}
                    placeholder="Palabra a eliminar"
                />
                <button onClick={handleRemove}>Eliminar</button>
                <button onClick={onClose}>Cerrar</button>
            </div>
        </div>
    );
};

export default RemoveWordModal; 