import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contact: [],
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    addContact: (state, action) => {
      state.contact.push(action.payload);
    },
    removeContact: (state, action) => {
      state.contact = state.contact.filter(
        contact => contact.name !== action.payload
      );
    },
  },
});

export const { addContact, removeContact } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;
