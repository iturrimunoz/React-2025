import React from 'react';

function DictionaryButton({ onClick, label }) {
  return (
    <button onClick={onClick} className="dictionary-button">
      {label}
    </button>
  );
}

export default DictionaryButton;
