const express = require('express');
const router = express.Router();
const { deleteTransaction } = require('../transaction/transactionController');

router.delete('/transactions/:id', deleteTransaction);

module.exports = router;
