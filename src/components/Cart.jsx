import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Cart({ cart, removeFromCart, updateQuantity }) {
  const [paymentMethod, setPaymentMethod] = useState("");
  const navigate = useNavigate();

  // Calculate total price
  const totalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handlePayment = () => {
    if (!paymentMethod) {
      alert("Please select a payment method.");
      return;
    }

    const totalAmount = totalPrice();
    navigate("/payment", { state: { paymentMethod, cart, totalAmount } });
  };

  return (
    <div className="container mt-4">
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty. Please add some items to your cart.</p>
      ) : (
        <>
          <div className="cart-items">
            <ul className="list-group">
              {cart.map((item) => (
                <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                  <div>
                    <p>{item.title}</p>
                    <p>Price: ${item.price}</p>
                    <div className="d-flex">
                      <button
                        className="btn btn-sm btn-secondary me-2"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        -
                      </button>
                      <span>Quantity: {item.quantity}</span>
                      <button
                        className="btn btn-sm btn-secondary ms-2"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="order-summary mt-4">
            <h4>Order Summary</h4>
            <p>Total Price: ${totalPrice()}</p>
          </div>

          {/* Payment Methods */}
          <div className="payment-methods mt-4">
            <h4>Select Payment Method</h4>
            <div>
              <label>
                <input
                  type="radio"
                  name="payment"
                  value="credit-card"
                  onChange={() => setPaymentMethod("Credit Card")}
                />
                Credit Card
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  name="payment"
                  value="paypal"
                  onChange={() => setPaymentMethod("PayPal")}
                />
                PayPal
              </label>
            </div>
          </div>

          <div className="buy-section mt-4">
            <button className="btn btn-success w-100" onClick={handlePayment}>
              Proceed to Payment
            </button>
          </div>
        </>
      )}
    </div>
  );
}
