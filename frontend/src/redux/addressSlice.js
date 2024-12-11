import { createSlice } from '@reduxjs/toolkit';

const addressSlice = createSlice({
  name: 'address',
  initialState: [],
  reducers: {
    addAddress: (state, action) => {
      state.push(action.payload);
    },
    updateAddress: (state, action) => {
      const index = state.findIndex(a => a.id === action.payload.id);
      if (index !== -1) state[index] = action.payload;
    },
    deleteAddress: (state, action) => {
      return state.filter(a => a.id !== action.payload);
    },
  },
});

export const { addAddress, updateAddress, deleteAddress } = addressSlice.actions;
export default addressSlice.reducer;
