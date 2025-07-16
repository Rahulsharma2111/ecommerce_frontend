import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import RegisterUser from "./User/RegisterUser";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductHome from './Product/ProductHome';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/register" element={<RegisterUser />} />
        <Route path="/products" element={<ProductHome/>} />
      </Routes>
    </Router>
  </React.StrictMode>
);

