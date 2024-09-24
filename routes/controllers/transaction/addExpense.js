const Transaction = require('../../../models/mongoose/transactionSchema');

const addExpense = async (req, res, next) => {
  try {
    const { amount, category, description } = req.body;
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
      return res.status(400).json({
        status: 'Error',
        code: 400,
        message: 'Amount is required and should be a positive number',
      });
    }

    if (!category || !expenseCategories.includes(category)) {
      return res.status(400).json({
        status: 'Error',
        code: 400,
        message: `Invalid category provided. Valid categories are: ${expenseCategories.join(', ')}`,
      });
    }

    const newExpense = new Transaction({
      userId: user._id,
      amount: -Math.abs(amount),
      category,
      description,
      type: 'expense',
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
        date: newExpense.createdAt.toISOString().split('T')[0],
        category: newExpense.category,
      },
    };

    return res.status(201).json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = addExpense;
