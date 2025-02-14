import React, { useState } from 'react';

function DictionaryInput({ onSubmit }) {
  const [word, setWord] = useState('');
  const [language, setLanguage] = useState('spanish');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ word, language });
    setWord('');
  };

  return (
    <form onSubmit={handleSubmit} className="dictionary-input">
      <input
        type="text"
        value={word}
        onChange={(e) => setWord(e.target.value)}
        placeholder="Ingrese palabra"
      />
      <select onChange={(e) => setLanguage(e.target.value)} value={language}>
        <option value="spanish">Español</option>
        <option value="english">Inglés</option>
        <option value="portuguese">Portugués</option>
      </select>
      <button type="submit">Añadir</button>
    </form>
  );
}

export default DictionaryInput;
