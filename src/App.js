import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import fetchProduct from './actions';
import ProductSidebar from './features/product/ProductSidebar';
import SalesCharts from './features/sales/SalesCharts';
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
        <SalesCharts />
      </div>
    </div>
  );
}

export default App;
