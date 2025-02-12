import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  module: 'React Mod7',
  username: '',
  email: '',
  password: '',
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateModule: (state, action) => {
      state.module = action.payload;
    },
    updateUsername: (state, action) => {
      state.username = action.payload;
    },
    updateEmail: (state, action) => {
      state.email = action.payload;
    },
    updatePassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

export const {
  updateModule,
  updateUsername,
  updateEmail,
  updatePassword,
} = formSlice.actions;

export default formSlice.reducer;
