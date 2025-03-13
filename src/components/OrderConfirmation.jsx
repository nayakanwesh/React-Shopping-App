export function OrderConfirmation() {
    return (
      <div className="container mt-4">
        <h2>Order Confirmed!</h2>
        <p>Thank you for your purchase. Your order is being processed and will be shipped soon.</p>
        <button className="btn btn-success" onClick={() => window.location.href = "/"}>
          Go to Home
        </button>
      </div>
    );
  }
  