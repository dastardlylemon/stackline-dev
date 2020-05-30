import { createSlice } from '@reduxjs/toolkit';
import fetchProduct from '../../actions';

export const salesSlice = createSlice({
  name: 'sales',
  initialState: {
    sales: null,
  },
  extraReducers: {
    [fetchProduct.fulfilled]: (state, action) => {
      const { sales } = action.payload[0];
      return {
        ...state,
        sales,
      };
    },
  },
});

export const selectSales = state => state.sales;

export default salesSlice.reducer;
