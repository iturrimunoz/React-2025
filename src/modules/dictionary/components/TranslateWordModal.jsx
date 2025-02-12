import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import '../styles/dictionary.css';

const TranslateWordModal = ({ onClose }) => {
    const [word, setWord] = useState('');
    const [language, setLanguage] = useState('spanish');
    const words = useSelector(state => state.dictionary.words);

    const handleTranslate = () => {
        const foundWord = words.find(w => w[language] === word);
        if (foundWord) {
            alert(`Traducción: Español: ${foundWord.spanish}, Inglés: ${foundWord.english}, Portugués: ${foundWord.portuguese}`);
        } else {
            alert('Palabra no encontrada');
        }
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Traducir Palabra</h2>
                <input
                    type="text"
                    value={word}
                    onChange={(e) => setWord(e.target.value)}
                    placeholder="Palabra a traducir"
                />
                <select value={language} onChange={(e) => setLanguage(e.target.value)}>
                    <option value="spanish">Español</option>
                    <option value="english">Inglés</option>
                    <option value="portuguese">Portugués</option>
                </select>
                <button onClick={handleTranslate}>Traducir</button>
                <button onClick={onClose}>Cerrar</button>
            </div>
        </div>
    );
};

export default TranslateWordModal; 