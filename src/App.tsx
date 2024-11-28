import React from 'react';
import './App.scss';
import Navbar from './components/navbar';
import ProductsList from './components/products-list';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ProductsList />
    </div>
  );
}

export default App;
