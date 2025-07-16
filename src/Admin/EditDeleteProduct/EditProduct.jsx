import React, { useState, useEffect } from 'react';
import './EditProductStyle.css';
const ProductList = () => {
  // Sample product data
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
    }
  ]);

  const [loading, setLoading] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(null);
  const [editingProduct, setEditingProduct] = useState(null);
  const [editFormData, setEditFormData] = useState({
    name: '',
    price: '',
    category: '',
    stock: '',
    description: ''
  });

  // Set up edit form when product is selected for editing
  useEffect(() => {
    if (editingProduct) {
      setEditFormData({
        name: editingProduct.name,
        price: editingProduct.price,
        category: editingProduct.category,
        stock: editingProduct.stock,
        description: editingProduct.description
      });
    }
  }, [editingProduct]);

  const handleDelete = (productId) => {
    if (confirmDelete === productId) {
      setProducts(products.filter(product => product.id !== productId));
      setConfirmDelete(null);
    } else {
      setConfirmDelete(productId);
      setTimeout(() => setConfirmDelete(null), 5000);
    }
  };

  const handleEditClick = (product) => {
    setEditingProduct(product);
  };

  const handleEditFormChange = (e) => {
    const { name, value } = e.target;
    setEditFormData({
      ...editFormData,
      [name]: value
    });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const updatedProducts = products.map(product => 
      product.id === editingProduct.id ? { ...product, ...editFormData } : product
    );
    setProducts(updatedProducts);
    setEditingProduct(null);
  };

  const handleCancelEdit = () => {
    setEditingProduct(null);
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
                  onClick={() => handleEditClick(product)}
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

      {/* Edit Product Modal */}
      {editingProduct && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Edit Product</h3>
            <form onSubmit={handleEditSubmit}>
              <div className="form-group">
                <label>Product Name</label>
                <input
                  type="text"
                  name="name"
                  value={editFormData.name}
                  onChange={handleEditFormChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label>Price ($)</label>
                <input
                  type="number"
                  name="price"
                  value={editFormData.price}
                  onChange={handleEditFormChange}
                  min="0"
                  step="0.01"
                  required
                />
              </div>
              
              <div className="form-group">
                <label>Category</label>
                <input
                  type="text"
                  name="category"
                  value={editFormData.category}
                  onChange={handleEditFormChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label>Stock Quantity</label>
                <input
                  type="number"
                  name="stock"
                  value={editFormData.stock}
                  onChange={handleEditFormChange}
                  min="0"
                  required
                />
              </div>
              
              <div className="form-group">
                <label>Description</label>
                <textarea
                  name="description"
                  value={editFormData.description}
                  onChange={handleEditFormChange}
                  required
                />
              </div>
              
              <div className="modal-actions">
                <button type="button" onClick={handleCancelEdit} className="cancel-btn">
                  Cancel
                </button>
                <button type="submit" className="save-btn">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;