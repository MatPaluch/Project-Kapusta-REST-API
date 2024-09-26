const Transaction = require('../../../models/mongoose/transactionSchema');

const getMonthlyReport = async (req, res, next) => {
  try {
    const user = req.user;
    const { period } = req.query;

    const periodRegex = /^\d{4}-(0[1-9]|1[0-2])$/;
    if (!periodRegex.test(period)) {
      return res
        .status(400)
        .json({ status: 'Error', message: 'Invalid date format. Please use YYYY-MM.' });
    }

    const [year, month] = period.split('-');
    const startDate = new Date(`${year}-${month}-01T00:00:00.000Z`);
    const endDate = new Date(startDate);
    endDate.setMonth(endDate.getMonth() + 1);

    const transactions = await Transaction.find({
      userId: user._id,
      createdAt: {
        $gte: startDate,
        $lt: endDate,
      },
    });

    const response = {
      incomes: {
        total: 0,
        incomesData: {},
      },
      expenses: {
        total: 0,
        expensesData: {},
      },
    };

    transactions.forEach(transaction => {
      const transactionType = transaction.type === 'income' ? 'incomes' : 'expenses';
      const category = transaction.category || 'Other';
      const description = transaction.description || 'Unknown';

      if (!response[transactionType][`${transactionType}Data`][category]) {
        response[transactionType][`${transactionType}Data`][category] = {
          total: 0,
        };
      }

      if (!response[transactionType][`${transactionType}Data`][category][description]) {
        response[transactionType][`${transactionType}Data`][category][description] = 0;
      }

      response[transactionType][`${transactionType}Data`][category].total += Math.abs(
        transaction.amount
      );
      response[transactionType][`${transactionType}Data`][category][description] += Math.abs(
        transaction.amount
      );
      response[transactionType].total += Math.abs(transaction.amount);
    });

    return res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = getMonthlyReport;
