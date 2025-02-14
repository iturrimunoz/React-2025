import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import { removeWord } from '../redux/dictionary/dictionarySlice';
import '../../styles/modalStyles.css';

const RemoveWordModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const dictionary = useSelector(state => state.dictionary);
  const [word, setWord] = useState('');
  const [error, setError] = useState('');

  const handleRemove = () => {
    if (!word) {
      setError('El campo es obligatorio');
      return;
    }

    const wordExists = dictionary.some(
      item => item.spanish === word || item.english === word || item.portuguese === word
    );

    if (!wordExists) {
      setError('La palabra no se encontró en el diccionario');
      return;
    }

    dispatch(removeWord(word));
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Eliminar Palabra</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <input
          type="text"
          placeholder="Palabra"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        <button onClick={handleRemove}>Eliminar</button>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default RemoveWordModal;
