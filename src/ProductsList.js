import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch products from the backend API
  useEffect(() => {
    axios.get('https://fullproject-4vl1.onrender.com/api/products')
      .then(response => {
        setProducts(response.data);  // Set products from API response
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching products');
        setLoading(false);
      });
  }, []);

  // Show loading state
  if (loading) {
    return <p>Loading products...</p>;
  }

  // Show error if any
  if (error) {
    return <p>{error}</p>;
  }

  // Render the list of products
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map(product => (
          <Link style={{textDecoration:'none', color:'black'}} to={`/product/${product.id}`}>
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>Price: ${product.price.toFixed(2)}</p>
          </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;
