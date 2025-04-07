// pages/Payment.jsx
import React from 'react';

const Payment = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Pay Your Fine</h2>
      <form className="bg-white p-6 shadow rounded-lg space-y-4">
        <div>
          <label className="block mb-1 font-medium">Violation ID</label>
          <input type="text" className="w-full border border-gray-300 p-2 rounded" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Amount</label>
          <input type="text" className="w-full border border-gray-300 p-2 rounded" value="$150.00" readOnly />
        </div>
        <div>
          <label className="block mb-1 font-medium">Card Number</label>
          <input type="text" className="w-full border border-gray-300 p-2 rounded" />
        </div>
        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default Payment;
