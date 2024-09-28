const Transaction = require('../../../models/mongoose/transactionSchema');

const getExpenseStatement = async (req, res, next) => {
  try {
    const user = req.user;
    const currentYear = new Date().getFullYear();

    const expenses = await Transaction.find({
      userId: user._id,
      type: 'expense',
      createdAt: {
        $gte: new Date(`${currentYear}-01-01T00:00:00.000Z`),
        $lte: new Date(`${currentYear}-12-31T23:59:59.999Z`),
      },
    }).sort({ createdAt: 1 });

    const formattedExpenses = expenses.map(expense => ({
      _id: expense._id,
      description: expense.description,
      amount: Math.abs(expense.amount),
      date: expense.createdAt.toISOString().split('T')[0],
      category: expense.category,
    }));

    const monthStats = {
      January: 'N/A',
      February: 'N/A',
      March: 'N/A',
      April: 'N/A',
      May: 'N/A',
      June: 'N/A',
      July: 'N/A',
      August: 'N/A',
      September: 'N/A',
      October: 'N/A',
      November: 'N/A',
      December: 'N/A',
    };

    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    expenses.forEach(expense => {
      const monthIndex = expense.createdAt.getMonth();
      const monthName = monthNames[monthIndex];

      if (monthStats[monthName] === 'N/A') {
        monthStats[monthName] = 0;
      }

      monthStats[monthName] += Math.abs(expense.amount);
    });

    const response = {
      expenses: formattedExpenses,
      monthStats,
    };

    return res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = getExpenseStatement;
