import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalViolations: 0,
    unpaidFines: 0,
    paidAmount: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDashboardStats = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/dashboard-stats`);
        setStats(res.data);
      } catch (err) {
        setError("Failed to load dashboard data");
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardStats();
  }, []);

  if (loading) {
    return <div className="text-white text-2xl text-center py-10">Loading dashboard...</div>;
  }

  if (error) {
    return <div className="text-rose-400 text-2xl text-center py-10">{error}</div>;
  }

  const cardData = [
    { title: "Total Violations", value: stats.totalViolations, color: "slate-400" },
    { title: "Unpaid Fines", value: `₹${stats.unpaidFines}`, color: "rose-400" },
    { title: "Paid Amount", value: `₹${stats.paidAmount}`, color: "emerald-400" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white bg-gray-900 py-6 sm:py-8 rounded-lg text-center shadow-lg tracking-wide">
        Dashboard Overview
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 mt-8 sm:mt-10">
        {cardData.map((item, index) => (
          <div
            key={index}
            className="bg-gray-800 text-white p-6 sm:p-10 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-gray-700 border border-gray-600"
          >
            <p className="text-lg sm:text-xl font-medium text-gray-300">{item.title}</p>
            <h3 className={`text-3xl sm:text-5xl md:text-6xl font-bold text-${item.color}`}>
              {item.value}
            </h3>
          </div>
        ))}
      </div>

      <div className="mt-12 sm:mt-14 bg-gray-900 text-white rounded-xl shadow-lg p-8 sm:p-10 border border-gray-700">
        <h3 className="text-2xl sm:text-3xl font-bold text-emerald-400 mb-3 sm:mb-4 tracking-wide">
          Add New Violation Transaction
        </h3>
        <p className="text-md sm:text-lg text-gray-300 mb-4 sm:mb-6">
          Stay ahead by recording violations instantly, ensuring accuracy and transparency.
        </p>
        <a
          href="/add-transaction"
          className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-md sm:text-lg py-3 sm:py-4 px-6 sm:px-8 rounded-lg shadow-md transition-all duration-300"
        >
          ➕ Add Violation Transaction
        </a>
      </div>
    </div>
  );
};

export default Dashboard;
