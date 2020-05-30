import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import fetchProduct from './actions';
import ProductSidebar from './features/product/ProductSidebar';
import './App.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  return (
    <div className="App">
      <div className="container">
        <ProductSidebar />
      </div>
    </div>
  );
}

export default App;
