import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import { addWord } from '../redux/dictionary/dictionarySlice';
import '../../styles/modalStyles.css';


const AddWordModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const dictionary = useSelector(state => state.dictionary);
  const [spanish, setSpanish] = useState('');
  const [english, setEnglish] = useState('');
  const [portuguese, setPortuguese] = useState('');
  const [error, setError] = useState('');

  const handleAdd = () => {
    if (!spanish || !english || !portuguese) {
      setError('Todos los campos son obligatorios');
      return;
    }

    const wordExists = dictionary.some(
      word => word.spanish === spanish || word.english === english || word.portuguese === portuguese
    );

    if (wordExists) {
      setError('La palabra ya existe en el diccionario');
      return;
    }

    dispatch(addWord({ spanish, english, portuguese }));
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Agregar Palabra</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <input
          type="text"
          placeholder="Español"
          value={spanish}
          onChange={(e) => setSpanish(e.target.value)}
        />
        <input
          type="text"
          placeholder="Inglés"
          value={english}
          onChange={(e) => setEnglish(e.target.value)}
        />
        <input
          type="text"
          placeholder="Portugués"
          value={portuguese}
          onChange={(e) => setPortuguese(e.target.value)}
        />
        <button onClick={handleAdd}>Agregar</button>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default AddWordModal;
