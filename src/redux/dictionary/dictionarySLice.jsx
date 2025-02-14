import { createSlice } from '@reduxjs/toolkit';

const dictionarySlice = createSlice({
  name: 'dictionary',
  initialState: [],
  reducers: {
    addWord: (state, action) => {
      state.push(action.payload);
    },
    removeWord: (state, action) => {
      return state.filter(word => word.spanish !== action.payload && word.english !== action.payload && word.portuguese !== action.payload);
    },
    translateWord: (state, action) => {
      return state.find(word => word.spanish === action.payload || word.english === action.payload || word.portuguese === action.payload);
    }
  }
});

export const { addWord, removeWord, translateWord } = dictionarySlice.actions;
export default dictionarySlice.reducer;
