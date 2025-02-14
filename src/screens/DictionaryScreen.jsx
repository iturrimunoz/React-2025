import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addWord, removeWord } from '../features/dictionary/dictionarySlice';
import { translateWord } from '../features/dictionary/dictionaryAPI';
import DictionaryButton from '../components/DictionaryButton';
import DictionaryInput from '../components/DictionaryInput';
import '../styles/dictionaryStyles.css';
import Modal from  '../components/Modal';


function DictionaryScreen() {
  const dispatch = useDispatch();
  const [translatedWord, setTranslatedWord] = useState('');
  const [wordToTranslate, setWordToTranslate] = useState('');
  const [fromLanguage, setFromLanguage] = useState('spanish');
  const [toLanguage, setToLanguage] = useState('english');
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);


  const handleAddWord = ({ word, language }) => {
    dispatch(addWord({ word, language }));
  };

  const handleRemoveWord = ({ word, language }) => {
    dispatch(removeWord({ word, language }));
  };

  const handleTranslateWord = async () => {
    try {
      const translation = await translateWord(wordToTranslate, fromLanguage, toLanguage);
      setTranslatedWord(translation);
    } catch (error) {
      console.error('Error translating word:', error);
    }
  };

  
  const openModal = (content) => {
    setModalContent(content);
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
    setModalContent(null);
  }


  return (
    <div className="dictionary-screen">
      <h1>Diccionario USIP</h1>
      
      <hr></hr>
      <p> Este modulo(diccionario)corresponde al recuperatorio del 
          modulo-7 ReactJS<p>
      </p> 
         ref=https://github.com/iturrimunoz/React-2025.
      </p>
      <br>
      </br>
      <hr></hr>

      {/* Formulario para añadir palabras */}
      <DictionaryButton onClick={() => openModal('add')} label="Agregar palabra" /> 
      <DictionaryButton onClick={() => openModal('remove')} label="Eliminar palabra" />
      <p></p>
      <DictionaryButton onClick={() => openModal('translate')} label="Traducir palabra" />


      {/*  Modal */}
      <Modal show={showModal} onClose={closeModal} title={modalContent === 'remove' ? 'Eliminar palabra' : 'Traducir palabra'}>
        {modalContent === 'remove' && (
          <div>
            <p>¿Estás seguro de que deseas eliminar la palabra "example" en inglés?</p>
            <button onClick={() => { handleRemoveWord({ word: 'example', language: 'english' }); closeModal(); }}>Sí</button>
            <button onClick={closeModal}>No</button>
          </div>
        )}
        {modalContent === 'translate' && (
          <div className="translation">
            <p>Traducir palabra:</p>
            <input
              type="text"
              value={wordToTranslate}
              onChange={(e) => setWordToTranslate(e.target.value)}
              placeholder="Escribe palabra a traducir"
            />  
            <button onClick={() => { handleTranslateWord(); closeModal(); }}>Traducir</button>
            <p>Traducción: {translatedWord}</p>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default DictionaryScreen;
