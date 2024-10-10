const Transaction = require('../../../models/mongoose/transactionSchema');

const getIncome = async (req, res, next) => {
  try {
    const user = req.user;
    const currentYear = new Date().getFullYear();

    const incomes = await Transaction.find({
      userId: user._id,
      type: 'income',
      date: {
        $gte: new Date(`${currentYear}-01-01T00:00:00.000Z`),
        $lte: new Date(`${currentYear}-12-31T23:59:59.999Z`),
      },
    }).sort({ date: 1 });

    const formattedIncomes = incomes.map(income => ({
      _id: income._id,
      description: income.description,
      amount: income.amount,
      date: income.date.toLocaleDateString('pl-PL', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      }), // Używamy toLocaleDateString do formatowania daty
      category: income.category,
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

    incomes.forEach(income => {
      const monthIndex = income.date.getMonth();
      const monthName = monthNames[monthIndex];

      if (monthStats[monthName] === 'N/A') {
        monthStats[monthName] = 0;
      }

      monthStats[monthName] += income.amount;
    });

    const response = {
      incomes: formattedIncomes,
      monthStats,
    };

    return res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = getIncome;
