import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState,
  reducers: {
    getFilteredName: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { getFilteredName } = filterSlice.actions;
export const FilterReducer = filterSlice.reducer;
