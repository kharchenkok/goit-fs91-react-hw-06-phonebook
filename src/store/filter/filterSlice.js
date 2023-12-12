import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    nameFilter: '',
    colorFilter: '',
  },
  reducers: {
    setNameFilterAction: (state, action) => {
      state.nameFilter = action.payload;
    },
    setColorFilterAction: (state, action) => {
      state.colorFilter = action.payload;
    },
  },
});

export const { setNameFilterAction, setColorFilterAction } =
  filterSlice.actions;
export const filterReducer = filterSlice.reducer;
