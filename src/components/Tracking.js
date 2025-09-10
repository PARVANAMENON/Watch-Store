import React from 'react';
import './Tracking.css';

const Tracking = ({ cartItems = [], orders = [] }) => (
  <div className="tracking-container">
    <h2>Order Tracking</h2>

    <div className="tracking-section">
      <h3>Items You Are Buying</h3>
      {cartItems.length === 0 ? (
        <p className="tracking-empty">Your cart is empty.</p>
      ) : (
        <ul className="tracking-list">
          {cartItems.map((item, idx) => (
            <li key={idx} className="tracking-item">
              <img src={item.image} alt={item.name} className="tracking-img" />
              <div className="tracking-details">
                <span className="tracking-name">{item.name}</span>
                <span className="tracking-qty">Qty: {item.qty || 1}</span>
                <span className="tracking-price">₹{item.price}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>

    <div className="tracking-section">
      <h3>Items You Bought</h3>
      {orders.length === 0 ? (
        <p className="tracking-empty">No past orders found.</p>
      ) : (
        <ul className="tracking-list">
          {orders.map((order, idx) => (
            <li key={idx} className="tracking-order">
              <div className="tracking-order-header">
                <span>Order #{order.id}</span>
                <span className="tracking-status">{order.status}</span>
                <span className="tracking-date">{order.date}</span>
              </div>
              <ul className="tracking-order-items">
                {order.items.map((item, i) => (
                  <li key={i} className="tracking-item">
                    <img src={item.image} alt={item.name} className="tracking-img" />
                    <div className="tracking-details">
                      <span className="tracking-name">{item.name}</span>
                      <span className="tracking-qty">Qty: {item.qty || 1}</span>
                      <span className="tracking-price">₹{item.price}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>
);

export default Tracking;