const express = require('express');
const router = express.Router();

const authenticate = require('../controllers/auth/authenticateJWT');
const addExpense = require('../controllers/transaction/addExpense');
const addIncome = require('../controllers/transaction/addIncome');
const transactionController = require('../controllers/transaction/transactionController');
const getIncome = require('../controllers/transaction/getIncome');
const deleteTransaction = require('../controllers/transaction/transactionController');

router.post('/expense', authenticate, addExpense);
router.post('/income', authenticate, addIncome);
router.get('/income', authenticate, getIncome);
router.delete('/:id', authenticate, deleteTransaction);

module.exports = router;
