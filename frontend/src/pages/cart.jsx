import React, { useState, useEffect } from "react";
import "./cart.css";

const Cart = () => {
  // Load cart items from localStorage or use default
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("cartItems");
    return saved ? JSON.parse(saved) : [];
  });

  const [savedItems, setSavedItems] = useState(() => {
    const saved = localStorage.getItem("savedItems");
    return saved ? JSON.parse(saved) : [];
  });

  // Sync cartItems with localStorage
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("savedItems", JSON.stringify(savedItems));
  }, [savedItems]);

  // Remove item from cart
  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Move item to saved items
  const saveForLater = (id) => {
    const item = cartItems.find((item) => item.id === id);
    setSavedItems([...savedItems, item]);
    removeFromCart(id);
  };

  // Move item from saved items to cart
  const moveToCart = (id) => {
    const item = savedItems.find((item) => item.id === id);
    setCartItems([...cartItems, item]);
    setSavedItems(savedItems.filter((item) => item.id !== id));
  };

  // Change quantity
  const changeQty = (id, qty) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, qty: parseInt(qty) } : item
      )
    );
  };

  // Remove all cart items
  const removeAll = () => setCartItems([]);

  // Calculate subtotal
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <div className="cart-container">
      <div className="cart-main">
        <div className="cart-items">
          {cartItems.length === 0 && <p>Your cart is empty!</p>}
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.img} alt={item.title} />
              <div className="cart-item-details">
                <h4>{item.title}</h4>
                <p>
                  Size: {item.size}, Color: {item.color}, Material:{" "}
                  {item.material}
                </p>
                <p>Seller: {item.seller}</p>
                <div className="cart-item-actions">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="remove"
                  >
                    Remove
                  </button>
                  <button
                    onClick={() => saveForLater(item.id)}
                    className="save"
                  >
                    Save for later
                  </button>
                </div>
              </div>
              <div className="cart-item-price">
                <p>${(item.price * item.qty).toFixed(2)}</p>
                <select
                  value={item.qty}
                  onChange={(e) => changeQty(item.id, e.target.value)}
                >
                  {[...Array(10).keys()].map((num) => (
                    <option key={num + 1}>{num + 1}</option>
                  ))}
                </select>
              </div>
            </div>
          ))}
          {cartItems.length > 0 && (
            <div className="cart-bottom-buttons">
              <button className="remove-all" onClick={removeAll}>
                Remove all
              </button>
            </div>
          )}
        </div>

        <div className="cart-summary">
          <h3>Summary</h3>
          <div className="summary-details">
            <p>
              Subtotal: <span>${subtotal.toFixed(2)}</span>
            </p>
            <hr />
            <h4>
              Total: <span>${subtotal.toFixed(2)}</span>
            </h4>
          </div>
          <button className="checkout-btn">Checkout</button>
        </div>
      </div>

      {/* Saved for later */}
      <h3 className="saved-title">Saved for later</h3>
      <div className="saved-items">
        {savedItems.map((item) => (
          <div className="saved-card" key={item.id}>
            <img src={item.img} alt={item.title} />
            <p className="saved-title-text">{item.title}</p>
            <p className="saved-price">${item.price.toFixed(2)}</p>
            <button
              className="move-to-cart"
              onClick={() => moveToCart(item.id)}
            >
              Move to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
