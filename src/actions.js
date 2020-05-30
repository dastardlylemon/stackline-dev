import { createAsyncThunk } from '@reduxjs/toolkit';
import data from './data.json';

const fetchProduct = createAsyncThunk(
  'product/fetchProduct',
  () => {
    // make an async network request for this json
    return data;
  },
);

export default fetchProduct;


