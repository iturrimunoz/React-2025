import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import '../../redux/dictionary/dictionarySLice';
import '../../styles/modalStyles.css';




const TranslateWordModal = ({ isOpen, onClose }) => {
  const dictionary = useSelector(state => state.dictionary);
  const [word, setWord] = useState('');
  const [translation, setTranslation] = useState('');
  const [error, setError] = useState('');

  const handleTranslate = () => {
    if (!word) {
      setError('El campo es obligatorio');
      return;
    }

    const translation = dictionary.find(
      item => item.spanish === word || item.english === word || item.portuguese === word
    );

    if (!translation) {
      setError('La palabra no se encontró en el diccionario');
      setTranslation('');
      return;
    }

    setError('');
    setTranslation(`${translation.spanish} / ${translation.english} / ${translation.portuguese}`);
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Traducir Palabra</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <input
          type="text"
          placeholder="Palabra"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        <button onClick={handleTranslate}>Traducir</button>
        <textarea value={translation} readOnly />
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default TranslateWordModal;
