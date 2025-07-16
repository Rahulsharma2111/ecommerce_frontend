import React, { useState } from 'react';
import './ProductStyle.css';
import './ProductListStyle.css';
const ProductUploadForm = () => {
  const [productData, setProductData] = useState({
    imageUrl: '',
    name: '',
    price: '',
    category: '',
    brand: '',
    description: ''
  });

  const [previewImage, setPreviewImage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
        setProductData(prev => ({
          ...prev,
          imageUrl: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log('Product submitted:', productData);
      setIsSubmitting(false);
      setSuccessMessage('Product uploaded successfully!');
      // Reset form after 2 seconds
      setTimeout(() => {
        setProductData({
          imageUrl: '',
          name: '',
          price: '',
          category: '',
          brand: '',
          description: ''
        });
        setPreviewImage(null);
        setSuccessMessage('');
      }, 2000);
    }, 1500);
  };

  return (
    <div className="product-upload-container">
      <h2>Upload New Product</h2>

      <form onSubmit={handleSubmit} className="product-form">
        <div className="form-group image-upload">
          <label htmlFor="product-image">Product Image</label>
          <div className="image-preview">
            {previewImage ? (
              <img src={previewImage} alt="Preview" className="preview-image" />
            ) : (
              <div className="placeholder">No image selected</div>
            )}
          </div>
          <input
            type="file"
            id="product-image"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="name">Product Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={productData.name}
            onChange={handleChange}
            placeholder="Wireless Keyboard"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Price ($)</label>
          <input
            type="number"
            id="price"
            name="price"
            value={productData.price}
            onChange={handleChange}
            placeholder="79.99"
            min="0"
            step="0.01"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            id="category"
            name="category"
            value={productData.category}
            onChange={handleChange}
            placeholder="Accessories"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="brand">Brand</label>
          <input
            type="text"
            id="brand"
            name="brand"
            value={productData.brand}
            onChange={handleChange}
            placeholder="Logitech"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={productData.description}
            onChange={handleChange}
            placeholder="Ergonomic design with 2-year battery life"
            required
          />
        </div>

        <button type="submit" disabled={isSubmitting} className="submit-btn">
          {isSubmitting ? 'Uploading...' : 'Upload Product'}
        </button>

        {successMessage && <div className="success-message">{successMessage}</div>}
      </form>
    </div>
  );
};

export default ProductUploadForm;