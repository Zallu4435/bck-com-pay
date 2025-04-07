const express = require('express');
const router = express.Router();
const {
  getTransactions,
  createTransaction,
  updateTransactionStatus,
  deleteTransaction,
  getDashboardStats
} = require('../controllers/transactionControllers');

router.get('/', getTransactions);
router.post('/', createTransaction);
router.put('/:id/status', updateTransactionStatus);
router.delete('/:id', deleteTransaction);

router.get('/dashboard-stats', getDashboardStats);


module.exports = router;  
