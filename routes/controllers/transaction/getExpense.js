const Transaction = require('../../../models/mongoose/transactionSchema');

const getExpense = async (req, res) => {
  try {
    //  Tutaj trzeba to poprawić  ----------------------

    // const currentYear = new Date().getFullYear();
    // const expenses = await Transaction.aggregate([
    //   {
    //     $match: {
    //       type: 'expense',
    //       date: {
    //         $gte: new Date(`${currentYear}-01-01`),
    //         $lt: new Date(`${currentYear + 1}-01-01`),
    //       },
    //     },
    //   },
    //   {
    //     $group: {
    //       _id: { $month: '$date' },
    //       totalExpenses: { $sum: '$amount' },
    //     },
    //   },
    //   {
    //     $sort: { _id: 1 },
    //   },
    // ]);

    //  Tutaj trzeba to poprawić  ----------------------

    return res.status(200).json({ data: expenses });
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error });
  }
};

module.exports = getExpense;
