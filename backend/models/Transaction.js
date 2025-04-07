const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  amount: { type: Number, required: true },
  date: { type: Date, required: true },
  status: { type: String, enum: ['Unpaid', 'Paid'], default: 'Unpaid' },
});

module.exports = mongoose.model('Transaction', transactionSchema);
