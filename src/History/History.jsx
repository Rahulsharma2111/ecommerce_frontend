import React, { useEffect, useState } from 'react';
import './historyStyle.css';

const PurchaseHistory = () => {

  const [purchaseHistory, setPurchaseHistory] = useState([]);
  useEffect(() => {
    async function fetchPurchaseHistory() {
      try {
        const userData = JSON.parse(localStorage.getItem("user"));
        const user_id = userData.id;
        const idParam = new URLSearchParams({
          userId: user_id
        });
        const url = `http://localhost:8181/order/history?${idParam}`;
        const response = await fetch(url);
        const res = await response.json();
        console.log(res.data);
        if (res.data) {
          
          const transformedData = res.data.map(data => ({
            id: `ORD-${data.id}`,
            date: data.created_at,
            status: data.status,
            items: [
              {
                id: data.id, 
                name: 'Wireless Headphones ❌❌',
                price: data.per_piece_rate,
                quantity: data.quantity
              }
            ],
            total: data.total_amount,
            deliveryDate: '2023-10-20' // You might want to get this from API
          }));

          setPurchaseHistory(transformedData);
        }
      } catch (error) {
        console.error("Error fetching purchase history:", error.message);
      }
    }

    fetchPurchaseHistory();
  }, []);

  //   function history(history) {
  // 
  //     purchaseHistory.map((data) => (
  //       setPurchaseHistory({
  //         id: `ORD-${data.id}`,
  //         date: data.created_at,
  //         status: data.status,
  //         items: [
  //           { id: 1, name: 'Wireless Headphones ❌❌', price: data.per_piece_rate, quantity: data.quantity }
  //           // ,{ id: 2, name: 'USB-C Cable', price: 12.99, quantity: 2 }
  //         ],
  //         total: data.total_amount,
  //         deliveryDate: '2023-10-20'
  //       }
  //       )
  //     ))
  //   }
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
                  <span className="order-total">${order.total}</span>
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
                        <p className="item-price">${(item.price * item.quantity)}</p>
                      </div>
                    ))}
                  </div>

                  <div className="order-meta">
                    <div className="meta-section">
                      <h5>Order Summary</h5>
                      <div className="summary-row">
                        <span>Subtotal:</span>
                        <span>${order.total}</span>
                      </div>
                      <div className="summary-row">
                        <span>Shipping:</span>
                        <span>Free</span>
                      </div>
                      <div className="summary-row total">
                        <span>Total:</span>
                        <span>${order.total}</span>
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