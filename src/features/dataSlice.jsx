import { createSlice } from '@reduxjs/toolkit';

const initialData = JSON.parse(localStorage.getItem('data')) || [
  { id: 1, name: 'John Doe', age: 30, country: 'India' },
  { id: 2, name: 'Jane Smith', age: 25, country: 'USA' },
];

const initialState = {
  data: initialData,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    addData: (state, action) => {
      const newId = state.data.length > 0 ? state.data[state.data.length - 1].id + 1 : 1;
      const newData = { id: newId, ...action.payload };
      state.data.push(newData);
      localStorage.setItem('data', JSON.stringify(state.data));
    },
    updateData: (state, action) => {
      const { id, updatedData } = action.payload;
      const index = state.data.findIndex((item) => item.id === id);
      if (index !== -1) {
        state.data[index] = { ...state.data[index], ...updatedData };
        localStorage.setItem('data', JSON.stringify(state.data));
      }
    },
    deleteData: (state, action) => {
      state.data = state.data.filter((item) => item.id !== action.payload);
      localStorage.setItem('data', JSON.stringify(state.data));
    },
  },
});

export const { addData, updateData, deleteData } = dataSlice.actions;
export default dataSlice.reducer;
