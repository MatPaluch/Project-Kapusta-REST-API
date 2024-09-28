const express = require('express');
const router = express.Router();

const authenticate = require('../controllers/auth/authenticateJWT');
const addExpense = require('../controllers/transaction/addExpense');
const getExpense = require('../controllers/transaction/getExpense');
const addIncome = require('../controllers/transaction/addIncome');
const getIncome = require('../controllers/transaction/getIncome');
const deleteTransaction = require('../controllers/transaction/deleteTransaction');
const getMonthlyReport = require('../controllers/transaction/getMonthlyReport');
const getIncomeCategories = require('../controllers/transaction/getIncomeCategories');
const getExpenseCategories = require('../controllers/transaction/getExpenseCategories');

router.post('/expense', authenticate, addExpense);
router.get('/expense', authenticate, getExpense);
router.post('/income', authenticate, addIncome);
router.get('/income', authenticate, getIncome);
router.delete('/:id', authenticate, deleteTransaction);
router.get('/period-data', authenticate, getMonthlyReport);
router.get('/income-categories', authenticate, getIncomeCategories);
router.get('/expense-categories', authenticate, getExpenseCategories);

module.exports = router;
