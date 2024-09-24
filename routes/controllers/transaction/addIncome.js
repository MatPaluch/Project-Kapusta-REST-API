const Transaction = require('../../../models/mongoose/transactionSchema');

const addIncome = async (req, res, next) => {
  try {
    const { amount, category, description, date } = req.body;
    const user = req.user;

    const incomeCategories = ['Salary', 'Other income'];

    if (!amount || amount <= 0) {
      return next({ status: 400, message: 'Amount is required and should be a positive number' });
    }

    if (!category || !incomeCategories.includes(category)) {
      return next({
        status: 400,
        message: 'Invalid category provided. Valid categories are "Salary" and "Other income".',
      });
    }

    const transactionDate = date ? new Date(date) : null;
    if (!transactionDate || isNaN(transactionDate.getTime())) {
      return next({
        status: 400,
        message: 'Invalid or missing date. Please provide a valid date.',
      });
    }

    const newIncome = new Transaction({
      userId: user._id,
      amount: Math.abs(amount),
      category,
      description,
      type: 'income',
      createdAt: transactionDate,
    });

    await newIncome.save();
    user.balance += Math.abs(amount);
    await user.save();

    const response = {
      newBalance: user.balance,
      transaction: {
        _id: newIncome._id,
        description: newIncome.description,
        amount: newIncome.amount,
        date: transactionDate.toISOString().split('T')[0],
        category: newIncome.category,
      },
    };

    return res.status(201).json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = addIncome;
