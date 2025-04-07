import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TransactionHistory = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [updatingId, setUpdatingId] = useState(null);
  const [deletingId, setDeletingId] = useState(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}`);
        setTransactions(res.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch transactions");
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  const handleStatusChange = async (id, newStatus) => {
    setUpdatingId(id);
    try {
      await axios.put(`${import.meta.env.VITE_API_URL}/${id}/status`, {
        status: newStatus,
      });

      setTransactions((prev) =>
        prev.map((tx) =>
          tx._id === id ? { ...tx, status: newStatus } : tx
        )
      );
    } catch (err) {
      alert("Failed to update status");
    } finally {
      setUpdatingId(null);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this transaction?")) return;

    setDeletingId(id);
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/${id}`);
      setTransactions((prev) => prev.filter((tx) => tx._id !== id));
    } catch (err) {
      alert("Failed to delete transaction");
    } finally {
      setDeletingId(null);
    }
  };

  if (loading) {
    return (
      <div className="text-center text-white py-12 text-2xl">
        Loading transactions...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-rose-400 py-12 text-2xl">
        {error}
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-4xl md:text-5xl font-extrabold text-white bg-gray-900 py-5 rounded-lg text-center shadow-md">
        Transaction History
      </h2>

      <div className="overflow-x-auto bg-gray-800 text-white shadow-lg rounded-lg mt-6">
        <table className="min-w-full border border-gray-700 rounded-lg">
          <thead>
            <tr className="bg-gray-700 text-gray-300">
              <th className="text-left py-6 px-8 border-b border-gray-600 text-xl md:text-2xl">User Name</th>
              <th className="text-left py-6 px-8 border-b border-gray-600 text-xl md:text-2xl">Amount Paid</th>
              <th className="text-left py-6 px-8 border-b border-gray-600 text-xl md:text-2xl">Payment Date</th>
              <th className="text-left py-6 px-8 border-b border-gray-600 text-xl md:text-2xl">Status</th>
              <th className="text-left py-6 px-8 border-b border-gray-600 text-xl md:text-2xl">Delete</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx) => (
              <tr key={tx._id} className="hover:bg-gray-700 transition-all duration-300">
                <td className="py-6 px-8 border-b border-gray-600 text-xl md:text-2xl">{tx.name}</td>
                <td className="py-6 px-8 border-b border-gray-600 text-xl md:text-2xl">₹{tx.amount}</td>
                <td className="py-6 px-8 border-b border-gray-600 text-xl md:text-2xl">
                  {new Date(tx.date).toLocaleDateString()}
                </td>
                <td className="py-6 px-8 border-b border-gray-600 text-xl md:text-2xl">
                  <select
                    value={tx.status}
                    onChange={(e) => handleStatusChange(tx._id, e.target.value)}
                    disabled={updatingId === tx._id}
                    className={`rounded-lg px-4 py-2 ${
                      tx.status === 'Paid'
                        ? 'bg-emerald-500 text-white'
                        : tx.status === 'Pending'
                        ? 'bg-amber-500 text-white'
                        : 'bg-rose-500 text-white'
                    }`}
                  >
                    <option value="Paid">Paid</option>
                    <option value="Pending">Pending</option>
                    <option value="Unpaid">Unpaid</option>
                  </select>
                </td>
                <td className="py-6 px-8 border-b border-gray-600">
                  <button
                    onClick={() => handleDelete(tx._id)}
                    disabled={deletingId === tx._id}
                    className="bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded-lg text-lg shadow-md transition"
                  >
                    {deletingId === tx._id ? "Deleting..." : "🗑 Delete"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionHistory;
