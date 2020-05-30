import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/product/productSlice';
import salesReducer from '../features/sales/salesSlice';

export default configureStore({
  reducer: {
    product: productReducer,
    sales: salesReducer,
  },
});
