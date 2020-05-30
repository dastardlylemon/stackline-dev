import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import fetchProduct from './actions';
import './App.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  return (
    <div className="App">
      hello world
    </div>
  );
}

export default App;
