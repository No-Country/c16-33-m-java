import React from 'react';
import './Catalogo.css';

const Catalogo = () => {
  return (
    <div className="catalog-item">
      <button className="wishlist-button">
        <span className="sr-only">Wishlist</span>
        <i className="bi bi-heart"></i>
      </button>

      <img
        src="https://images.unsplash.com/photo-1599481238640-4c1288750d7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80"
        alt=""
        className="catalog-image"
      />

      <div className="catalog-details">
        <span className="new-badge">New</span>
        <h3 className="catalog-title">Robot Toy</h3>
        <p className="catalog-price">$14.99</p>

        <form className="add-to-cart-form">
          <button className="add-to-cart-button">Add to Cart</button>
        </form>
      </div>
    </div>
  );
};

export default Catalogo;
