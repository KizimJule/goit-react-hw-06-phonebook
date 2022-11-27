import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
  },
  reducers: {
    filterList(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { filterList } = filterSlice.actions;
export default filterSlice.reducer;
