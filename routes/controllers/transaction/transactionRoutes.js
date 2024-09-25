const express = require('express');
const router = express.Router();
const { deleteTransaction, getMonthlyExpenses } = require('../transaction/transactionController');

router.delete('/transactions/:id', deleteTransaction);
router.get('/transactions/monthly-expenses', getMonthlyExpenses);

module.exports = router;
