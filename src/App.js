import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductsList from './ProductsList';
import SingleProduct from './SingleProduct';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductsList />} />   {/* List of all products */}
        <Route path="/product/:id" element={<SingleProduct />} />  {/* Single product page */}
      </Routes>
    </Router>
  );
};

export default App;
