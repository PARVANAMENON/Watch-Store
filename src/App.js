import './App.css';
import Header from './components/Header';
import Cart from './components/Cart';
import ProductCatalouge from './components/ProductCatalouge';
import Account from './components/Account';
import Wishlist from './components/Wishlist';
import Shop from './components/Shop';
import Tracking from './components/Tracking';
import Signin from './components/Signin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  // Add to cart handler
  const handleAddToCart = (product) => {
    const idx = cartItems.findIndex(item => item.name === product.name);
    if (idx !== -1) {
      const updated = [...cartItems];
      updated[idx] = { ...updated[idx], qty: (updated[idx].qty || 1) + 1 };
      setCartItems(updated);
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  // Add to wishlist handler
  const handleAddToWishlist = (product) => {
    if (!wishlistItems.some(item => item.name === product.name)) {
      setWishlistItems([...wishlistItems, product]);
    }
  };

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);

  const handleSignin = (userData) => {
    setUser(userData);
  };

  // Remove from cart handler
  const handleRemove = (idx) => {
    setCartItems(cartItems.filter((_, i) => i !== idx));
  };

  // Remove from wishlist handler
  const handleRemoveFromWishlist = (idx) => {
    setWishlistItems(wishlistItems.filter((_, i) => i !== idx));
  };

  // Increase quantity handler
  const handleIncreaseQty = (idx) => {
    const updated = [...cartItems];
    updated[idx] = { ...updated[idx], qty: (updated[idx].qty || 1) + 1 };
    setCartItems(updated);
  };

  // Decrease quantity handler
  const handleDecreaseQty = (idx) => {
    const updated = [...cartItems];
    if ((updated[idx].qty || 1) > 1) {
      updated[idx] = { ...updated[idx], qty: updated[idx].qty - 1 };
      setCartItems(updated);
    }
  };

  // Checkout handler
  const handleCheckout = () => {
    alert('Thank you for your purchase!');
    setCartItems([]);
  };

  // Buy now handler for Shop/ProductCatalouge
  const handleBuyNow = (product) => {
    handleAddToCart(product);
    alert(`Order placed for ${product.name}!`);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <ProductCatalouge
                onAddToCart={handleAddToCart}
                onAddToWishlist={handleAddToWishlist}
                onBuyNow={handleBuyNow}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                onRemove={handleRemove}
                onCheckout={handleCheckout}
                onIncreaseQty={handleIncreaseQty}
                onDecreaseQty={handleDecreaseQty}
              />
            }
          />
          <Route
            path="/wishlist"
            element={
              <Wishlist
                wishlistItems={wishlistItems}
                onRemoveFromWishlist={handleRemoveFromWishlist}
              />
            }
          />
          <Route
            path="/shop"
            element={
              <Shop
                onAddToCart={handleAddToCart}
                onAddToWishlist={handleAddToWishlist}
                onBuyNow={handleBuyNow}
              />
            }
          />
          <Route path="/account" element={<Account />} />
          <Route
            path="/tracking"
            element={
              user ? (
                <Tracking cartItems={cartItems} orders={orders} />
              ) : (
                <Signin onSignin={handleSignin} />
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


