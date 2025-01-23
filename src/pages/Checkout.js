import React, { useState, useEffect } from "react";

const Checkout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading process
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate a 2-second loading time

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <div>
      <h2>Checkout</h2>
      {loading ? (
        <div>
          <p>Your order is in progress...</p>
          <div className="loader"></div> {/* Add a loader animation here */}
        </div>
      ) : (
        <p>Your order has been successfully processed!</p>
      )}
    </div>
  );
};

export default Checkout;
