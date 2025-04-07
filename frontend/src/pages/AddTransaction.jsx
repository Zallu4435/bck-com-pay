// // components/AddTransaction.jsx
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const AddTransaction = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     amount: "",
//     date: "",
//     status: "Unpaid",
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const existing = JSON.parse(localStorage.getItem("transactions")) || [];
//     const updated = [...existing, formData];
//     localStorage.setItem("transactions", JSON.stringify(updated));
//     navigate("/transactions");
//   };

//   return (
//     <div className="max-w-2xl mx-auto px-8 py-12 bg-gray-800 text-white rounded-lg shadow-lg">
//       <h2 className="text-4xl font-extrabold text-center text-emerald-400 mb-8">
//         Add Violation Transaction
//       </h2>

//       <form onSubmit={handleSubmit} className="space-y-6">
//         <div>
//           <label className="block text-lg font-semibold text-gray-300 mb-2">
//             User Name
//           </label>
//           <input
//             type="text"
//             name="name"
//             placeholder="Enter user name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//             className="w-full p-4 border border-gray-600 rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-emerald-400"
//           />
//         </div>

//         <div>
//           <label className="block text-lg font-semibold text-gray-300 mb-2">
//             Fine Amount
//           </label>
//           <input
//             type="number"
//             name="amount"
//             placeholder="Enter fine amount"
//             value={formData.amount}
//             onChange={handleChange}
//             required
//             className="w-full p-4 border border-gray-600 rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-emerald-400"
//           />
//         </div>

//         <div>
//           <label className="block text-lg font-semibold text-gray-300 mb-2">
//             Violation Date
//           </label>
//           <input
//             type="date"
//             name="date"
//             value={formData.date}
//             onChange={handleChange}
//             required
//             className="w-full p-4 border border-gray-600 rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-emerald-400"
//           />
//         </div>

//         <div>
//           <label className="block text-lg font-semibold text-gray-300 mb-2">
//             Status
//           </label>
//           <select
//             name="status"
//             value={formData.status}
//             onChange={handleChange}
//             className="w-full p-4 border border-gray-600 rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-emerald-400"
//           >
//             <option value="Unpaid">Unpaid</option>
//             <option value="Paid">Paid</option>
//           </select>
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-emerald-500 hover:bg-emerald-600 text-white text-lg font-bold py-4 rounded-lg shadow-lg transition duration-300"
//         >
//           ➕ Submit Transaction
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddTransaction;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddTransaction = () => {
  const [formData, setFormData] = useState({
    name: "",
    amount: "",
    date: "",
    status: "Unpaid",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(import.meta.env.VITE_API_URL, formData);
      navigate("/transactions");
    } catch (err) {
      console.error("Error submitting transaction:", err.message);
      alert("Failed to submit transaction.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-8 py-12 bg-gray-800 text-white rounded-lg shadow-lg">
      <h2 className="text-4xl font-extrabold text-center text-emerald-400 mb-8">
        Add Violation Transaction
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-lg font-semibold text-gray-300 mb-2">
            User Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter user name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-4 border border-gray-600 rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-emerald-400"
          />
        </div>

        <div>
          <label className="block text-lg font-semibold text-gray-300 mb-2">
            Fine Amount
          </label>
          <input
            type="number"
            name="amount"
            placeholder="Enter fine amount"
            value={formData.amount}
            onChange={handleChange}
            required
            className="w-full p-4 border border-gray-600 rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-emerald-400"
          />
        </div>

        <div>
          <label className="block text-lg font-semibold text-gray-300 mb-2">
            Violation Date
          </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full p-4 border border-gray-600 rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-emerald-400"
          />
        </div>

        <div>
          <label className="block text-lg font-semibold text-gray-300 mb-2">
            Status
          </label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full p-4 border border-gray-600 rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-emerald-400"
          >
            <option value="Unpaid">Unpaid</option>
            <option value="Paid">Paid</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-emerald-500 hover:bg-emerald-600 text-white text-lg font-bold py-4 rounded-lg shadow-lg transition duration-300"
        >
          ➕ Submit Transaction
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
