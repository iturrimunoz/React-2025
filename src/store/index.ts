import { configureStore } from '@reduxjs/toolkit';
import { dictionaryReducer } from '../modules/dictionary/reducer';

const store = configureStore({
    reducer: {
        dictionary: dictionaryReducer,
        // otros reducers...
    }
});

export default store; 