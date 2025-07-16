import React, { useState } from 'react';
import './historyStyle.css';

const PurchaseHistory = () => {
  const [purchaseHistory] = useState([
    {
      id: 'ORD-12345',
      date: '2023-10-15',
      status: 'Delivered',
      items: [
        { id: 1, name: 'Wireless Headphones', price: 99.99, quantity: 1 },
        { id: 2, name: 'USB-C Cable', price: 12.99, quantity: 2 }
      ],
      total: 125.97,
      deliveryDate: '2023-10-20'
    },
    {
      id: 'ORD-67890',
      date: '2023-09-28',
      status: 'Shipped',
      items: [
        { id: 3, name: 'Smart Watch', price: 199.99, quantity: 1 }
      ],
      total: 199.99,
      deliveryDate: '2023-11-05'
    }
    ,
    {
      id: 'ORD-67453',
      date: '2023-09-28',
      status: 'Shipped',
      items: [
        { id: 3, name: 'Smart Phone', price: 1599.99, quantity: 1 }
      ],
      total: 1599.99,
      deliveryDate: '2023-11-05'
    }
  ]);

  const [expandedOrder, setExpandedOrder] = useState(null);

  const toggleOrderDetails = (orderId) => {
    setExpandedOrder(expandedOrder === orderId ? null : orderId);
  };

  return (
    <div className="purchase-history">
      <h1>Your Purchase History</h1>
      
      {purchaseHistory.length === 0 ? (
        <div className="empty-history">
          <p>You haven't made any purchases yet.</p>
          <button>Start Shopping</button>
        </div>
      ) : (
        <div className="orders-list">
          {purchaseHistory.map((order) => (
            <div key={order.id} className="order-card">
              <div 
                className="order-summary"
                onClick={() => toggleOrderDetails(order.id)}
              >
                <div>
                  <h3>Order #{order.id}</h3>
                  <p className="order-date">Placed on {order.date}</p>
                </div>
                <div className="order-status">
                  <span className={`status-badge ${order.status.toLowerCase()}`}>
                    {order.status}
                  </span>
                  <span className="order-total">${order.total.toFixed(2)}</span>
                  <span className={`toggle-icon ${expandedOrder === order.id ? 'open' : ''}`}>
                    ▼
                  </span>
                </div>
              </div>
              
              {expandedOrder === order.id && (
                <div className="order-details">
                  <div className="items-list">
                    <h4>Items Purchased</h4>
                    {order.items.map((item) => (
                      <div key={item.id} className="item">
                        <div className="item-info">
                          <p className="item-name">{item.name}</p>
                          <p className="item-quantity">Qty: {item.quantity}</p>
                        </div>
                        <p className="item-price">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="order-meta">
                    <div className="meta-section">
                      <h5>Order Summary</h5>
                      <div className="summary-row">
                        <span>Subtotal:</span>
                        <span>${order.total.toFixed(2)}</span>
                      </div>
                      <div className="summary-row">
                        <span>Shipping:</span>
                        <span>Free</span>
                      </div>
                      <div className="summary-row total">
                        <span>Total:</span>
                        <span>${order.total.toFixed(2)}</span>
                      </div>
                    </div>
                    
                    <div className="meta-section">
                      <h5>Shipping Information</h5>
                      <p>Standard Delivery</p>
                      <p>
                        {order.status === 'Delivered' ? 'Delivered on' : 'Estimated delivery'} 
                        <span> {order.deliveryDate}</span>
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PurchaseHistory;