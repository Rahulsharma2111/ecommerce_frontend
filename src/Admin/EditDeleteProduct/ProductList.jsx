import React, { useState, useEffect } from 'react';
import './ProductListStyle.css';
const ProductList = () => {
  // Sample product data - replace with API call
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 99.99,
      category: 'Electronics',
      stock: 45,
      image: 'https://via.placeholder.com/150',
      description: 'Noise-cancelling wireless headphones with 30hr battery life'
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: 199.99,
      category: 'Wearables',
      stock: 32,
      image: 'https://via.placeholder.com/150',
      description: 'Fitness tracking with heart rate monitor'
    },
    {
      id: 3,
      name: 'Bluetooth Speaker',
      price: 59.99,
      category: 'Audio',
      stock: 18,
      image: 'https://via.placeholder.com/150',
      description: 'Portable waterproof speaker with 20hr playtime'
    }
  ]);

  const [loading, setLoading] = useState(true);
  const [confirmDelete, setConfirmDelete] = useState(null);

  // Simulate API fetch
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const handleDelete = (productId) => {
    if (confirmDelete === productId) {
      // Actual deletion would happen here (API call)
      setProducts(products.filter(product => product.id !== productId));
      setConfirmDelete(null);
    } else {
      setConfirmDelete(productId);
      // Reset confirmation after 5 seconds
      setTimeout(() => setConfirmDelete(null), 5000);
    }
  };

  const handleEdit = (productId) => {
    // Edit functionality would go here
    console.log('Editing product:', productId);
    // Typically this would open a modal or navigate to edit page
  };

  return (
    <div className="product-management">
      <h2>Product Inventory</h2>
      
      {loading ? (
        <div className="loading">Loading products...</div>
      ) : (
        <div className="product-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              
              <div className="product-details">
                <h3>{product.name}</h3>
                <div className="detail-row">
                  <span className="label">Price:</span>
                  <span className="value">${product.price.toFixed(2)}</span>
                </div>
                <div className="detail-row">
                  <span className="label">Category:</span>
                  <span className="value">{product.category}</span>
                </div>
                <div className="detail-row">
                  <span className="label">Stock:</span>
                  <span className={`value ${product.stock < 10 ? 'low-stock' : ''}`}>
                    {product.stock} {product.stock < 10 && '(Low Stock)'}
                  </span>
                </div>
                <div className="detail-row full-width">
                  <span className="label">Description:</span>
                  <p className="value">{product.description}</p>
                </div>
              </div>
              
              <div className="product-actions">
                <button 
                  onClick={() => handleEdit(product.id)}
                  className="edit-btn"
                >
                  Edit
                </button>
                
                {confirmDelete === product.id ? (
                  <button 
                    onClick={() => handleDelete(product.id)}
                    className="delete-btn confirm"
                  >
                    Confirm Delete?
                  </button>
                ) : (
                  <button 
                    onClick={() => handleDelete(product.id)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;