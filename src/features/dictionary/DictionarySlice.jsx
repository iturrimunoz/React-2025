import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dictionary: {
    spanish: [],
    english: [],
    portuguese: [],
  },
};

const dictionarySlice = createSlice({
  name: 'dictionary',
  initialState,
  reducers: {
    addWord: (state, action) => {
      const { language, word } = action.payload;
      if (!state.dictionary[language].includes(word)) {
        state.dictionary[language].push(word);
      }
    },
    removeWord: (state, action) => {
      const { language, word } = action.payload;
      state.dictionary[language] = state.dictionary[language].filter(
        (w) => w !== word
      );
    },
  },
});

export const { addWord, removeWord } = dictionarySlice.actions;

export default dictionarySlice.reducer;
