import React, { useState } from 'react';
import AddWordModal from '../components/Modals/AddWordModal';
import RemoveWordModal from '../components/Modals/RemoveWordModal';
import TranslateWordModal from '../components/Modals/TranslateWordModal';

const DictionaryScreen = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);
  const [isTranslateModalOpen, setIsTranslateModalOpen] = useState(false);

  return (
    <div className="dictionary-container">
      <h1>Diccionario USIP</h1>
      <p>este MODULO(diccionario) corresponde al recuperatorio del</p>
      <p>modulo-7 ReactJS. URL: https://iturrimunoz.github.io/React-2025.git</p>
      <br />
      <hr></hr>
      <p></p>
      <button onClick={() => setIsAddModalOpen(true)}>Agregar Palabra</button>
      <button onClick={() => setIsRemoveModalOpen(true)}>Eliminar Palabra</button>
      <br />
      <button onClick={() => setIsTranslateModalOpen(true)}>Traducir Palabra</button>

      <AddWordModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />
      <RemoveWordModal isOpen={isRemoveModalOpen} onClose={() => setIsRemoveModalOpen(false)} />
      <TranslateWordModal isOpen={isTranslateModalOpen} onClose={() => setIsTranslateModalOpen(false)} />
    </div>
  );
};

export default DictionaryScreen;
