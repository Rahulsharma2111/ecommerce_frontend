import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import RegisterUser from "./User/RegisterUser";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductHome from './Product/ProductHome';
import ProductList from "./Admin/EditDeleteProduct/EditProduct";
import ProductUploadForm from "./Admin/UploadProduct/Product";
import History from './History/History';
import DashBoard from './Admin/AnalysisDashboard/DashBoard';
import BillReceipt from './Bills/BillRescipt';
import NavBar from './NavBar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/register" element={<RegisterUser />} />
        <Route path="/products" element={<ProductHome/>} />
        <Route path="/history" element={<History/>} />
        <Route path="/invoice" element={<BillReceipt/>} />
        <Route path="/newproduct" element={<ProductUploadForm/>} />
        <Route path="/dashboard" element={<DashBoard/>} />
        <Route path="/inventory" element={<ProductList/>} />
         
      </Routes>
    </Router>
  </React.StrictMode>
);

