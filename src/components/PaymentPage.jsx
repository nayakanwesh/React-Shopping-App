import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function PaymentPage() {
  const { state } = useLocation();
  const { paymentMethod, cart, totalAmount } = state || {};
  
  const [paymentStatus, setPaymentStatus] = useState(null);
  const navigate = useNavigate();

  const handlePayment = () => {
    // Simulate successful payment after a short delay (for demonstration purposes)
    setTimeout(() => {
      setPaymentStatus("success");
    }, 2000);
  };

  return (
    <div className="container mt-4">
      <h2>Proceed with {paymentMethod}</h2>

      {paymentStatus === null ? (
        <div>
          <h4>Total Amount: ${totalAmount}</h4>
          <p>Enter your payment details to complete the purchase.</p>
          {/* This is a mock payment form */}
          <div className="payment-form">
            <div className="mb-3">
              <label>Card Number</label>
              <input type="text" className="form-control" placeholder="Enter card number" />
            </div>
            <div className="mb-3">
              <label>Expiration Date</label>
              <input type="text" className="form-control" placeholder="MM/YY" />
            </div>
            <div className="mb-3">
              <label>CVV</label>
              <input type="text" className="form-control" placeholder="CVV" />
            </div>
            <button className="btn btn-primary" onClick={handlePayment}>
              Pay Now
            </button>
          </div>
        </div>
      ) : paymentStatus === "success" ? (
        <div className="alert alert-success">
          <h4>Payment Successful!</h4>
          <p>Your order has been processed. Thank you for shopping with us!</p>
          <button className="btn btn-primary" onClick={() => navigate("/order-confirmed")}>
            Proceed to Order Confirmation
          </button>
        </div>
      ) : null}
    </div>
  );
}
