const express = require('express');
const router = express.Router();

const authenticate = require('../controllers/auth/authenticateJWT');
const addExpense = require('../controllers/transaction/addExpense');
const addIncome = require('../controllers/transaction/addIncome');
const transactionController = require('../controllers/transaction/transactionController');
const transactionRoutes = require('../controllers/transaction/transactionRoutes');

router.post('/expense', authenticate, addExpense);
router.post('/income', authenticate, addIncome);

module.exports = router;
