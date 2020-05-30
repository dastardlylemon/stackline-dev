import { createSlice } from '@reduxjs/toolkit';
import fetchProduct from '../../actions';

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    id: null,
    title: null,
    image: null,
    subtitle: null,
    tags: null,
  },
  extraReducers: {
    [fetchProduct.fulfilled]: (state, action) => {
      const { id, title, image, subtitle, tags } = action.payload[0];
      return {
        ...state,
        id,
        title,
        image,
        subtitle,
        tags,
      };
    },
  },
});

export const selectProduct = state => state.product;

export default productSlice.reducer;
