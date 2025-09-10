import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const showBanner = location.pathname === '/';

  return (
    <>
      <header className="header">
        <div className="header-inner">
          <img
            src="https://i.pinimg.com/736x/2f/b2/f5/2fb2f52979e7750bb522e2f73709ad50.jpg"
            alt="Titan Logo"
            className="logo-img"
          />
          <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/wishlist">Wishlist</Link>
            <Link to="/account">Account</Link>
          </nav>
        </div>
      </header>
      {showBanner && (
        <div className="header-banner">
          <img
            src="https://media.istockphoto.com/id/628540774/photo/luxury-watches.jpg?s=612x612&w=0&k=20&c=lUY9ajPS1J1_h-ta-6n2VUIUSWUKVeJeWx_eDVjOc1c="
            alt="Titan Banner"
            className="header-banner-img"
          />
        </div>
      )}
    </>
  );
};

export default Header;

