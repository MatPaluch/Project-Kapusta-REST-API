const Transaction = require('../../../models/mongoose/transactionSchema');

const addExpense = async (req, res, next) => {
  try {
    const { amount, category, description, date } = req.body;
    const user = req.user;

    const expenseCategories = [
      'Products',
      'Alcohol',
      'Entertainment',
      'Health',
      'Transport',
      'Housing',
      'Technique',
      'Communal, Communication',
      'Sports, Hobbies',
      'Education',
      'Other',
    ];

    if (!amount || amount <= 0) {
      return next({ status: 400, message: 'Amount is required and should be a positive number' });
    }

    if (!category || !expenseCategories.includes(category)) {
      return next({
        status: 400,
        message: `Invalid category provided. Valid categories are: ${expenseCategories.join(', ')}`,
      });
    }

    const transactionDate = date ? new Date(date) : null;
    if (!transactionDate || isNaN(transactionDate.getTime())) {
      return next({
        status: 400,
        message: 'Invalid or missing date. Please provide a valid date.',
      });
    }

    const newExpense = new Transaction({
      userId: user._id,
      amount: -Math.abs(amount),
      category,
      description,
      type: 'expense',
      date: transactionDate,
    });

    await newExpense.save();
    user.balance -= Math.abs(amount);
    await user.save();

    const response = {
      newBalance: user.balance,
      transaction: {
        _id: newExpense._id,
        description: newExpense.description,
        amount: Math.abs(newExpense.amount),
        date: transactionDate.toISOString().split('T')[0],
        category: newExpense.category,
      },
    };

    return res.status(201).json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = addExpense;
