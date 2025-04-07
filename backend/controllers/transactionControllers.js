const Transaction = require('../models/Transaction');

// Get all transactions
exports.getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new transaction
exports.createTransaction = async (req, res) => {
  try {
    const { name, amount, date, status } = req.body;

    if (!name || !amount || !date || !status) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const newTransaction = new Transaction({ name, amount, date, status });
    const savedTransaction = await newTransaction.save();

    res.status(201).json(savedTransaction);
  } catch (err) {
    console.error('Error creating transaction:', err.message);
    res.status(500).json({ message: "Failed to create transaction", error: err.message });
  }
};


// Update transaction status
exports.updateTransactionStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const updatedTransaction = await Transaction.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );
    if (!updatedTransaction) {
      return res.status(404).json({ message: 'Transaction not found' });
    }
    res.json(updatedTransaction);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


// DELETE /api/transactions/:id
exports.deleteTransaction = async (req, res) => {
  try {
    const deleted = await Transaction.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Transaction not found" });
    res.status(200).json({ message: "Transaction deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


exports.getDashboardStats = async (req, res) => {
  try {
    const transactions = await Transaction.find();

    const totalViolations = transactions.length;

    let unpaidFines = 0;
    let paidAmount = 0;

    transactions.forEach((tx) => {
      if (tx.status === 'Unpaid') {
        unpaidFines += tx.amount;
      } else if (tx.status === 'Paid') {
        paidAmount += tx.amount;
      }
    });

    res.json({
      totalViolations,
      unpaidFines,
      paidAmount,
    });
  } catch (error) {
    console.error('Error fetching dashboard stats:', error.message);
    res.status(500).json({ message: 'Failed to load dashboard stats' });
  }
};
