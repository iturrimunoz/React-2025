import React, { useState } from 'react';
import DictionaryList from '../components/DictionaryList';
import AddWordModal from '../components/AddWordModal';
import RemoveWordModal from '../components/RemoveWordModal';
import TranslateWordModal from '../components/TranslateWordModal';
import '../styles/dictionary.css';

const DictionaryScreen = () => {
    const [showAddModal, setShowAddModal] = useState(false);
    const [showRemoveModal, setShowRemoveModal] = useState(false);
    const [showTranslateModal, setShowTranslateModal] = useState(false);

    return (
        <div className="dictionary-screen">
            <h1>Diccionario USIP </h1>
            <hr></hr>
            <p>Este modulo(diccionario) corresponde al recuperatorio del Modulo-7 ReactJS.</p>
            <br></br>
            URL: https://iturrimunoz.github.io/React-2025/
            <hr></hr>
            <button onClick={() => setShowAddModal(true)}>Agregar Palabra</button>
            <button onClick={() => setShowRemoveModal(true)}>Eliminar Palabra</button>
            <p></p>
            <button onClick={() => setShowTranslateModal(true)}>Traducir Palabra</button>
            <DictionaryList />
            {showAddModal && <AddWordModal onClose={() => setShowAddModal(false)} />}
            {showRemoveModal && <RemoveWordModal onClose={() => setShowRemoveModal(false)} />}
            {showTranslateModal && <TranslateWordModal onClose={() => setShowTranslateModal(false)} />}
        </div>
    );
};

export default DictionaryScreen;